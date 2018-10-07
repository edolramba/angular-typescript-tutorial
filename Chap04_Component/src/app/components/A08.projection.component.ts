
import { Component } from '@angular/core';

@Component({
    selector: 'a08One',
    template: `
        <div class="panel-body">
            <h3>A08 One Component</h3>

            <!--
            자신이 사용된 Component 에서 이 Component의 태그 사이에 
            어떠한 값(DOM요소, text)이 있으면 그 값을 불러올 목적으로 기술
            -->
            <div>Header</div>
            <ng-content select=".header"></ng-content>

            <hr>

            <div>Footer</div>
            <ng-content select=".footer"></ng-content>
        </div>
    `
})
export class A08One {

}

@Component({
    selector: 'a08Component',
    template: `
        <div class="panel-body">
            <h3>A08 Component</h3>

        </div>

        <!-- 
        class(메인 Component)의 이름과
        selelct(자식 component)로 위치 지정도 가능
        -->
        <a08One>
            <div class="hedaer">Header 에 포함된 헤더</div>
            <div class="footer">Header 에 포함된 푸터</div>
        </a08One>
    `
})
export class A08Component {

}