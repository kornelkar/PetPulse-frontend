import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestResultsService {
  private baseUrl: string = 'http://zwierzaczki-backend.test/api/test';

  constructor(private http: HttpClient) { }

  getAllTestResults(): Observable<any> {
    const url = `${this.baseUrl}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      })
    };

    return this.http.get(url, httpOptions);
  }

  getTestResultsByAnimalId(animalId: number | undefined): Observable<any> {
    const url = `${this.baseUrl}/animal/${animalId}`;
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
    animal_id: number,
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
