//A01.Invoke.ts

import { Component } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'a01Component',
    // HTML 에서 " 로 종료되거나 종료 태그 등이 없으면 에러가 발생한다
    template: `
        <div class="panel-heading">
            <h3>A01 Invoke</h3>
        </div>

        <div class="panel-body">
            Cost: <input type="number" class="form-control" [(ngModel)]="cost"><br>
            Qty: <input type="number" class="form-control" [(ngModel)]="qty"><br>
            <br>
            Total: {{getTotal()}} <br>
            <button class="btn btn-primary" (click)="pay()">BUY</button>
        </div>
    `
    ,
})
export class A01Component  { 
    //Controller 역할 
    private cost: number = 5;
    private qty: number = 3;

    private getTotal(): number{
        return this.cost * this.qty;
    }

    private pay(): void{
        window.alert('Thank You!!!');
    }
    constructor() {
        
    }
}