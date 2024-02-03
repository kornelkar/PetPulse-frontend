import {Component, Input, OnInit} from '@angular/core';
import {OwnerInfo} from "../../../../core/models/owner-info.model";
import {UserType} from "../../../../shared/enums/user-type.enum";
import {OwnerService} from "../services/owner.service";

@Component({
  selector: 'basic-owner-info-table',
  templateUrl: './basic-owner-info-table.component.html',
  styleUrl: './basic-owner-info-table.component.scss'
})
export class BasicOwnerInfoTableComponent implements OnInit {
 owner!: OwnerInfo;

  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
    // this.getOwner()
  }

  getOwner() {
    // this.ownerService.getOwnerById(1).subscribe({
    //   next: (owner) => console.log(owner),
    //   error: (error) => console.error(error)
    // });
  }
}
