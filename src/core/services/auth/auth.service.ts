import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://zwierzaczki-backend.test/api/login';
  private currentTokenSubject: BehaviorSubject<string | null>;

  constructor(private http: HttpClient) {
    this.currentTokenSubject = new BehaviorSubject<string | null>(localStorage.getItem('authToken'));
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password }).pipe(
      map(response => {
        const token = response.token || response; // Zakładając, że token jest w polu "token" lub jest samą odpowiedzią
        if (token) {
          localStorage.setItem('authToken', token);
          this.currentTokenSubject.next(token);
        } else {
          console.error('Token not found in response');
        }
        return token;
      })
    );
  }

  logout() {
    // Usuń token z localStorage
    localStorage.removeItem('authToken');
    this.currentTokenSubject.next(null);
  }

  public get currentToken(): string | null {
    return this.currentTokenSubject.value;
  }
}
