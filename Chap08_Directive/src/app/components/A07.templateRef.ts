import { Component, TemplateRef, ViewChild, ViewContainerRef, EmbeddedViewRef } from '@angular/core';

@Component({
    selector: 'a07Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>TemplateRef</h3>
            </div>
            <div class="panel panel-body">
                <button (click)="onAddAll()">View</button>
                <button (click)="onDeleteAll()">Remove</button>
            </div>

            <div class="panel panel-body">
                <button (click)="onAdd(temp1)">TEMP1</button>
                <button (click)="onAdd(temp2)">TEMP2</button>
            </div>
            <!--
                4 이하 버젼에서는 <template> 으로 사용 됨
                객체화를 해야함 #Name
            -->
            <ng-template #temp1 let-name="name" let-meassage="msg">
                <div class="panel-body">
                    <h4>Template Content 1</h4>

                    <div>
                        Name : {{name}}<br>
                        Message : {{meassage}}<br>
                        Compoenet Var: {{msg}}
                    </div>

                </div>
            </ng-template>

            <ng-template #temp2 let-name="name" let-meassage="msg">
                <div class="panel-body">
                    <h4>Template Content 2</h4>

                    <div>
                        Name : {{name}}<br>
                        Message : {{meassage}}<br>
                        Compoenet Var: {{msg}}
                    </div>

                </div>
            </ng-template>
            
        </div>
    `
})
export class A07Component {
    @ViewChild('temp1') temp1: TemplateRef<HTMLElement>;
    @ViewChild('temp2') temp2: TemplateRef<HTMLElement>;

    private tempView1: EmbeddedViewRef<HTMLElement>
    private tempView2: EmbeddedViewRef<HTMLElement>

    // ViewContainerRef => template를 화면에 표시하기 위한 객체
    constructor(private vcr:ViewContainerRef){
        console.log(vcr);

        // 이 시점에서는 생성 안 됨. View 라 View 에 관련된 이벤트에서 확인
        console.log(this.temp1);
    }

    ngAfterViewInit() {
        console.log('View=>' + this.temp1)
    }

    private onAddAll(): void{
       
        this.tempView1 = this.vcr.createEmbeddedView<HTMLElement>(this.temp1);
        this.tempView2 = this.vcr.createEmbeddedView<HTMLElement>(this.temp2);
        console.log(this.tempView1);
    }

    private onDeleteAll(): void{
        if(this.tempView1) this.tempView1.destroy();
        if(this.tempView2) this.tempView2.destroy();

    }

    // 자료 전달
    private msg: string = 'Local component Var';

    private tempView: EmbeddedViewRef<HTMLElement>;

    private onAdd(ref: TemplateRef<HTMLElement>): void{
        if(this.tempView) this.tempView.destroy();

        let sendData: any = {
            name: 'HongGilDong',
            msg: this.msg
        }

        // 필요한 변수, 함수 전달 가능. 
        // ng-template 에서 let-변수명 으로 받아야 한다.
        this.tempView = this.vcr.createEmbeddedView<HTMLElement>(ref, sendData);
    }

}
