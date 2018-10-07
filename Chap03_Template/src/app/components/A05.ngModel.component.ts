import { Component }      from '@angular/core';

@Component({
    selector: 'a05Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>양방향 바인딩</h3>
            </div>
            
            <!-- ngModel 을 사용하면 app.module 에 form 메인 모듈인
            FormsModule이 import 되어 있어야 한다.-->

            <div class="panel-body">
                <input class="form-control" [(ngModel)]="name">
                <input class="form-control" [(ngModel)]="name">
                <input class="form-control" [value]="name">
                <!--
                    [(ngModel)]에서 []와 ()를 분리한 형태 (속성:[], 이벤트바인딩())
                    [(ngModel)]과 동일한 역할을 한다.
                -->
                <input class="form-control" [value]="name" (input)="onChange($event)">
                <br>

                <select class="form-control" [(ngModel)]="name">
                    <option *ngFor="let item of students" [value]="item.name">{{item.name}}</option>
                </select>

                <br>
                
                <span *ngFor="let item of students">
                    <input type="radio" [value]="item.name" [(ngModel)]="name">{{item.name}}
                </span>
            </div>
        </div>
    `
})
export class A05Component{
    private name: string = 'HongGilDong';
    //인터페이스로 빼는 연습 해볼 것.
    private students: {name: string, age: number, address: string}[] = [
        {name: 'HongGilDong', age: 20, address: 'Seoul'},
        {name: 'IlJimea', age: 25, address: 'Busan'},
        {name: 'ImGGekJung', age: 30, address: 'InChen'},
        {name: 'NolBu', age: 50, address: 'Seoul'},
        {name: 'HungBu', age: 40, address: 'Seoul'},
    ];

    //Import 가 잘못되어 있는지 중간중간 확인해볼 것
    private onChange(evt: Event): void{
        let elem: HTMLInputElement = <HTMLInputElement>evt.target;
        this.name = elem.value;
    }
}