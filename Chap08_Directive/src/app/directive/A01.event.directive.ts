 // A01.event.directive.ts
import { Directive } from '@angular/core';

// 지시자도 app.module 의 declarations 에 기술되어야 한다. View에 참가...

 // Component 와 같은 방식이지만 template 이 없다. 
@Directive({
    selector: 'a01OneDir',
    // Event 할당
    host: {
        // 'EventName' : '실행할 메서드명'
        '(click)': 'onClick()'
    }
})
export class A01OneDirective{
    private onClick(): void{
        console.log('A01 One Directive Clicked');
    }
}

// 이름을 속성 형태 [] 로 기술. []가 기술되면 속성으로만 사용 가능
@Directive({
    selector: '[a01TwoDir]',
    host: {
        // 'EventName' : '실행할 메서드명'
        '(click)': 'onClick()'
    }
})
export class A01TwoDirective{
    private onClick(): void{
        console.log('A01 Two Directive Clicked');
    }
}

// 이름을 속성 형태 [] 로 기술. []가 기술되면 속성으로만 사용 가능
@Directive({
    // selector 는 값을 받을 방식과 변수명에 불과하다. 
    selector: '[a01ThreeDir], a01ThreeDir, b01ThreeDir',
    host: {
        // 'EventName' : '실행할 메서드명'
        '(click)': 'onClick()'
    }
})
export class A01ThreeDirective{
    private onClick(): void{
        console.log('A01 Three Directive Clicked');
    }
}