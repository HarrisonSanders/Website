import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() { }

    onGamejolt() {
        window.location.href = "http://gamejolt.harrisonsanders.com"
    }
    onGithub() {
        window.location.href = "https://github.com/HarrisonSanders/website"
    }
    onResume() {
        this.router.navigate(['resume']);
    }

    onPortfolio() {
        this.router.navigate(['portfolio']);
    }
}