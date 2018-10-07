import { NAMED_ENTITIES } from '@angular/compiler';
import { Component }          from '@angular/core';
import { iPerson } from './A01.iPerson';
@Component({
    selector: 'a01Component',
    // template: `
    //     <div class="panel-heading">
    //         <h3>TemplateUrl</h3>
    //     </div>

    //     <div class="panel-body">
    //         Name: {{name}}<br>
    //         Ojbect: {{obj.id}} / {{obj.address}}<br>
    //         Array: <span *ngFor="let item of ary">{{item}} &nbsp; </span>
    //         Method: {{getInfo()}}
    //     </div>
    // `
    templateUrl: './../template/template.html'
})
export class A01Component{
    private name: string = 'Hong';
    private obj: iPerson = { //import 해야한다.
        id: 1,
        address: 'Seoul'
    };

    private ary: string[] = ['One','Two','Three'];

    private getInfo(): string{
        return `${this.ary[0]} => ${this.name}, ${this.obj.id}, ${this.obj.address}`
    }
}
