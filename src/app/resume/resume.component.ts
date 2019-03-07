import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'resume',
    templateUrl: 'resume.component.html',
    styleUrls: ['resume.component.scss']
})

export class ResumeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    onDownload() {
        window.location.href = "http://www.harrisonsanders.com/Resume/Harrison_Sanders-Resume.pdf";
    }
}