import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header-component',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    constructor(
        private router: Router
    ) { }

    ngOnInit() { }

    onResume() {
        this.router.navigate(['resume']);
    }

    onPortfolio() {
        this.router.navigate(['portfolio']);
    }

    // onGetToKnow() {
    //     this.router.navigate(['about']);
    // }

    // onContact() {
    //     this.router.navigate(['contact']);
    // }

    onHome() {
        this.router.navigate(['']);
    }
}