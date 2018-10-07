import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// 128 page
@Component({
    selector: 'product-data',
    template: `<h1>Product Data</h1>
        <div>
            ProductID: {{productID}}<br>
            isProd: {{isProd}}<br>
            Name: {{name}}<br>
            Age: {{age}}
        </div>

        <div>
            isProd: {{obj?.isProd}}<br>
            Name: {{obj?.name}}<br>
            Age: {{obj?.age}}
        </div>
    `
})
export class ProductDataComponent{
    private id: string;
    private isProd: boolean;
    private name: string;
    private age: number;
    private obj: any;

    constructor(private acRouter: ActivatedRoute){
        this.id = this.acRouter.snapshot.params['id'];
        this.isProd = this.acRouter.snapshot.data[0]['isProd'];
        this.name = this.acRouter.snapshot.data[0]['name'];
        this.age = this.acRouter.snapshot.data[0]['age'] + 10;
    }

    ngAfterContentChecked() {
        this.acRouter.data
            .subscribe(
                (data: any) => {
                    console.log(data[0])
                    this.obj = data[0];
                },
                (error: any) => {

                }
            )
    }
    
}