import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
    animations: [
        trigger('nameIn', [
            transition(':enter', [   // :enter is alias to 'void => *'
                style ({
                    opacity: 0,
                    transform: 'scale(1.1)'
                }),
                animate(700, 
                    style ({
                        opacity: 1,
                        transform: 'scale(1.0)'
                    })
                )
            ])
        ]),
        trigger('titleIn', [
            transition(':enter', [   // :enter is alias to 'void => *'
                style ({
                    opacity: 0,
                }),
                animate('500ms 700ms', 
                    style ({
                        opacity: 1,
                    })
                )
            ])
        ]),
        trigger('buttonsIn', [
            transition(':enter', [   // :enter is alias to 'void => *'
                style ({
                    opacity: 0,
                }),
                animate('500ms 1000ms', 
                    style ({
                        opacity: 1,
                    })
                )
            ])
        ]),
    ]
})

export class HomeComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() { }

    onResume() {
        this.router.navigate(['resume']);
    }

    onContact() {
        this.router.navigate(['contact'])
    }
}