import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'a10One',
    template: `
        <div class="panel-body">
            <div class="first">First Child Component</div>
            <div>First Child Component</div>
        </div>
        <br>
        <br>
    `,
    // component 전체를 의미하는 :host
    styles: [`
        :host {
            display: block;
            border: 3px solid orange;
        }
        :host(:hover){
            border: 3px solid blue;
        }
        :host(:active) {
            background-color: yellow;
        }
    `],
    encapsulation: ViewEncapsulation.Native
})
export class A10One {

}

@Component({
    selector: 'a10Component',
    template: `
        <div class="panel-heading">
            <h3 class="first">Host, Host deep, Host Context</h3>
        </div>

        <div class="panel-body">
            <span>This is A10 Component.</span>

            <br>

            <a10One></a10One>
        </div>
    `,
    // component 전체를 의미하는 :host
    styles: [`
        :host {
            display: block;
            border: 3px solid red;
        }
        :host(:hover){
            border: 3px solid green;
        }
        :host(:active) {
            background-color: gray;
        }
        /*deep은 자신과 자식 component 포함*/
        :host /deep/ .first {   
            color: red;
        }
    `],
    encapsulation: ViewEncapsulation.Native
})
export class A10Component {

}