import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'a05Component',
    template: `
        <div class="panel-heading">
            <h3>5. Reactive Base Form</h3>
        </div>
        <div class="panel-body">
            <form [formGroup]="fg">
                <div formArrayName="name">
                    <label>UserName: {{fg.get('name').get('0').hasError('required')}}</label>
                    <div >
                        <input type="text" class="form-control" formControlName="0">
                        <div *ngIf="fg.get('name').get('0').hasError('minlength')">
                            이름은 3글자 이상입니다.(체크는 소문자 minlength)
                        </div>
                        <div *ngIf="fg.get('name').get('0').hasError('maxlength')">
                            이름은 10자를 넘어갈 수 없습니다.(체크는 소문자 maxlength)
                        </div>

                        <input type="text" class="form-control" formControlName="1">
                        <div *ngIf="fg.get('name').get('1').touched && fg.get('name').get('1').invalid">
                            <div *ngIf="fg.get('name').get('1').hasError('required')">
                                이름은 필수 항목입니다.
                            </div>
                            <div *ngIf="fg.get('name').get('1').hasError('minlength')">
                                이름은 3글자 이상입니다.(체크는 소문자 minlength)
                            </div>
                            <div *ngIf="fg.get('name').get('2').hasError('maxlength')">
                                이름은 10자를 넘어갈 수 없습니다.(체크는 소문자 maxlength)
                            </div>
                        </div>
                    </div>
                </div>
                <br>

                <div>
                    <label>SSN: 
                    Valid : {{fg.get('ssn').valid}} /
                    Errors: {{fg.get('ssn').errors | json}} /
                    hasError :{{fg.get('ssn').hasError('required')}}
                    </label>
                    <input type="text" class="form-control" formControlName="ssn">
                    <div [hidden]="fg.get('ssn').valid">
                        SSN은 필수 항목입니다.
                    </div>
                </div>
                <br>

                <div>
                    <label>Password: {{fg.get('pw').hasError('pattern')}}</label>
                    <input type="text" class="form-control" formControlName="pw">
                    <div *ngIf="fg.get('pw').hasError('required')">
                        패스워드는 필수 항목입니다.
                    </div>
                    <div *ngIf="fg.get('pw').hasError('pattern')">
                        패스워드 패턴이 틀립니다.
                    </div>
                </div>
                <br>

                <div>
                    <label>Confirm password : </label>
                    <input type="password" class="form-control" formControlName="repw">
                </div>
                <br>

                <div>
                    <label>Department : </label>
                    <select class="form-control" formControlName="dept">
                    <option *ngFor="let item of ary">{{item}}</option>
                    </select>
                </div>
                <br>
                <!--form 요소가 invalid 하면 전송 버튼을 사용 불가로 변경-->
                <button class="btn btn-primary" type="submit" [disabled]="fg.invalid">Submit</button>
            </form>
        </div>

        <div class="panel-body">
            All: <br>
            Bind: <br>
            Getter: <br>
        </div>
    `
})
export class A05Component{
    private ary: string[] = ['Salary', 'Department']
    private dept: string = 'Salary';
    private firstName: string = 'HongGilDong';
    
    private fg: FormGroup;

    // 주입을 받았다는 것은 @Injctable() 걸린 서비스
    constructor(private fb: FormBuilder){}

    ngOnInit() {
        this.fg = this.fb.group({

            // 배열이라 {} => [] 로 변경. 배열이므로 key 이름이 없음
            // 참조도 0, 1... 방식으로 (단 문자 방식으로 기술)
            name: new FormArray([
                new FormControl('Hong', [Validators.minLength(3), Validators.maxLength(10)]),        //0
                new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)])      //1
            ]),
            ssn: new FormControl('', [Validators.required]),
            //javascript pattern 검색하면 나온다. (url, 전화번호, 이메일 등)
            pw: new FormControl('', [Validators.required, Validators.pattern(/[a-z][a-zA-Z0-9]+/)]),
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
