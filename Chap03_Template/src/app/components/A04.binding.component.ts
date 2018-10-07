import { Component } from '@angular/core';

@Component({
    selector: 'a04Component',
    template:`
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Binding</h3>
            </div>
            
            <div class="panel-body">
                <h4>이벤트 바인딩</h4>
                <div>{{result}}</div><br>
                <div [innerText]="result"></div><br>
                <div [innerHTML]="result"></div><br>
                <button (click)="onClick()">명령식</button>
                <button on-click="onClick()">명령식</button>
            </div>

            <div class="panel-body">
                <h4>Class, Style Binding</h4>
                <div class="green">1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [class]="green">2. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [attr.class]="'green'">3. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>

                <!--Style 의 이름을 참조한다. 변수명이 아님-->
                <div [class.green]="true">4. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>

                <!-- [(ngModel)]을 사용하면 반드시 app.module 에 form 메인 모듈인 FormsModule 이 import 되어 있어야 한다.
                     [(ngModel)]은 클래스에 변수명이 선언되어 있지 않으면, 묵시적으로 하나 생성한다. 선언되는 타입은 DOM 요소에 따른다.
                     가능하면 정의하고 쓰자(디버깅 문제)
                -->
                <div>
                    <span [class.green]="checked">5. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</span>
                    <input type="checkbox" [(ngModel)]="checked">Check
                </div>

                <div [ngClass]="green">6. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <!-- 변수명 지정이 안된다.-->
                <div [ngClass]="'green bold'">7. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <!-- 배열 형태로 정의하면 변수와 문자열을 혼합해서 사용 가능하다.-->
                <div [ngClass]="[green, 'bold']">8. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <!--또는 객체 형으로 지정이 가능하다. 유연성이 제일 좋음-->
                <div [ngClass]="{green: true, 'bold': checked}">9. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>

            </div>

            <div class="panel-body">
                <div [style.color]="green" [style.fontSize]="'10pt'">1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [ngStyle]="{color: green, fontSize: '10pt', fontWeight: 'bold'}">2. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div bind-ngStyle="{color: green, fontSize: '10pt', fontWeight: 'bold'}">3. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div>4. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
            </div>

        </div>
    `,
    styles: [`
        .green { color: green; }
        .bold { font-weight: bold; }
    `]
})
export class A04Component{
    private result: string = '';

    //class 이름을 가진 변수를 선언 [class] = "green" 형태로 참조
    private green: string = 'green';

    private name: string = 'HongGilDong';

    //checkbox 값. 없어도 동작은 한다. (묵시적으로 생성)
    private checked: boolean = false;

    private onClick(): void{
        this.result = `<b>${this.name} 님 방문해주셔서 감사합니다.</b>`;
    }
}
