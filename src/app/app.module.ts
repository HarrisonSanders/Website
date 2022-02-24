import { LocalHeaderComponent } from './shared/local-header/local-header.component';
import { ProjectsService } from './home/projects/projects.service';
import { ProjectsComponent } from './home/projects/projects.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng4-click-outside';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './home/about/about.component';
import { ProjectsResolver } from './home/projects/projects.resolver';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { InfoDialogComponent, SafePipe } from './home/projects/info-dialog/info-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { InProgressResolver } from './home/projects/projects.old.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    ResumeComponent,
    ContactComponent,
    AboutComponent,
    LocalHeaderComponent,
    InfoDialogComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClickOutsideModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProjectsService,
    ProjectsResolver,
    InProgressResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
