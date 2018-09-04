import { LocalHeaderComponent } from './shared/local-header/local-header.component';
import { PortfolioService } from './portfolio/portfolio.service';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PortfolioResolver } from './portfolio/portfolio.resolver';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

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
    AboutComponent,
    LocalHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PortfolioService,
    PortfolioResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
