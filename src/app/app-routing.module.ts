import { ProjectsResolver } from './home/projects/projects.resolver';
import { ProjectsComponent } from './home/projects/projects.component';
import { HomeComponent } from './home/home.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './home/about/about.component';
import { InProgressResolver } from './home/projects/projects.old.resolver';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      games: ProjectsResolver,
      in_progress: InProgressResolver
    }
  },
  {
    path: 'contact',
    component: ContactComponent
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