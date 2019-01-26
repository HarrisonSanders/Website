import { Game } from './portfolio.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
    selector: 'portfolio',
    templateUrl: 'portfolio.component.html',
    styleUrls: ['portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {

    games: Game[];
    selectedGame: Game = null;

    dialogOpened: boolean = false;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() { 
        this.games = this.route.snapshot.data['games']
    }

    onGameSelected(game: Game) {
        console.log(game);
        this.selectedGame = game;
        this.dialogOpened = true;
    }

    closeDialog() {
        this.dialogOpened = false;
    }
}