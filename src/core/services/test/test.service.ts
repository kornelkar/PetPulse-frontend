import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestResultsService {
  private baseUrl: string = 'http://zwierzaczki-backend.test/api/test';

  constructor(private http: HttpClient) { }

  getTestByAnimalId(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      })
    };

    return this.http.get(url, httpOptions);
  }

  createTestResult(testData: {
    name: string,
    description: string,
    start_date: string,
    end_date: string,
    animal_id: number,
    visit_id: number
  }): Observable<any> {
    const url = `${this.baseUrl}/create`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      })
    };

    return this.http.post(url, testData, httpOptions);
  }
}
