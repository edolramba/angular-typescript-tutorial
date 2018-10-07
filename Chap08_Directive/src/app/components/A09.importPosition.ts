import { Component, Directive, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Directive({
    selector: 'a09OneDir'
})
export class A09OneDirective {

}

@Component({
    selector: 'a09Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>TemplateRef</h3>
            </div>
            <div class="panel panel-body">
                <button (click)="onloadTemplate()">ADD</button>
            </div>
            
            <a09OneDir #a09One></a09OneDir>

            <ng-template #temp>
                <h4>Template Content 1</h4>
            </ng-template>
        </div>
    `
})
export class A09Component {
    @ViewChild('temp') temp: TemplateRef<HTMLElement>;
    
    // {}로 타입 캐스팅
    @ViewChild('a09One', {read: ViewContainerRef}) viewer: ViewContainerRef;

    public onloadTemplate(): void{
        this.viewer.createEmbeddedView(this.temp);
    }
}
