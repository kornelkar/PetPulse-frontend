import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private baseUrl: string = 'http://zwierzaczki-backend.test/api/calendar';

  constructor(private http: HttpClient) { }

  getAllAppointments(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      })
    };

    return this.http.get(this.baseUrl, httpOptions);
  }

  createAppointment(appointmentData: {
    name: string,
    description: string,
    start_date: string,
    end_date: string,
    user_id: number,
    animal_id: number
  }): Observable<any> {
    const url = `${this.baseUrl}/create`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      })
    };

    return this.http.post(url, appointmentData, httpOptions);
  }
}
