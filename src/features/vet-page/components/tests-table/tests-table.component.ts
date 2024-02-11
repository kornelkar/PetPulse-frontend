import {Component, Input, OnInit} from '@angular/core';
import {TestResult} from "../../../../core/models/test-result.model";
import {TestResultsService} from "../../../../core/services/test/test.service";
import {AnimalInfo} from "../../../../core/models/animal-info.model";

@Component({
  selector: 'tests-table',
  templateUrl: './tests-table.component.html',
  styleUrl: './tests-table.component.scss'
})
export class TestsTableComponent implements OnInit {
  @Input() animalId!: number | undefined;

  tests?: TestResult[];

  constructor(private testResultService: TestResultsService) {
  }

  ngOnInit() {
    this.loadAllTests()
  }

  loadAllTests(): void {
    this.testResultService.getTestResultsByAnimalId(this.animalId).subscribe(
      (data: TestResult[]) => {
        this.tests = data;
      },
      error => {
        console.log('Nie udało się pobrać wyników badań', error);
      }
    );
  }


}
