import {Component, OnInit} from '@angular/core';
import {VisitInfo} from "../../../../core/models/visit.model";
import {VisitService} from "../../../../core/services/visit/visit.service";
import {UserInfo} from "../../../../core/models/user-info.model";
import {AuthService} from "../../../../core/services/auth/auth.service";

@Component({
  selector: 'all-owner-visits',
  templateUrl: './all-owner-visits.component.html',
  styleUrl: './all-owner-visits.component.scss'
})
export class AllOwnerVisitsComponent implements OnInit{
  visits!: VisitInfo[];
  visitId!: number;
  visitDetails: any;
  userInfo!: UserInfo;

  constructor(
    private visitService: VisitService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
   this.loadUserInfo()
  }

  loadOwnerVisits(): void {
    this.visitService.getAllOwnerVisits(this.userInfo.owner?.id).subscribe({
      next: (data) => {
        this.visits = data;
      },
      error: (err) => {
        console.error('Error loading owner visits', err);
      }
    });
  }

  loadUserInfo(): void {
    this.authService.getUserInfo().subscribe(
      data => {
        this.userInfo = data;
        this.loadOwnerVisits();
      },
      error => {
        console.error('Error fetching user info', error);
      }
    );
  }
}
