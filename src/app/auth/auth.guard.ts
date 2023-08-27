import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { Path } from '../shared';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store:Store<fromApp.AppState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    boolean |
    UrlTree |
    Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> {
    return this.store.select('auth').pipe(
      take(1),
      map(authState => authState.user),
      map((user) => {
        const isAuth = !!user
        if (isAuth) return true;

        return this.router.createUrlTree([`/${Path.Auth}`])
        // UrlTree redirects us to /auth
      }),
      // tap((isAuth) => {
      //   if (isAuth) {
      //     this.router.navigate([`/${Path.Auth}`]);
      //   }
      // })
    );
  }
}
