import { Component } from '@angular/core';
import { HelloService } from './../service/A01.hello.service';

@Component({
    selector: 'a01Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Service</h3>
            </div>

            <div class="panel-body">
                Hello Service: 
                Name : {{hello.name}}<br>
                Greeting: {{hello.greeting('NulBu')}}
                <button (click)="hello.setName('IM')">Change</button>
            </div>

            <div class="panel-body">
                Hello Service: 
                Name : {{hello.name}}<br>
                Greeting: {{hello.greeting('HungBu')}}<br>
                <button (click)="hello.setName('Jimea')">Change</button>
            </div>

            <div class="panel-body">
                Hello Service: <br>
                Name : {{name}}<br>
                Greeting: {{greet}}<br>
            </div>
        </div>
    `

    // 기술할 providers: [ HelloService ]를 app.module 로 옮겨 기술
    // 그러면 모든 declarations 에서 사용 가능
})
export class A01Component{
    private name: string;
    private greet: string;
    // @Injectable() 서비스는 주입받아 사용
    constructor(private hello: HelloService){}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.name = this.hello.name;
        this.greet = this.hello.greeting('Multi');
    }
}
