import { Game } from './projects.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
    selector: 'projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.scss']
})

export class ProjectsComponent implements OnInit {

    games: Game[];
    gamesInProgress: Game[];

    selectedGame: Game = null;

    dialogOpened: boolean = false;

    scrollPosition;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() { 
        this.games = this.route.snapshot.data['games'];
        this.gamesInProgress = this.route.snapshot.data['in_progress']
    }

    onGameSelected(game: Game) {
        console.log(game);
        this.selectedGame = game;
        this.dialogOpened = true;
        $('#dialog').trigger('focus')
        // lock scroll position, but retain settings for later
        this.scrollPosition = [
            self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
        ];
        var html = $('html'); // it would make more sense to apply this to body, but IE7 won't have that
        html.data('scroll-position', this.scrollPosition);
        html.data('previous-overflow', html.css('overflow'));
        html.css('overflow', 'hidden');
        window.scrollTo(this.scrollPosition[0], this.scrollPosition[1]);
    }

    closeDialog() {
        this.dialogOpened = false;
        // un-lock scroll position
        var html = $('html');
        this.scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(this.scrollPosition[0], this.scrollPosition[1])
    }
}