import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel-heading">
            <h3>Model Base Form</h3>
        </div>

        <div class="panel-body">
            Form: {{fg.value | json}} <br>
            SSN : {{fg.get('ssn').value}} / {{getSSN()}}<br>
        </div>

        <div class="panel-body">
            <!-- 
            controller에서 생성한 FormGroup 의 이름을 바인딩
            app.module 에 ReactiveFormsmodule이 import 되어있어야 한다.
            -->
            <form [formGroup]="fg" (ngSubmit)="onSubmit(fg.value)">

                <!-- 하위 formGroup은 문자열 방식으로 바인딩 한다.-->
                <div formGroupName="name">
                    <label>UserName: {{fg.get('name').get('firstName').value}} / {{fg.get('name.lastName').value}}</label>
                    <input type="text" class="form-control" formControlName="firstName">
                    <input type="text" class="form-control" formControlName="lastName">
                </div>
                <br>

                <div>
                    <label>SSN: {{fg.get('ssn').value}} </label>
                    <input type="text" class="form-control" formControlName="ssn">
                </div>
                <br>

                <div>
                    <label>Password: {{fg.get('pw').value}} </label>
                    <input type="text" class="form-control" formControlName="pw">
                </div>
                <br>

                <div>
                    <label>Confirm password :  {{fg.get('repw').value}} </label>
                    <input type="password" class="form-control" formControlName="repw">
                </div>
                <br>

                <div>
                    <label>Department :  {{fg.get('dept').value}} </label>
                    <select class="form-control" formControlName="dept">
                        <option *ngFor="let item of ary">{{item}}</option>
                    </select>
                </div>
                <br>
                
                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    `
})
export class A02Component{
    private ary: string[] = ['Salary', 'Department']
    private dept: string = 'Salary';
    private firstName: string = 'HongGilDong';
    
    private fg: FormGroup;

    ngOnInit() {
        this.fg = new FormGroup({
            name: new FormGroup({
                firstName: new FormControl('Hong'),
                lastName: new FormControl('GilDong')
            }),
            ssn: new FormControl(''),
            pw: new FormControl(''),
            repw: new FormControl(''),
            dept: new FormControl(''),
        })
    }

    private onSubmit(data: any): void{
        console.log(data);
    }

    private getSSN(): string{
        return this.fg.get('ssn').value;
    }
}
