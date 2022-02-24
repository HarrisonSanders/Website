import { ProjectsService } from './projects.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Game } from './projects.model';
import { Observable } from 'rxjs';

@Injectable()
export class InProgressResolver implements Resolve<Game[]> {

    constructor(private projectsService: ProjectsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        return this.projectsService.getOldGames();
    }
}