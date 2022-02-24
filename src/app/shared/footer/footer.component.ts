import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'footer-component',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss']
})

export class FooterComponent implements OnInit {

    displayFooter = false;
    displayContact = false;

    constructor(private router: Router) { 
        router.events.forEach((event) => {
            if(event instanceof NavigationEnd) {
                //See if there is any state change
                window.scroll(0,0);
                if(event.urlAfterRedirects.includes('contact'))
                {
                  this.displayFooter = false;
                  this.displayContact = false;
                }
                else
                {
                  this.displayContact = true;
                  this.displayFooter = true;
                }
            }
          });
    }

    ngOnInit() { }

    homeClick() {
        this.router.navigate(['']);
    }

    resumeClick() {
        this.router.navigate(['resume']);
    }

    contactClick() {
        this.router.navigate(['contact']);
    }
}