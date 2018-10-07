// app.component.ts
import { Component } from '@angular/core'; //library 를 올리고 import 괄호 안은 나중에 쓴다. 컨트롤 + space
import { A01Component } from './components/A01.Invoke';

@Component({
    selector: 'myApp',  //HTML 에 올라올 이름
    template: `
        <div class="panel-heading">
            <h1>Hello Angular</h1>
        </div>
        <div class="panel-body">
            Name: {{name}}<br>
            Method: {{getName()}}
        </div>

        <div class="panel-body">
            <a01Component></a01Component>
        </div>
    `,
    styles: [`
        h1 { color: orange }
    `]
})
// Controller 를 class 로 기술한다. 
export class OneComponent{ //export 는 require 로 부를 수 있도록 붙여준다.(외부에 표시하려면 붙여준다.)
    private name: string = 'HongGilDong';

    private getName(): string{
        return this.name;
    }
}