import { Game } from './../portfolio.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'info-dialog',
    templateUrl: 'info-dialog.component.html',
    styleUrls: ['info-dialog.component.scss']
})

export class InfoDialogComponent implements OnInit {

    @Input() game: Game = new Game();
    @Input() dialogVisible: boolean;
    @Output() dialogClosed: EventEmitter<boolean> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    onClosed() {
        if(this.dialogVisible)
        {
            this.dialogClosed.emit(true);
        }
    }

    onPlay() {
        window.location.href = this.game.url;
    }
    onPlayiOS() {
        window.location.href = this.game.ios;
    }
    onPlayAndroid() {
        window.location.href = this.game.play;
    }
}

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, disableDebugTools} from '@angular/platform-browser';
import { concat } from 'rxjs';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 