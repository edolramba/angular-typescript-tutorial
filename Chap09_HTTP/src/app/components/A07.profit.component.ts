import { Component } from '@angular/core';
import { ProfitListService } from './../service/A07.profit.service';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'a07Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>
                    HTTP Service
                    <span class="label label-primary">profit</span>
                </h3>
            </div>

            <div class="panel-body form-inline">
                <div class="form-group">
                    <select class="form-control" [(ngModel)]="year">
                        <option value="All">All</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                    </select>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" (click)="getProfit()">Change</button>
                </div>
            </div>
            <div class="panel-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Month</th>
                            <th>Profit</th>
                            <th>Expenses</th>
                            <th>Amount</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let item of profitList">
                            <td>{{item.year}}</td>
                            <td>{{item.month}}</td>
                            <td>{{item.profit}}</td>
                            <td>{{item.expenses}}</td>
                            <td>{{item.amount}}</td>
                            <td>
                                <a (click)="viewItem(item)">{{item.comment}}</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            
            </div>

            <div class="panel-body">
                <textarea class="form-control">{{viewData}}</textarea>
            </div>
        </div>
    `,
    providers: [ ProfitListService ]
})
export class A07Component  { 
    private profitList: string[];   // 전체 리스트
    private viewData: string;      // 1개만 담을 객체

    private year: string = 'All';

    constructor(private profit: ProfitListService){}

    private viewItem(item: string): void{
        this.viewData = item;
    }

    private getProfit(): void{
        this.profit.get(this.year)
            .subscribe(
                (data: any) => {
                    console.log(data);
                    this.profitList = data;
                },
                (error: any) => {
                    console.log(error);
                }
            )
    }

}