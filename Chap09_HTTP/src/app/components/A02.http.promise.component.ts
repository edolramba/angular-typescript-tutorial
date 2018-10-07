import { Http, Response } from '@angular/http';
import { Component } from '@angular/core';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'a02Component',
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
                        <td>{{item.Category}}</td>
                        <td>{{item.Price}}</td>
                        <td>{{item.Expiry}}</td>
                    </tr>
                </table>
                <button class="btn btn-primary">Load</button>
            </div>

            <div class="panel-body">
                {{products | json}}
            </div>
        
        </div>
    `,
})
export class A02Component  { 
    private products: string[];

    // Http 서비스를 주입받아 사용한다.
    constructor(private http: Http){}
    ngOnInit() {
        this.http.get('app/resources/data/productData.json')
        .toPromise()        // rxjs가 제공하는 메서드
        .then(
            (data: Response) => {
                console.log(data);
                // body에 붙은 Text 를 JSON 으로 변경
                this.products = data.json();
            },
            (error: Response) => {

            }
        )
        .catch(
            (error: Response) => {
                console.log('catch Error => ' + error);
            }
        )
    }
}