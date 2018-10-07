import { Component, Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[a06One]'
})
export class A06OneDirective {

    private elem: Node;

    public constructor(private el: ElementRef, private render: Renderer) {
        this.elem = el.nativeElement;
    }

    @HostListener('click') onClick(): void {

        this.render.setElementStyle(this.elem, 'color', 'orange');

        // 요소 생성
        let div1: HTMLElement = this.render.createElement(this.elem, 'div');
        let div2: HTMLElement = this.render.createElement(this.elem, 'div');
        let btn: HTMLElement = this.render.createElement(this.elem, 'button');

        this.render.createText(div1, 'Element One');
        this.render.createText(div2, 'Element Two');
        this.render.createText(btn, 'ADD');

        // 배열의 지정 순서에 따라 지정한 순서로 배치가 된다. 기준이 있어야 함
        // 기준 안쪽에서 정렬이 된다.
        this.render.projectNodes(this.elem, [div2, btn, div1]);

        // 재 배치가 되면 자식 요소가 아닌 형제 요소로 배치되게 된다.
        // 따라서 CSS가 적용 안됨
        this.render.attachViewAfter(this.elem, [btn, div2, div1]);

        // 배치한 요소 삭제. this.elem와 같이 주 요소도 삭제 가능(형제 관계, 자식관계 모두 적용됨)
        this.render.detachView([btn, div1]);

        // 태그와 속성은 존재. 태그 내용만 삭제됨. 삭제 후 재 구성
        let second = this.render.selectRootElement('#second');
        console.log(second);

        this.render.createText(second, 'New Second Text');
        this.render.listen(second, 'click', (evt: Event) => {
            let target: HTMLElement = <HTMLElement>evt.target;
            target.innerText = 'Change Text';

            // 기존에 작성된 DOM이므로 참조 가능
            document.getElementById('first').innerText = 'Change First Text';
        });

        // 기존의 secondElem에 요소 추가도 가능
        let span: HTMLElement = this.render.createElement(second, 'span');
        this.render.createText(span, ' - Add Span Tag');

    }

}

@Component({
    selector: 'a06Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3 id="first">Directive</h3>
                <h3 id="second">ABC</h3>
            </div>

            <div class="panel panel-body">
               <div a06One>Inner Content</div>
            </div>
        </div>
    `
})
export class A06Component {

}
