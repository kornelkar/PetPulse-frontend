import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChatService} from "../../../core/services/chat/chat.service";
import {Message} from "../../../core/models/chat.model";

@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.scss'
})

export class ChatRoomComponent implements OnInit {
  @ViewChild('chatContainer')
  private chatContainer!: ElementRef;
  @Input() roomId?: number;

  messages?: Message[];
  newMessage: string = '';

  constructor (
    private changeDetectorRef: ChangeDetectorRef,
    private chatService: ChatService

  ) {}

  ngOnChanges(): void {
    // Załaduj wiadomości za każdym razem, gdy zmieni się roomId
    if (this.roomId) {
      this.loadMessages();
    }
  }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages() {
    if (this.roomId) {
      this.chatService.getChatByRoomId(this.roomId).subscribe({
        next: (data) => {
          // Przekształć obiekt na tablicę wiadomości z asercją typu
          this.messages = Object.values(data).filter((item): item is Message => typeof item === 'object' && item !== null);
        },
        error: (error) => console.error(error)
      });
    }
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    const toUserId = this.messages && this.messages.length > 0 ? this.messages[0].to_user_id : null;
    if (!toUserId) {
      // Obsłuż przypadki, gdy nie ma `to_user_id`, może wyświetlając komunikat użytkownikowi.
      return;
    }

    this.chatService.sendMessage(toUserId, this.newMessage, this.roomId).subscribe({
      next: (data) => {
        this.messages?.push(data);
        this.changeDetectorRef.detectChanges(); // Zgłoś wykrywanie zmian
        this.scrollToBottom(); // Przewiń do nowej wiadomości
        this.newMessage = '';
      },
      error: (error) => console.error(error)
    });
  }

  private scrollToBottom(): void {
    // Zakładamy, że masz referencję do kontenera wiadomości.
    // Przewiń do dołu kontenera.
    this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
  }
}
