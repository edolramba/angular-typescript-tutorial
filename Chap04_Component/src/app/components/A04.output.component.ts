import { EventObj } from './A04.EventObj';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'a04One',
    template: `
        <div class="panel-body">
            Name: <br>

            <!-- 이벤트 발생 메서드만 실행 -->
            <button class="btn btn-primary" (click)="sendName()">Send Name</button>
            <button class="btn btn-primary" (click)="sendObject()">Send Object</button>
        </div>
    `
})
export class A04One {
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
        return A04One._static;
    }

    public set staticVar(_static: string){
        A04One._static = _static;
    }

    // 전파 이벤트 객체를 생성한다.
    @Output()
    private sendNameEvent: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    private sendObjectEvent: EventEmitter<EventObj> = new EventEmitter<EventObj>();

    //이벤트 객체를 전파하는 메서드
    private sendName(): void{
        this.sendNameEvent.emit(this.name);
    }

    private sendObject(): void{
        let obj: EventObj = {
            name: this.name,
            obj: this.obj,
            ary: this.ary,
            age: this.age,
            company: this.company,
            static: this.staticVar
        }
        //
        this.sendObjectEvent.emit(obj);
    }
}


@Component({
    selector: 'a04Component',
    template: `
        <div class="panel-body">
            <h3>EventEmitter</h3>
            
            <div>
                    Name: {{name}}<br>
                    data Name: {{data?.name}}
                    data obj.tel: {{data?.obj.tel}}<br>
                    data static: {{data?.static}}
            </div>

            <!-- 
            이 자식 요소에서 이벤트가 발생 했니? 
            내부 이벤트는 (click), (input)
            자식이 가진 이벤트 객체가 발생되면 메서드를 이용해 처리
            -->
            <a04One (sendnameEvent)="getNameEvent($event)"
            (sendObjectEvent)="getObjectEvent($event)"></a04One>
                
        </div>
    `
})
export class A04Component {

    private name: string;
    private data: EventObj;

    private getNameEvent(evt: string): void{
        console.log(evt);
        console.log(typeof evt)
        this.name = evt;
    }

    private getObjectEvent(evt: EventObj): void{
        console.log(evt);
        this.data = evt;
    }
}
