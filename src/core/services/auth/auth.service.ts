import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable, of} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentTokenSubject: BehaviorSubject<string | null>;

  constructor(private http: HttpClient) {
    this.currentTokenSubject = new BehaviorSubject<string | null>(localStorage.getItem('authToken'));
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://zwierzaczki-backend.test/api/login', {email, password}).pipe(
      map(response => {
        const token = response.token || response;
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

  register(email: string, name: string, password: string, passwordCheck: string): Observable<any> {
    return this.http.post<any>('http://zwierzaczki-backend.test/api/register', {
      email,
      name,
      password,
      passwordCheck
    }).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        console.error('Registration error', error);
        return of(error);
      })
    )
  }


  logout(): Observable<any> {
    // Sprawdzenie, czy token istnieje
    if (!this.currentTokenSubject.value) {
      return of({error: "No token found"});
    }

    return this.http.post('http://zwierzaczki-backend.test/api/logout', {}, {
      headers: {Authorization: `Bearer ${this.currentTokenSubject.value}`}
    }).pipe(
      tap(() => {
        this.currentTokenSubject.next(null);
        console.log('Logout successful');
      }),
      catchError(error => {
        console.error('Logout error', error);
        return of(null);
      })
    );
  }

  public get currentToken(): string | null {
    return this.currentTokenSubject.value;
  }
}
