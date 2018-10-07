import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'seller',
    template: `
        <p>The seller of this product is Mary Lou(98%)<br>
        Seller ID: {{sellerID}}</p>
    `,
    styles: [':host {border: 1px solid orange; display: block} '],
    encapsulation: ViewEncapsulation.Native
})
export class SellerComponent{
    private sellerID: string;

    constructor(activatedRoute: ActivatedRoute){
        this.sellerID = activatedRoute.snapshot.params['id'];
    }
}