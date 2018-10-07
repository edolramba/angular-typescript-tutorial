import { Component, ContentChild, ViewContainerRef, TemplateRef } from '@angular/core';

@Component({
    selector: 'a08One',
    template: `
        <h4>Child Component</h4>
        <button (click)="onloadTemplate()">ONE</button>
        <br>
        <br>

        <ng-content></ng-content>
    `
})
export class A08One {
    // 내가 가지고 있는 템플릿이 아닌 부모 컴퍼넌트가 가지고 있는 template 
    @ContentChild('temp') temp: TemplateRef<HTMLElement>

    constructor(private vcr: ViewContainerRef){}

    private onloadTemplate(): void{
        this.vcr.createEmbeddedView(this.temp);
    }
}

@Component({
    selector: 'a08Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>TemplateRef</h3>
            </div>

            <div class="panel panel-body">
                A08 Component Content
            </div>

            <div class="panel panel-body">
                <a08One>
                    
                    <div>내부 Template</div>

                    <ng-template #temp>
                        <h4>Child In Template</h4>
                        <div>
                            Message: <br>
                            <button>Main Method</button>
                        </div>
                       
                        <br>

                        <div>
                            <div>Name: </div>
                            <button>Inner Click</button>
                        </div>
                    </ng-template>
                </a08One>
            </div>

        </div>
    `
})
export class A08Component {
    private message: string = 'A08 Component Message';

}

