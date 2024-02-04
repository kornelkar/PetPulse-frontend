import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInfo} from "../../models/user-info.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://zwierzaczki-backend.test/api/user';

  constructor(private http: HttpClient) { }

  // Metoda do pobierania informacji o użytkowniku na podstawie ID
  getUserById(id: number): Observable<UserInfo> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<UserInfo>(url);
  }
}