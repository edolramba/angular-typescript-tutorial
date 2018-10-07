import { Component, Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[a04OneDir]'
})
export class A04OneDirective{
    // host: { } 와 같은 역할
    // @HostListener('이벤트명(모두 소문자)') 실행할 함수(): 리턴타입 {}
    @HostListener('mouseenter') onMousEenter(): void{
        console.log('A04 ONe Directive MouseEnter Event')
    }

    @HostListener('mouseenter') onMouseLeave(): void{
        console.log('A04 ONe Directive MouseLeave Event')
    }
}

@Directive({ selector: '[a04TwoDir], [size]' })
export class A04TwoDirective {

    @Input('a04TwoDir') color: string;
    @Input('size') size: string;
    
    // 이 지시자가 기술된 DOM 요소가 대입될 객체
    private elem: HTMLElement;

    // ElementRef => 이 지시자가 기술된 DOM 요소를 참조할 객체 
    // Renderer => 받아온 DOM 요소를 조작할 객체 
    constructor(private el: ElementRef, private render: Renderer) {
        console.log(el);
        console.log(render);
        this.elem = this.el.nativeElement;
        console.log(this.elem);
    }

    @HostListener('mouseenter') onMouseEnter(): void{
        console.log('A04 Two Directive MouseEnter Event');
        this.render.setElementStyle(this.elem, 'color', this.color);
        this.render.setElementStyle(this.elem, 'fontSize', this.size);
    }

    @HostListener('mouseleave') onMouseLeave(): void{
        console.log('A04 Two Directive MouseLeave Event')
        this.render.setElementStyle(this.elem, 'color', 'black');
        this.render.setElementStyle(this.elem, 'fontSize', '11pt');
    }
}





@Component({
    selector: 'a04Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>Directive</h3>
            </div>

            <div class="panel panel-body">
                <div a04OneDir>Directive Attribute</div>
                <div [a04TwoDir]="'orange'" [size]="'10pt'">Native Attribute</div>
            </div>
        </div>
    `
})
export class A04Component {

}
