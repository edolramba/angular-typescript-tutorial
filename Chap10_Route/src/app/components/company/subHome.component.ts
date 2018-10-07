import { Component } from '@angular/core';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'subHome',
    template: `
        <div class="panel-heading">
            <h3>Sub Home</h3>
        </div>
    `,
})
export class SubHomeComponent  { 

}