 // Login.service.ts
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

 import { Injectable } from '@angular/core';
 
 @Injectable()
 export class LoginService implements CanActivate{
     

    private loginCheck(): boolean{
        let check: boolean = Math.random() < 0.5;
        if(!check){
            console.log('접근 불가...')
        }
        return check;
    }

    canActivate(snapshop: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        console.log(snapshop);
        console.log(state);

        return this.loginCheck();
    }
}