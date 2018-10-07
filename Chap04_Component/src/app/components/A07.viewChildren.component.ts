import { A05Two } from './A05.inOutput.component';
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
    selector: 'a07One',
    template: `
        <div class="panel-body">
            <h4>A07 One Component</h4>

            Name: <input type="text" class="form-control" [(ngModel)]="name">
            Age: <input type="text" class="form-control" [(ngModel)]="age">
            ID: <input type="text" class="form-control" [(ngModel)]="user.id">
        </div> 
    `
})
export class A07One {
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
    selector: 'a07Component',
    template: `
        <div class="panel-heading">
            <h3>ViewChild</h3>
        </div>

        <!-- 
        #Name => 참조할 수 있는 Alias 를 생성 
        이 이름으로 자식 객체를 참조
        let one: A07Component = new A07Component()
        -->
        <a07One #one></a07One><br>
        <div class="panel-body">
            Name: {{name}}<br>
            Age: {{one.age}}<br> <!-- 직접 참조 -->
            user: {{user?.id}} / {{user?.name}}<br>
            <button (click)="getName('NulBu')">GetName</button>
            <button (click)="one.greet('NulBu')">Greet</button>
        </div>

        <a07One #two></a07One><br>
        <div class="panel-body">
            Name: {{name}}<br>
            Age: {{two.age}}<br> <!-- 직접 참조 -->
            user: {{user?.id}} / {{two.user?.name}}<br>
            <button (click)="getName('NulBu')">GetName</button>
            <button (click)="one.greet('NulBu')">Greet</button>
        </div>
    `
})
export class A07Component {
    // @ViewChild('one') one: A07One;  //one = new A07Component()
    // @ViewChild('two') two: A07One;

    // ' ' 안쪽에 Component의 이름을 묶어서 정의
    // 배열 형태의 QueryList<Type> 형으로 정의
    @ViewChildren('one, two') child: QueryList<A07One>;
    private one: A07One;
    private two: A07One;


    ngOnInit() {
        console.log('Init => ' + this.child)
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }

    ngAfterContentChecked() {
        //console.log('ngAfterContentChecked => ') + JSON.stringify(this.child);
    // QueryList(child)에 담긴 객체를 꺼내와 사용
    // QueryList를 배열 형태로 변경 후 참조해야 에러가 안남
    // 객체의 프로퍼티는 아직 생성전이라 toArray() 호출 할 수 없음

        
    }

    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
    }


    ngAfterViewChecked() {
        //console.log('ngAfterContentChecked => ') + JSON.stringify(this.child);
    // QueryList(child)에 담긴 객체를 꺼내와 사용
    // QueryList를 배열 형태로 변경 후 참조해야 에러가 안남
    // 객체의 프로퍼티는 아직 생성전이라 toArray() 호출 할 수 없음
    this.one = this.child.toArray()[0];
    this.two = this.child.toArray()[1];

    setTimeout( () => {
        this.name = this.one.name;
        this.user = this.one.user;
        this.getName = this.one.greet;
    }, 0)
        
    }
    private name: string;
    //private age: number;
    private user: {id: number, name: string};
    private getName: Function;
}