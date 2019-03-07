import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'more',
    templateUrl: 'more.component.html'
})

export class MoreComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    onGamejolt() {
        window.location.href = "http://gamejolt.harrisonsanders.com"
    }
    onGithub() {
        window.location.href = "https://github.com/HarrisonSanders"
    }
}