import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../../models/role.model";

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = 'http://zwierzaczki-backend.test/api/role';

  constructor(private http: HttpClient) { }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiUrl);
  }

  // Przechowuj dane lokalnie po pobraniu
  roles: Role[] = [];

  fetchRoles() {
    this.getRoles().subscribe(data => {
      this.roles = data;
    });
  }

  getRoleById(id: number): Role | undefined {
    return this.roles.find(role => role.id === id);
  }
}
