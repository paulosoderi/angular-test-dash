import { Component, OnInit } from '@angular/core';
import { SolutionService } from '../solution.service';

@Component({
  selector: 'app-solution-list',
  templateUrl: './solution-list.component.html',
  styleUrls: ['./solution-list.component.css'],
})
export class SolutionListComponent implements OnInit {
  solutionItems = this.solutionService.getSolutions();
  solutionItems2 = [];
  constructor(private solutionService: SolutionService) {}

  ngOnInit() {
    this.solutionService.sendGetRequest().subscribe((data: any) => {
      console.log(data);
      this.solutionItems2 = data;
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

/*

import { Component } from '@angular/core';

import { solutions } from '../solutions';
import { SolutionService } from '../solution.service';

@Component({
  selector: 'app-solution-list',
  templateUrl: './solution-list.component.html',
  styleUrls: ['./solution-list.component.css'],
})
export class SolutionListComponent {
  solutions = solutions;

  share() {
    window.alert('The solution has been shared!');
  }
}*/
