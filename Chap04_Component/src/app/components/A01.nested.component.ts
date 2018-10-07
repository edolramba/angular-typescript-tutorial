import { Component } from '@angular/core';
// 자식 요소로 들어올 Component 도 import 필수
import { A01OneComponent } from './A01.child.component';
import { A01TwoComponent } from './A01.grand.component';

@Component({
    selector: 'a01Component',
    template: `
        <div class="panel-body">
            <h3>Parent Component</h3>
            <span>Parent Component Content</span>
            
            <a01One></a01One>
            <a01Two></a01Two>
        </div>
    `,
    styles: [`
        div { border: 1px solid #666; padding:10px; margin:10px; width:70%; height:70%; }
    `]
})
export class A01Component { }


