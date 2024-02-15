import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private baseUrl = 'http://zwierzaczki-backend.test/api/chat';

  constructor(private http: HttpClient) { }

  getChatRooms(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      })
    };
    return this.http.get(`${this.baseUrl}`, httpOptions);
  }

  getChatByRoomId(roomId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      })
    };
    return this.http.get(`${this.baseUrl}/${roomId}`, httpOptions);
  }

  sendMessage(toUserId: number | undefined, message: string, roomId?: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      })
    };
    const params = new URLSearchParams({
      to_user_id: toUserId ? toUserId.toString() : '',
      message,
      room_id: roomId ? roomId.toString() : ''
    });
    return this.http.post(`${this.baseUrl}/create?${params}`, httpOptions);
  }
}
