// A02.Invokes.ts
import { CurrencyPipe } from '@angular/common/src/pipes/number_pipe';
import { NgFor } from '@angular/common/src/directives/ng_for_of';

import { Component, OnInit, Optional } from '@angular/core';

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel-heading">
            <h3>A02 Invoke</h3>
        </div>

        <div class="panel-body">
            Cost: <input type="number" class="form-control" 
                [(ngModel)]="cost"><br>
            Qty: <input type="number" class="form-control" 
                [(ngModel)]="qty"><br>
            <br>
            Country
                <select class="form-control" [(ngModel)]="inCurr">
                    <!-- for(let item of currencies){ -->
                    <option *ngFor="let item of currencies">{{item}}</option>
                    <!-- } -->
                </select>
            <br>
            <br>
            Total: <span *ngFor="let item of currencies">{{getTotal(item)| currency: item : false : '1.3-3'}} &nbsp;</span><br>
            <button class="btn btn-primary" (click)="pay()">BUY</button>
        </div>
    `,
    styles: [`
    
    `]
})
export class A02Component {
    //Controller 역할 
    private cost: number = 5;
    private qty: number = 3;
    private inCurr: string = 'USD';
    private currencies: string[] = ['USD','EUR','CNY'];
    //object 로 놓으면 오류 발생하므로 any 로 잡는데, 가능하면 any 를 사용하면 안된다.
    //따라서 interface 로 선언해야 한다? => 이것도 값이 틀려서 안돼
    //key, value 로 작성하면 해결할 수 있다.
    private rate: {[key: string]: number} = {
        'USD': 1.0,
        'EUR': 1.37,
        'CNY': 6.57
    }

    private getTotal(outCurr: string): number{
        // return this.cost * this.qty * this.rate[outCurr] / this.rate[this.inCurr];
        return this.converRate(outCurr, this.inCurr, this.cost * this.qty);
    }

    private converRate(outCurr: string, inCurr: string, amount: number): number{
        return amount * this.rate[outCurr] / this.rate[inCurr];
    }

    private pay(): void{
        window.alert('Thank You!!!');
    }
    constructor() {
        
    }
}