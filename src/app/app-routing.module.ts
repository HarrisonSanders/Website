import { PortfolioResolver } from './portfolio/portfolio.resolver';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { MoreComponent } from './more/more.component';
import { InProgressResolver } from './portfolio/in-progress.resolver';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    resolve: {
      games: PortfolioResolver,
      in_progress: InProgressResolver
    }
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: MoreComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [ ]
})
export class AppRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/