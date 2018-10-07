import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'a06One',
    template: `
        <div class="panel-body">
            <h4>A06 One Component</h4>

            Name: <input type="text" class="form-control" [(ngModel)]="name">
            Age: <input type="text" class="form-control" [(ngModel)]="age">
            ID: <input type="text" class="form-control" [(ngModel)]="user.id">
        </div> 
    `
})
export class A06One {
    // public 으로 설정한 값만 부모가 @ViewChild 로 참조 가능
    public name: string = 'Hong';
    public age: number = 20;
    public user: { id: number, name: string } = {
        id: 10,
        name: 'HongGilDong'
    }

    public greet(name: string): void {
        console.log(name);
    }
}

@Component({
    selector: 'a06Component',
    template: `
        <div class="panel-heading">
            <h3>ViewChild</h3>
        </div>

        <!-- 
        #Name => 참조할 수 있는 Alias 를 생성 
        이 이름으로 자식 객체를 참조
        let one: A06Component = new A06Component()
        -->
        <a06One #one></a06One><br>
        <div class="panel-body">
            Name: {{name}}<br>
            Age: {{one.age}}<br> <!-- 직접 참조 -->
            user: {{user?.id}} / {{user?.name}}<br>
            <button (click)="getName('NulBu')">GetName</button>
            <button (click)="one.greet('NulBu')">Greet</button>
        </div>
        <a06One #two></a06One>
    `
})
export class A06Component {
    @ViewChild('one') one: A06One;  //one = new A06Component()
    @ViewChild('two') two: A06One;

    private name: string;
    private age: number;
    private user: {id: number, name: string};
    private getName: Function;

    constructor(){
        console.log('constuctor => ' + this.one);
    }

    ngOnInit() {    // 딱 1번만 실행되는 이벤트
        // 객체만 생성되고 값 아직 바인딩이 된 상태
        console.log('ngOnInit => ' + JSON.stringify(this.one));

        // 해당 data를 가져와 1번만 뿌리고 종료
        // this.name = this.one.name;
    }

    ngAfterContentChecked() {
        this.name = this.one.name;
        this.user = this.one.user;
        this.getName = this.one.greet;
    }

}
