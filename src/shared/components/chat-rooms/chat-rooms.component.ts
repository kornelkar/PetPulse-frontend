import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChatService} from "../../../core/services/chat/chat.service";
import {ChatRooms} from "../../../core/models/chat.model";

@Component({
  selector: 'chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrl: './chat-rooms.component.scss'
})
export class ChatRoomsComponent implements OnInit {
  chatRooms?: ChatRooms[];
  isChatActive = false;
  activeRoomId?: number;

  @Output() chatSelected = new EventEmitter<number>();

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.loadChatRooms();
  }

  loadChatRooms() {
    this.chatService.getChatRooms().subscribe({
      next: (data) => {
        this.chatRooms = data;
      },
      error: (error) => console.error(error)
    });
  }

  openChat(roomId?: number): void {
    this.isChatActive = true;
    this.activeRoomId = roomId;
    this.chatSelected.emit(roomId);
  }
}

