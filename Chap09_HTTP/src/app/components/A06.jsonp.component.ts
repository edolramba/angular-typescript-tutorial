import { Component } from '@angular/core';
import { A06Service } from './../service/A06.jsonp.service';

@Component({
    selector: 'a06Component',
    template: `
    <div class="panel-default">
        <div class="panel-heading">
            <h3>JSONP</h3>
        </div>
        <div class="panel-body">
            <label>검색어
            <input type="text" class="form-control" [(ngModel)]="searchValue">
            </label>
            <button class="btn btn-primary" (click)="getData()">Search</button>
        </div>
        <div class="panel-body" *ngFor="let item of products">
            <b>{{item.title}}</b><br>
            {{item.content}}
        </div>
    </div>
    `,
    providers: [ A06Service ]
})
export class A06Component  { 
    private products: string[];
    // 검색할 key
    private searchValue: string = 'JavaScript';

    // Jsonp 를 주입. app.module 에 JsonModule 이 올라와야 한다.
    constructor(private jsonp: A06Service){}

    private getData(): void{
        this.jsonp.get(this.searchValue)
            .subscribe(
                (data: string[]) => {
                    console.log(data);
                    this.products = data;
                },
                (error: any) => {
                    console.log(error);
                }
            )
    }
}