import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {VisitInfo} from "../../models/visit.model";

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  private baseUrl: string = 'http://zwierzaczki-backend.test/api/visit';

  constructor(private http: HttpClient) { }

  getAllVisits(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      })
    };

    return this.http.get(this.baseUrl, httpOptions);
  }

  getAllOwnerVisits(ownerId: number | undefined): Observable<VisitInfo[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      })
    };

    return this.http.get<VisitInfo[]>(`${this.baseUrl.replace('visit', `animal/visits/all/${ownerId}`)}`, httpOptions);
  }

  getVisitById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      })
    };

    return this.http.get(url, httpOptions)
  }

  updateVisit(id: number, visitData: any): Observable<any> {
    const url = `${this.baseUrl}/update/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      })
    };

    return this.http.patch(url, visitData, httpOptions);
  }
}
