import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../../models/role.model";

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = 'http://zwierzaczki-backend.test/api/role';

  // Załóżmy, że już masz zdefiniowane nagłówki, jeśli są potrzebne do autoryzacji itp.
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('authToken') // Zakładam, że token autoryzacyjny jest przechowywany w localStorage
    })
  };

  roles: Role[] = [];

  constructor(private http: HttpClient) { }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiUrl);
  }

  fetchRoles() {
    this.getRoles().subscribe(data => {
      this.roles = data;
    });
  }

  getRoleById(id: number): Role | undefined {
    return this.roles.find(role => role.id === id);
  }

  updateUserRole(userId: number, roleId: number): Observable<any> {
    const data = { role_id: roleId };
    const url = `http://zwierzaczki-backend.test/api/user/update/role/${userId}?role_id=${roleId}`;
    return this.http.patch(url, data, this.httpOptions);
  }
}

