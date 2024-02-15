import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AnimalBreed} from "../../models/animal-info.model";

@Injectable({
  providedIn: 'root'
})
export class AnimalBreedService {
  private apiUrl = 'http://zwierzaczki-backend.test/api/breed';

  constructor(private http: HttpClient) { }

  getAnimalBreeds(): Observable<AnimalBreed[]> {
    const token = localStorage.getItem('authToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<AnimalBreed[]>(this.apiUrl, httpOptions);
  }
}
