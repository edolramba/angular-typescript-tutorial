import { Component } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'app',
    template: `
        <div class="panel-heading">
            <h3>Router</h3>
        </div>

        <div class="panel-body">
            <a [routerLink]="['']">HOME</a> | 
            <a [routerLink]="['home']">HOME</a> | 
            <a [routerLink]="['product']">PRODUCT</a> |
            <br>

            <a [routerLink]="['productParam/10']">PRODUCT PARAM 10</a> | 
            <a [routerLink]="['productParam/20']">PRODUCT PARAM 20</a> | 
            <a [routerLink]="['productData/100']">PRODUCT DATA</a> | 
            <a [routerLink]="['productArgs/200']" 
                    [queryParams]="{isProd: true, name: 'Hong', age: 20}">PRODUCT ARGS</a> | 
            <a>PRODUCT ARGS</a> | 
            <br>

            <a [routerLink]="['productChild/300']">Child</a> | 
            <a [routerLink]="['productActivate/400']">Activate</a> | 
            <br>

            <a>All View</a> | 
            <a>Two View</a> | 
            <a>One View</a> | 
            <br>

            <a>Luxury</a> | 

            <a>Luxury Lazy</a> | 
            <br>
            
            <button>HOME</button>
            <button>PRODUCT</button>
            <button>PARAM</button>
        </div>

        <div class="panel-body">
            <router-outlet></router-outlet>
        </div>
    `,
})
export class AppComponent  { 

}

