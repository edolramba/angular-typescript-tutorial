import { A04httpService } from './../service/A04.http.service';
import { Http, Response } from '@angular/http';
import { Component } from '@angular/core';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'a04Component',
    template: `
        <div class="panel-default">
            <div class="panel-heading">
                <h3>HTTP Service</h3>
            </div>
            <div class="panel-body">
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Expiry</th>
                    <tr>
                    <tr *ngFor="let item of products">
                        <td>{{item.name}}</td>
                        <td>{{item.category}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.expiry}}</td>
                    </tr>
                </table>
                <button class="btn btn-primary">Load</button>
            </div>

            <div class="panel-body">
                {{products | json}}
            </div>
        
        </div>
    `,
    providers: [ A04httpService ]
})
export class A04Component  { 
    private products: string[];

    // A04httpService 서비스를 주입받아 사용한다.
    constructor(private http: A04httpService){}

    ngOnInit() {

        this.http.get()
        .subscribe(
            (data: string[]) => {
                this.products = data;
            },
            (error: Response) => {
                console.log(error);
                console.log(error.status);
            }
        )
    }
}