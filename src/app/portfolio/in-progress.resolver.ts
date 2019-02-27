import { PortfolioService } from './portfolio.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '../../../node_modules/@angular/router';
import { Game } from './portfolio.model';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class InProgressResolver implements Resolve<Game[]> {

    constructor(private portfolioService: PortfolioService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        return this.portfolioService.getGamesInProgress();
    }
}