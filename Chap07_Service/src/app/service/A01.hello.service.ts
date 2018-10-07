// A01.hello.service.ts
import { Injectable } from '@angular/core';

// 이것도 그냥 Class 일 뿐이다.
// 다만, @Injectable()이라는 데코레이터로 Angular core가 미리 
// import 해서 객체화 해 놓을거냐 아니냐만 일반 클래스와 다다다
// @INdectable() 가 없으면 new ~! 사용
// @INdectable() 가 있으면 DI 로 사용

// 서비스는 view 직접적으로 참여안함 => app.module 의 declarations 에 등록 안함
// 사용하는 컴퍼넌트에서는 providers: []
@Injectable()
export class HelloService{
    // 외부에서 참조할 변수, 함수는 public 으로,
    // 내부에서 참조할 변수 함수는 private 로
    public name: string = 'HongGilDong';
    private age: number = 20;

    public greeting(name: string): string{
        return 'Hello~ ' + name;
    }

    public setName(name: string): void{
        this.name = name;
    }

}