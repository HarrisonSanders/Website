import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'about',
    templateUrl: 'about.component.html'
})

export class AboutComponent implements OnInit {
    constructor(
        private router: Router
    ) { }

    ngOnInit() { }

    onGamejolt() {
        this.router.navigate(['resume']);
    }
    onGithub() {
        window.location.href = "https://github.com/HarrisonSanders"
    }
}