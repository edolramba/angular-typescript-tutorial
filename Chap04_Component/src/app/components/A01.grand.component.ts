import { Component } from '@angular/core';

@Component({
    selector: 'a01Two',
    template: `
        <div class="panel-body">
            <h3>Grand Component</h3>
            <span>Grand Component Content</span>
        </div>
    `,
    styles: [`
        div { border: 1px solid orange; padding:10px; margin:10px; width:70%; height:70%; }
    `]
})
export class A01TwoComponent { }


