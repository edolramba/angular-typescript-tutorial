import { Component } from '@angular/core';
import { MockService } from './../service/A04.mock.service';
import { ThreeVO } from './../service/A03.threeVO';
import { ThreeJumsu } from './../service/A03.three.Jumsu'


@Component({
    selector: 'a04Component',
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
export class A04Component{
    
    private students: Array<ThreeVO>;
    private result: string[] = [];

    constructor(private mock: MockService, private three: ThreeJumsu){}

   ngOnInit() {
        this.students = this.mock.getStudent()

        this.students.forEach( (data, index) => {
            this.three.getTotal(data);
            this.three.getAvg(data);
            this.result[index] = this.three.display(data);
        })
   }
}