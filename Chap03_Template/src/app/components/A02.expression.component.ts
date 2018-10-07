import { Component } from '@angular/core';

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Name: {{person.name}}</h3>
            </div>
            
            <div class="panel-body">
            <!--{{}}은 EL과 동일한 역할 -->
                <div>일반적인 연산: 1 + 2 = {{1+2}}</div>
                <!-- {{}} 안에서 변수 선언은 할 수 없다. 따라서 외부에 선언해야 함-->
                <!-- <div>좋아하는 과일의 개수: {{cnt = person.fruit.length}}</div> -->
                <div>좋아하는 과일의 개수: {{cnt}}</div>
                <div>과일의 개수 * 100 : {{cnt * 100}}</div>
                <div>Are you Hong? {{person.name === 'HongGilDong'}}</div>
                <div>Are you Hong? {{person.name === 'HongGilDong' ? '홍길동' : '누군지 모름'}}</div>
                <div>과일 개수가 4개보다 많은가? {{person.fruit.length <4}} </div>
                <!--존재하지 않는 기본형 변수는 에러표시 없이 출력만 안 함-->
                <div>Scope에 없는 객체 요소에 접근: {{age}} </div>
                <!-- 존재하지 않는 객체 변수는 에러표시.
                    Typescript 에 생략가능한 변수 표시(?)를 이용
                    객체의 값이 없을수도 있음(변수가 선언은 되었지만 값이 없음)
                -->
                <div>Scope에 없는 객체에 접근: {{user?.name}} </div>
            </div>
	    </div>
    `
})
export class A02Component{
    //한 번쓰고 버릴 Type 선언이라면 아래처럼 객체 형으로 지정 가능.
    private person: {name: string, fruit: string[]} = {
        name: 'HongGilDong',
        fruit: ['Apple','Banana','Lemon']
    }

    private cnt: number = this.person.fruit.length;

    private user: {name: string};
}
