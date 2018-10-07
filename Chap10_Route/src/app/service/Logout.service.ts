// Logout.service.ts
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

export interface CanCompoenentDeactivate{
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class LogoutService implements CanDeactivate<CanCompoenentDeactivate>{

    public canDeactivate(component: CanCompoenentDeactivate, snapshop: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return window.confirm('Logout?');
    }
}