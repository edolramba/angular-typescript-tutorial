
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'a07Component',
    template: `
        <div class="panel-heading">
            <h3>Observable Event Demo</h3>
        </div>

        <div class="panel-body">
            <!-- 
            formControl 을 사용하기 위해서는 @angular/forms 모듈에서 
            ReactiveFormsModule 이 올라와 있어야 한다.
            -->
            <input type="text" class="form-control" placeholder="Enter stock" [formControl]="searchInput">
        </div>
    `,
})
export class A07Component  { 
    searchInput: FormControl = new FormControl('');

    private ary: string[] = [];

    // 프로퍼티가 초기화 된 후 실행되는 내장 이벤트
    // constructor가 실행된 후에 실행되는 이벤트다
    ngOnInit() {
        console.log(this.searchInput.valueChanges)

        this.searchInput.valueChanges           // 발행자
            .debounceTime(1000)                 // 처리
            .map(
                // arrow 함수는 function 을 대체한다.
                // 형식을 기술하지 않으면 괄호는 생략할 수 있다.
                (data: string) => {
                    let str: string = data;
                    this.ary = str.split('');
                    this.ary.reverse();
                    str = this.ary.join('-');
                    return str;
                }
            )

            .map(
                (data: string) => {
                    return data.toUpperCase();
                }
            )

            .subscribe(                         // 수신자
                (data: string) => {
                    console.log(data);
                }
            )
    }

}