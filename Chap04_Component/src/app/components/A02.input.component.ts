import { Component, Input } from '@angular/core';

@Component({
    selector: 'a02One',
    template: `
        <div class="panel-body">
            <h4>Child Component</h4>

            <p>
                Normal: {{normal}}<br>
                Name: {{name}}<br>
                Object: {{obj.tel}}/{{obj.address}}<br>
                Array: {{ary}}<br>

                Age: {{age}}<br>
                Company: {{comp}}<br>
                Static: {{static}}
            </p>
        </div>
    `,
    styles: [`
        div { border: 1px solid blue; padding:10px; margin:10px; width:70%; height:70%; }
    `]
})
export class A02One {
    @Input() normal: string;
    // 상위 Component 에서 변수명을 name 으로 전달함 [name] = 'value'
    @Input() name: string;
    @Input() obj: {tel: string, address: string};
    @Input() ary: string[];

    // 다른 변수명으로 사용하고자 할 경우
    @Input('age') age: number;

    // 이 변수는 좀 변형해서 사용하고자 한다. => getter 로 변경
    // @Input() comp: string;

    private _comp: string;

    @Input('comp')
    private get comp(): string{
        return 'Company is ' + this._comp; // 이 Getter 로 값 참조
    }
    private set comp(comp: string){       // 이걸로 comp 값 주입
        this._comp = comp;
    }


    @Input() static: string;
}
@Component({
    selector: 'a02Component',
    template: `
        <div class="panel-body">
            <h3>Parent Component</h3>
            <div>
                <div class="col-md-2">
                    <label>Name</label>
                    <input type="text" class="form-control" [(ngModel)]="name">
                </div>
                <div class="col-md-2">
                    <label>Obj</label>
                    <input type="text" class="form-control" [(ngModel)]="obj.tel">
                </div>
                <div class="col-md-2">
                    <label>Ary</label>
                    <input type="text" class="form-control" [(ngModel)]="ary[0]">
                </div>
                <div class="col-md-2">
                    <label>Age</label>
                    <input type="text" class="form-control" [(ngModel)]="age">
                </div>
                <div class="col-md-2">
                    <label>Company</label>
                    <input type="text" class="form-control" [(ngModel)]="company">
                </div>
                <div class="col-md-2">
                    <label>Static</label>
                    <input type="text" class="form-control" [(ngModel)]="_static">
                </div>
            </div>
            <br>
            <br>
            <br>
            <br>
            <br>

            <!--값 전달은 속성 바인딩 방식을 이용한다.
                [] 없는 속성은 HTML의 custom 속성일 뿐이다(Input 없어도 에러 아님)
                단 변수의 값은 못 넘기고 string만 전달 가능

                [] 로 전달한 속성은 값을 전달하기 위한 속성으로 자식(a02One) 에서
                반드시 그 값을 input() 으로 받아야 에러가 아님
            -->
            <a02One normal="Normal" [name]="name" [obj]="obj" [age]="age" [ary]="ary" [comp]="company" [static]="staticVar"></a02One>
        </div>
    `,
    styles: [`
        .box { border: 1px solid orange; padding:10px; margin:10px; width:70%; height:70%; }
    `]
})

export class A02Component {
    private name:string = 'HongGilDong';
    private obj:{tel: string, address: string} = {
        tel: '010-1234-0456',
        address: 'Seoul'
    }
    private ary:string[] = ['One','Two','Three'];
    private age: number = 20;
    private company: string = 'Multi';

    // ngModel 의 값으로 사용 불가.
    private static _static: string = 'Static Variable';

    //ngModel 에서 사용 가능하도록 Getter, Setter 생성
    public get staticVar(): string{
        return A02Component._static;
    }

    public set staticVar(_static: string){
        A02Component._static = _static;
    }

}
