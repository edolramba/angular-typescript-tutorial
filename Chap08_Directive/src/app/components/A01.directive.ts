import { Component } from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>Directive</h3>
            </div>

            <div class="panel panel-body">
                <!-- tag 로 사용하는 방법 -->
                <a01OneDir>A01 One Directive</a01OneDir>

                <!-- 속성으로 사용하는 방법. 동작 안함 
                     정의할 때 태그 형태로 쓴다고 정의함
                     지시자 이름을 [] 로 감싸지 않음
                 -->
                <div a01OneDir>A01 One Directive</div>

                <!-- 이건 에러. 값 전달 목적으로 사용. 지시자 이름 선언을 [] 로 해야 함. -->
                <!--<div [a01OneDir]>A01 One Directive</div>-->
            </div>

            <div class="panel panel-body">
                <!-- 속성으로만 사용 가능 => 에러 발생
                <a01TwoDir>A01 Two Directive</a01TwoDir>
                이건 값을 전달 할 경우만
                <div [a01TwoDir]>A01 Two Directive</div>
                -->
                <!-- [] 는 빼고 사용 가능. []로 쓴다는 것은 값을 전달할 경우만 -->
                <div a01TwoDir>A01 Two Directive</div>
            </div>

            <div class="panel panel-body">
                <a01ThreeDir>A01 Two Directive</a01ThreeDir>
                <div a01ThreeDir>A01 Two Directive</div>
                <b01ThreeDir>A01 Two Directive</b01ThreeDir>
            </div>
        </div>
    `
})
export class A01Component {

}


