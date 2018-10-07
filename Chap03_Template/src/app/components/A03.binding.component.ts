import { Component }          from '@angular/core';

@Component({
    selector: 'a03Component',
    template:`
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Binding</h3>
            </div>
            
            <div class="panel-body">
                <h4>일반 바인딩</h4>
                Name: {{name}}, kor: {{kor}}, Eng: {{eng}}<br>
                Total: {{kor+eng}}, Avg: {{(kor+eng)/2}}<br>
                ID: {{hong.id}}, Address: {{hong.address}}
            </div>

            <div class="panel-body">
                <h4>Safe Navigation Operator</h4>
                없는 기본형 변수 참조(표시안됨-에러없음) Age: <br>
                없는 객체형 변수 참조(?없으면 에러) user.name: 
            </div>

            <div class="panel-body">
                <h4>속성 바인딩</h4>
                Name: <input type="text" class="form-control" placeholder="{{name}}"><br>

                <!-- []을 사용한 속성은 = 뒤에 지정한 이름이 변수명임을 나타낸다.-->
                Name: <input type="text" class="form-control" [value]="name" [name]="name" [id]="'name'"><br>
                Add: <input type="text" class="form-control" [attr.value]="name" [attr.id]="name"><br>
                Age: <input type="text" class="form-control" data-bind-value="name"><br>
            </div>

            <div class="panel-body">
                <!-- Page 234 
                    $event => angular 가 관리하는 이벤트 객체
                    JavaScript의 Event Wrapper Class이다.[(ngModel)]
                -->
                Name: <input type="text" class="form-control" [value]="name" (input)="onChange($event)">
            </div>
        </div>
    `
})
export class A03Component{
    private name: string = 'HongGilDong';
    private kor: number = 80;
    private eng: number = 95;
    private total: number;

    private hong: {id: number, address: string} = {
        id: 20,
        address: 'Seoul'
    }
    
    private onChange(evt: Event): void{
        console.log(evt);
        // evt.target //이벤트가 발생한 객체(DOM 요소)
        // DOM 요소 객체부터 Type 이 맞게 불러온 뒤 그 속성 값 추출
        // this.name = evt.target.value;

        let elem: HTMLElement = <HTMLInputElement>(evt.target)
        this.name = elem.nodeValue
    }
}