import { LocalHeaderComponent } from './shared/local-header/local-header.component';
import { PortfolioService } from './portfolio/portfolio.service';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CarouselComponent } from './home/carousel/carousel.component';
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
import { MoreComponent } from './more/more.component';
import { PortfolioResolver } from './portfolio/portfolio.resolver';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { InfoDialogComponent, SafePipe } from './portfolio/info-dialog/info-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { InProgressResolver } from './portfolio/in-progress.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    MoreComponent,
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
    PortfolioService,
    PortfolioResolver,
    InProgressResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
