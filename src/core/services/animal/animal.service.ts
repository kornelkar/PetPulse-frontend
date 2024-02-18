import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AnimalInfo} from "../../models/animal-info.model";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private baseUrl = 'http://zwierzaczki-backend.test/api/animal';

  constructor(private http: HttpClient) {}


  getAllAnimals(): Observable<AnimalInfo[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      })
    };
    return this.http.get<AnimalInfo[]>(this.baseUrl, httpOptions);
  }

  getAllOwnersAnimals(ownerId: number | undefined): Observable<AnimalInfo[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      })
    };
    return this.http.get<AnimalInfo[]>(`${this.baseUrl.replace('animal', `owner/animals/${ownerId}`)}`, httpOptions);
  }

  getAnimalById(id: number): Observable<AnimalInfo> {
    const url = `${this.baseUrl}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      })
    };
    return this.http.get<AnimalInfo>(url, httpOptions);
  }

  updateAnimal(id: number, animalData: any): Observable<any> {
    const url = `${this.baseUrl}/update/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      })
    };
    return this.http.patch(url, animalData, httpOptions);
  }

  createNewAnimal(animalData: AnimalInfo): Observable<any> {
    const url = `${this.baseUrl}/create`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authToken') // Pobierz token z localStorage
      })
    };
    return this.http.post(url, animalData, httpOptions);
  }

}
