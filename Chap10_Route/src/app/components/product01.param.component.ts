import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product-param',
    template: `
        <h1>Product Details for Product: {{id}} </h1>
    `,
    styles: ['.product {background: cyan}; display: block; ']
})
export class ProductParamComponent{
    private id: string;

    constructor(private acRouter: ActivatedRoute){
        console.log(acRouter);

        //한 번만 바인딩되고 끝
        this.id = this.acRouter.snapshot.params['id'];
    }

    ngAfterContentChecked() {
        //Called after every check of the component's or directive's content.
        //Add 'implements AfterContentChecked' to the class.
        // this.id = this.acRouter.snapshot.params['id'];
        this.acRouter.params
            .subscribe(
                (data: any) => {
                    this.id = data.id;
                }
            )
    }
}