import { Component } from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div class="panel-heading">
            <h3>Template Base Form</h3>
        </div>

        <div class="panel-body">
            {{myForm.value | json}}
        </div>

        <div class="panel-body">
            <form #myForm = "ngForm" (ngSubmit)="onSubmit(myForm.value)">
                <div>
                    <label>UserName: {{firstName}} / {{last.value}} </label>
                    <!-- form 태그 안에서 ngModel을 사용할 경우 name 속성이 필수 -->
                    <input type="text" class="form-control" name="firstName" [(ngModel)]="firstName">

                    <!-- 바인딩 필요없이 값만 가져오고자 한다
                         ngModel => Angular가 관리하는 폼 요소 등록을 위한 선언
                         #lastName="ngModel" => 값 참조를 위한 객체 선언
                    -->
                    <input type="text" class="form-control" name="lastName" #last="ngModel" ngModel>
                </div>
                <br>

                <div>
                    <label>SSN:</label>
                    <input type="text" class="form-control" name="name" ngModel>
                </div>
                <br>

                <div>
                    <label>Password:</label>
                    <input type="text" class="form-control" name="pw" ngModel>
                </div>
                <br>

                <div>
                    <label>Confirm password : </label>
                    <input type="password" class="form-control" name="repw" ngModel>
                </div>
                <br>

                <div>
                    <label>Department : </label>
                    <select class="form-control" name="dept" [(ngModel)]="dept">
                        <option *ngFor="let item of ary">{{item}}</option>
                    </select>
                </div>
                <br>
                
                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    `
})
export class A01Component{
    private ary: string[] = ['Salary', 'Department']
    private dept: string = 'Salary';
    private firstName: string = 'Hong';
    private lastName: string = 'GilDong';

    private onSubmit(data: any): void{
        console.log(data);
    }
    
}
