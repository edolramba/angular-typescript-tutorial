import { Component } from '@angular/core';
import { A01TwoComponent } from './A01.grand.component';

@Component({
    selector: 'a01One',
    template: `
        <div class="panel-body">
            <h3>Child Component</h3>
            <span>Child Component Content</span>

            <a01Two></a01Two>
        </div>
    `,
    styles: [`
        div { border: 1px solid green; padding:10px; margin:10px; width:70%; height:70%; }
    `]
})
export class A01OneComponent { }


