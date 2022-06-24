import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolutionService } from '../solution.service';
import { Solution } from '../solutions';

@Component({
  selector: 'app-solution-details',
  templateUrl: './solution-details.component.html',
  styleUrls: ['./solution-details.component.css'],
})
export class SolutionDetailsComponent implements OnInit {
  solution: Solution | undefined;

  constructor(
    private route: ActivatedRoute,
    private solutionService: SolutionService
  ) {}

  solutionItems = this.solutionService.getSolutions();

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const solutionIdFromRoute = Number(routeParams.get('solutionId'));

    // Find the solution that correspond with the id provided in route.
    this.solution = this.solutionItems.find(
      (solution) => solution.id === solutionIdFromRoute
    );
  }
}
