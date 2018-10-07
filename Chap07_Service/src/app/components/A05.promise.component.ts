import { Component } from '@angular/core';
import { ThreeVO } from './../service/A03.threeVO';
import { ThreeJumsu } from './../service/A03.three.Jumsu'
import { PromiseService } from '../service/A05.promise.service';


@Component({
    selector: 'a05Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Jumsu Service</h3>
            </div>

            <div class="panel-body">
                
            </div>

            <div class="panel-body" *ngFor="let item of result">
                {{item}}
            </div>
        </div>
    `
})
export class A05Component{
    
    private students: Array<ThreeVO>;
    private result: string[] = [];

    constructor(private mock: PromiseService, private three: ThreeJumsu){}

   ngOnInit() {
        this.mock.getStudent()
            .then(
                (data: any) => {          // promise 가 resolve 되면 실행
                        this.students = data;

                        this.students.forEach( (data, index) => {
                            this.three.getTotal(data);
                            this.three.getAvg(data);
                            this.result[index] = this.three.display(data);
                        })
                },
                (error: string) => {         // promise 가 reject 되면 실행
                        console.log(error);
                }
            )


   }
}