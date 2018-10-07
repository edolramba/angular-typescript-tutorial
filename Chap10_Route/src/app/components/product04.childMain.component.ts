import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'productChild',
    template: `
        <div class="panel-boyd">
            <h1>Product Child Component</h1>
            <div>
                Product ID: {{productID}}<br>
                <p><a [routerLink]="['seller']">Seller Info</a></p>

                <router-outlet></router-outlet>

            </div>
        </div>
    `
})
export class ProductChildComponent{
    
}