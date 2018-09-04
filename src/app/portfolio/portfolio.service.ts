import { Injectable } from '@angular/core';
import { Observable, throwError } from '../../../node_modules/rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Game } from './portfolio.model';
import { catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PortfolioService {

    constructor(
        private httpClient: HttpClient,
    ) { }

    getGames(): Observable<Game[]> {

        //Eventually, this makes the call to the API, Not a local data set
        return this.httpClient.get<Game[]>("assets/json/games.json", httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    private handleError(error: HttpErrorResponse) {
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
      };
}