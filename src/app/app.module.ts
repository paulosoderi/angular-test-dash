import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SolutionListComponent } from './solution-list/solution-list.component';
import { SolutionDetailsComponent } from './solution-details/solution-details.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: SolutionListComponent },
      { path: 'solutions/:solutionId', component: SolutionDetailsComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SolutionListComponent,
    SolutionDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
