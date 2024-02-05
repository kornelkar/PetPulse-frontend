import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDetails} from "../../../features/user-details/models/user-details.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://zwierzaczki-backend.test/api/user';

  constructor(private http: HttpClient) {
  }

  // Metoda do pobierania informacji o użytkowniku na podstawie ID
  getUserById(id: number): Observable<UserDetails> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<UserDetails>(url);
  }

  getAllUsers(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>(this.baseUrl);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.baseUrl}/destroy/${id}`;
    return this.http.delete(url);
  };

  updateUserData(id: number, userDetails: UserDetails): Observable<any> {
    const url = `${this.baseUrl}/update/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      })
    };
    return this.http.patch(url, userDetails, httpOptions);
  }
}
