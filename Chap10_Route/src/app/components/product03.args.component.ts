import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// 128 page
@Component({
    selector: 'product-args',
    template: `<h1>Product Argument</h1>
        <div>
            ProductID: {{id}}<br>
            isProd: {{isProd}}<br>
            Name: {{name}}<br>
            
        </div>
    `
})
export class ProductArgsComponent{
    private id: string;
    private isProd: string;
    private name: string;
    private age: number;

    private obj: any;

    constructor(private acRouter: ActivatedRoute){
        this.id = this.acRouter.snapshot.params['num'];
        this.isProd = this.acRouter.snapshot.queryParams['isProd'];
        this.name = this.acRouter.snapshot.queryParams['name'];
        this.age = this.acRouter.snapshot.queryParams['age'] + 10;
    }

    ngAfterContentChecked() {
        this.acRouter.data
            .subscribe(
                (data: any) => {
                    console.log(data[0])
                    this.obj = data.queryParams;
                },
                (error: any) => {

                }
            )
    }

}


