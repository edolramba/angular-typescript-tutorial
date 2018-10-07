// Invoke.service.ts
import { Injectable } from '@angular/core';

// 서비스는 클래스 파일일 뿐이다.
// 단 주입(DI)를 구현되게 하기 위해 데코레이터(어노테이션)
// @Injectable()을 기술한다.

@Injectable()
export class InvokeService{

    // private 로 막으면 사용불가
    // 이 서비스 내부에서만 사용할 함수, 변수만 막는다.
    public currencies: string[] = ['USD','EUR','CNY'];
    public rate: {[key: string]: number} = {
        'USD': 1.0,
        'EUR': 1.37,
        'CNY': 6.57
    }
    public converRate(outCurr: string, inCurr: string, amount: number): number{
        return amount * this.rate[outCurr] / this.rate[inCurr];
    }
}