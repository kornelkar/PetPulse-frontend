import {Component, Input, OnInit} from '@angular/core';
import {OwnerInfo} from "../../../../core/models/owner-info.model";
import {UserType} from "../../../../shared/enums/user-type.enum";
import {OwnerService} from "../services/owner.service";
import {UserDetails} from "../../../user-details/models/user-details.model";
import {AuthService} from "../../../../core/services/auth/auth.service";

@Component({
  selector: 'basic-owner-info-table',
  templateUrl: './basic-owner-info-table.component.html',
  styleUrl: './basic-owner-info-table.component.scss'
})
export class BasicOwnerInfoTableComponent implements OnInit {
 ownerInfo!: OwnerInfo;

  constructor(
    private ownerService: OwnerService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadUserInfo();
  }

  loadUserInfo(): void {
    this.authService.getUserInfo().subscribe(
      data => {
        this.userInfo = data;
        console.log(this.userInfo);
        this.loadOwnerInfo();
      },
      error => {
        console.error('Error fetching user info', error);
      }
    );
  }

  loadOwnerInfo(): void {
    if (this.userInfo && this.userInfo.id) {
      this.ownerService.getOwnerById(this.userInfo.id).subscribe(
        data => {
          this.ownerInfo = data;
          console.log(this.ownerInfo);
        },
        error => {
          console.error('Error fetching owner info', error);
        }
      );
    } else {
      console.warn('UserInfo is not loaded yet or missing ID');
    }
  }

  selectedUserDetails: OwnerInfo | null = null;

  userInfo!: OwnerInfo


  onUserEditClick(ownerInfo: OwnerInfo) {
    this.selectedUserDetails = ownerInfo;
  }

  handleUpdate(updatedUserDetails: OwnerInfo) {
    console.log(updatedUserDetails);
  }
}
