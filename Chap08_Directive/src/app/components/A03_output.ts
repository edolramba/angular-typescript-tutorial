import { Component, Directive, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[a03OneDir]',
    host: {
        '(click)': 'onClick()'
    }
})
export class A03OneDirective {

    private obj: any = {
        message: 'A03 One Directive',
        user: {
            name: 'HongGilDong',
            age: 20
        },
        getInfo: function () {
            return this.user.name + ' - ' + this.user.age;
        }
    }

    @Output()
    private sendDataEvent: EventEmitter<any> = new EventEmitter<any>();

    private onClick(): void{
        this.sendDataEvent.emit(this.obj);
    }
}

@Component({
    selector: 'a03Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>Directive Output</h3>
            </div>

            <div class="panel panel-body">
                <div>
                    <div></div>
                    <button a03OneDir (sendDataEvent)="getData($event)">Click</button>
                </div>
                <br>
                
                <div>
                    Object: {{data?.user.name}}<br>
                    Message: {{data?.message}}<br>
                    Info: {{data?.getInfo()}}
                </div>
            </div>
        </div>
    `
})
export class A03Component {

    private data: any;

    private getData(evt: any): void{
        this.data = evt;
    }

}
