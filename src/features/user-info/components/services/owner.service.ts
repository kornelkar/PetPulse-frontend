import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OwnerInfo} from "../../../../core/models/owner-info.model";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private baseUrl = 'http://zwierzaczki-backend.test/api/owner';

  constructor(private http: HttpClient) { }

  // Metoda do pobierania informacji o właścicielu na podstawie ID
  getOwnerById(id: number): Observable<OwnerInfo> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<OwnerInfo>(url);
  }
}
