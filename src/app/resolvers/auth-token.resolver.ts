import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenResolver implements Resolve<string | null> {
  resolve(route: ActivatedRouteSnapshot): string | null {
    return route.queryParamMap.get('token');
  }
}
