import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AnimalType} from "../../models/animal-info.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AnimalTypeService {
  private apiUrl = 'http://zwierzaczki-backend.test/api/animal-type';

  constructor(private http: HttpClient) {}

  getAnimalTypes(): Observable<AnimalType[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      })
    };
    return this.http.get<AnimalType[]>(this.apiUrl, httpOptions);
  }
}
