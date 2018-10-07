import { Component } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'a08Component',
    template: `
        <div class="panel-heading">
            <h3>HTTP CRUD</h3>
        </div>

        <div class="panel-body">
            Name: <input type="text" class="form-control"><br>
            Age: <input type="number" class="form-control"><br>
            Address: <input type="text" class="form-control"><br>

            <button class="btn btn-primary">ADD</button>
            <button class="btn btn-primary">MODIFY</button>
        </div>

        <div class="panel-body">
            <table class="table">
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>ADDRESS</th>
                    <th>MODIFY</th>
                    <th>DELETE</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <a>수정</a>
                    </td>
                    <td>
                        <a>삭제</a>
                    </td>
                </tr>
            </table>
        </div>

        
    `,
    providers: []
})
export class A08Component  { 
    
}