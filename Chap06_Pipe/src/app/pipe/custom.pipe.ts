// custom.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

// Pipe 는 단지 Class 다.
// 파이프를 호출할 이름만 데코레이터로 설정해 주면 된다.
// PipeTransform 인터페이스를 상속받아 구현한다.
// override한 transform 메서드의 반환 값이 있어야 한다 (이게 화면에 표시됨)

@Pipe({
    name: 'upLow'
})
export class UpLowClass implements PipeTransform{
    // 이 메서드의 첫 번째 매개변수는 반드시 있어야 한다
    transform(data: string, type: string){
        // 2번째 부터의 매개변수가 없을 경우를 체크해 주어야 한다. 
        // 가능하면 매개변수를 기입하지 않았을 때도 처리가 되게 하자.
        // A || B 는 A 가 true 면 A 실행 false 면 B 실행
        // type = type || 'up';
        // A || B 와 동일효과
        if(!type) return data; // 기본 값 출력

        if(type === 'up'){
            return data.toUpperCase();
        }else if(type === 'low'){
            return data.toLowerCase();
        }
    }
}

@Pipe({
    name: 'replace'
})
export class ReplaceClass implements PipeTransform{
    transform(data: string, oldValue: string, newValue: string){
        if(!oldValue || !newValue) return data;

        return data.replace(oldValue, newValue);
    }
}

//지정한 수만큼 문자를 자르고 그 뒤에 지정한 심벌을 붙여 리턴

@Pipe({
    name: 'abbr'
})

export class AbbrClass implements PipeTransform {
    transform(data: string, size: number, symbol: string){
        size = size || 20;
        symbol = symbol || '...';

        if(data.length < size){
            return data;
        } else{
            let str = data.substring(0, (size-symbol.length));
            return str+symbol;
        }
    }
}