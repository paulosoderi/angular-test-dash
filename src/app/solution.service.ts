import { Injectable } from '@angular/core';
import { Solution } from './solutions';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SolutionService {
  solutions: Solution[] = [];
  test2: any;

  constructor(private http: HttpClient) {
    this.solutions = [
      {
        id: 1,
        name: 'Quote',
        sourceSystem: 'AS400 - OTA',
        frequency: 'Daily',
        comments: '',
        uiGroup: 'Quote',
        average: '',
        status: '',
      },
      {
        id: 3,
        name: 'Quote',
        sourceSystem: 'TW',
        frequency: 'Daily',
        comments: '',
        uiGroup: 'Quote',
        average: '',
        status: '',
      },
      {
        id: 4,
        name: 'Policy',
        sourceSystem: 'TW2',
        frequency: 'Daily',
        comments: '',
        uiGroup: 'Policy',
        average: '',
        status: '',
      },
      {
        id: 5,
        name: 'name',
        sourceSystem: 'Test',
        frequency: 'Daily',
        comments: '',
        uiGroup: 'Other',
        average: '',
        status: '',
      },
    ];
  }

  public sendGetRequest() {
    return this.http.get('http://localhost:5002/solutions');
  }

  public getSolutions() {
    return this.solutions;
  }
}
