import { Component } from '@angular/core';

@Component({
    selector: 'a06Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>ngIf / ngSwitch / ngFor</h3>
            </div>

            <div class="panel-body">
                <h4>ngIf: {{gender}}</h4>
                <select [(ngModel)]="gender">
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
                <!--
                    true면 숨기고 false 면 표시한다.
                    Element 자체를 생성 또는 삭제한다.
                    css 사용할 때 오류가 발생할 수 있으므로 주의가 필요
                -->
                <span *ngIf="gender === 'male'">Male</span>
                <span *ngIf="gender === 'female'">Female</span>

                <!--
                    true면 숨기고 false 면 표시한다.
                    css로 조작하므로 DOM에는 존재
                -->
                <span [hidden]="gender !== 'male'">Male</span>
                <span [hidden]="gender !== 'female'">Female</span>
            </div>

            <!--데이터를 숨기는 또 하나의 방식 ngSwitch-->
            <div class="panel-body">
                <h4>ngSwitch</h4>
                <button (click)="grade='admin'">Admin</button>
                <button (click)="grade='member'">Member</button>
                <button (click)="grade='guest'">Guest</button>
                <br>
                <div [(ngSwitch)]="grade">
                    <span *ngSwitchCase="'admin'">Admin</span>
                    <span *ngSwitchCase="'member'">Member</span>
                    <span *ngSwitchCase="'guest'">Guest</span>
                    <span *ngSwitchDefault>회원등급을 선택해 주세요.</span>
                </div>
            </div>

            <div class="panel-body">
                <h4>ngFor</h4>
                <table class="table">
                    <tr>
                        <td>No</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>KOR</td>
                        <td>ENG</td>
                    </tr>

                    <tr *ngFor="let item of students; let i = index">
                        <td>{{i+1}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.age}}</td>
                        <td>{{item.kor}}</td>
                        <td>{{item.eng}}</td>
                    </tr>
                    
                </table>
            </div>

            <div class="panel-body">
                <h4>ngFor</h4>
                <table class="table">
                    <tr>
                        <td>No</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>KOR</td>
                        <td>ENG</td>
                    </tr>
                    
                </table>

                <table class="table">
                    <tr>
                        <td>Index</td>
                        <td>Item</td>
                        <td>First</td>
                        <td>Last</td>
                        <td>Even</td>
                        <td>Odd</td>
                    </tr>
                    <tr *ngFor="let item of students; 
                                let i = index;
                                let first = first;
                                let last = last;
                                let middle = middle
                                let even = even
                                let odd = odd">
                        <td>{{i}}</td>
                        <td>{{item.name}}</td>
                        <td>{{first}}</td>
                        <td>{{last}}</td>
                        <td>{{even}}</td>
                        <td>{{odd}}</td>
                    </tr>
                </table>
            </div>

        </div>
    `
})
export class A06Component{
    public gender:string = 'male';

    public grade: string= 'null';

    public students: Student[] = [
        {name: 'HongGilDong', age: 20, kor: 100, eng: 80},
        {name: 'NolBu', age: 50, kor: 90, eng: 90},
        {name: 'HungBu', age: 40, kor: 70, eng: 60},
    ]
    
}

interface Student {
    name: string,
    age: number,
    kor: number,
    eng: number
}