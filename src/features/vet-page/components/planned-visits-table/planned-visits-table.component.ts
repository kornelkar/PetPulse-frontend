import {Component, OnInit} from '@angular/core';
import {VisitService} from "../../../../core/services/visit/visit.service";
import {VisitInfo} from "../../../../core/models/visit.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'planned-visits-table',
  templateUrl: './planned-visits-table.component.html',
  styleUrl: './planned-visits-table.component.scss'
})
export class PlannedVisitsTableComponent implements OnInit {
  selectedVisitDetails: VisitInfo | null | undefined = null;

  visits!: VisitInfo[];
  visitId!: number;
  visitDetails: any;

  constructor(
    private visitService: VisitService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.loadAllVisits();
  }

  loadAllVisits(): void {
    this.visitService.getAllVisits().subscribe({
      next: (data) => {
        this.visits = data;
        console.log(this.visits);
      },
      error: (error) => {
        console.error('Wystąpił błąd podczas pobierania danych o wizytach:', error);
      }
    });
  }

  // getVisitDetails(): void {
  //   // Pobieranie ID wizyty z parametrów routingu
  //   this.visitId = +this.route.snapshot.paramMap.get('id');
  //
  //   // Wywołanie serwisu do pobrania szczegółów wizyty
  //   this.visitService.getVisitById(this.visitId).subscribe({
  //     next: (data) => {
  //       this.visitDetails = data;
  //     },
  //     error: (error) => {
  //       console.error('Wystąpił błąd podczas pobierania danych o wizycie:', error);
  //     }
  //   });
  // }

  updateVisitDetails(updateVisit: VisitInfo): void {
    this.visitService.updateVisit(updateVisit.id!, updateVisit).subscribe({
      next: (response) => {
        console.log('Wizyta została zaktualizowana', response);
      },
      error: (error) => {
        console.error('Wystąpił błąd podczas aktualizacji wizyty', error);
      }
    });
  }


  onVisitEditClick(visitInfo: VisitInfo): void {
this.selectedVisitDetails = visitInfo;
  }

  onStartVisitClick(visitInfo: VisitInfo): void {
    this.selectedVisitDetails = {
      id: visitInfo.id,
      animal_id: visitInfo.animal_id
    };
  }
}
