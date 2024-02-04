import {Component, Input} from '@angular/core';
import {UserDetails} from '../../models/user-details.model';
import {UserType} from "../../../../shared/enums/user-type.enum";
import {AuthService} from "../../../../core/services/auth/auth.service";
import {UserService} from "../../../../core/services/user-info/user.service";

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  selectedUserDetails: UserDetails | null = null;

  // userInfo: UserDetails[];

  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    // this.loadUserInfo();
    // loadOwnerInfo jest teraz wywoływane wewnątrz loadUserInfo, gdy dane są dostępne
  }


  // loadUserInfo(): void {
  //   this.authService.getUserInfo().subscribe(
  //     data => {
  //       this.userInfo = data;
  //       console.log(this.userInfo);
  //       // Wywołaj loadOwnerInfo() tylko po pomyślnym załadowaniu userInfo
  //       this.loadUserInfo();
  //     },
  //     error => {
  //       console.error('Error fetching user info', error);
  //     }
  //   );
  // }
  //
  // loadUserInfo(): void {
  //   // Upewnij się, że userInfo jest zdefiniowane i posiada id
  //   if (this.userInfo && this.userInfo.id) {
  //     this.userService.getUserById(this.userInfo.id).subscribe(
  //       data => {
  //         this.userInfo = data;
  //         console.log(this.userInfo);
  //       },
  //       error => {
  //         console.error('Error fetching owner info', error);
  //       }
  //     );
  //   } else {
  //     console.warn('UserInfo is not loaded yet or missing ID');
  //   }
  // }


  onUserEditClick(userDetails: UserDetails) {
    this.selectedUserDetails = userDetails;
  }

  handleUpdate(updatedUserDetails: UserDetails) {
    // Logika aktualizacji danych użytkownika, np. wywołanie serwisu
    console.log(updatedUserDetails);
    // Potencjalnie zaktualizuj listę użytkowników lub wykonaj inne czynności
  }

  onUserDeleteClick(): void {

  }
}
