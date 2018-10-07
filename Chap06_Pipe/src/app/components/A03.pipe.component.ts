import { Component } from '@angular/core';

@Component({
    selector: 'a03Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">   
                <h3>Pipe i18nSelectPipe</h3>
            </div>

            <div class="panel-body">
                <h4>i18nSelect</h4>
                <div>
                    1. {{fruit.apple}}<br>
                    2. {{fruit['apple']}}<br>
                    3. {{'apple' | i18nSelect : fruit }}<br>
                    <!-- 변수 apple 이 없으면 에러 -->
                    4. {{apple | i18nSelect : fruit }}<br>
                </div>
                <br>

                <h4>i18nPlural</h4>
                <div>
                    <input type="number" [(ngModel)]="num">
                    {{num}}<br>
                    {{num | i18nPlural : mappingRule}}
                </div>
            </div>
        </div>
    `
})
export class A03Component{
    private num: number = 1;

    public fruit: { [key: string]: string} = {
        'apple': '사과',
        'banana': '바나나',
        'grape': '포도',
        'orange': '오렌지',
        'manago': '망고',
        'watermelon': '수박',
        'kiwi': '키위'
    }

    private apple: string = 'apple';

    // 변환 키
    private mappingRule: {[key: string]: string}={
        '=0' : '값이 없습니다.',
        '=1' : '한 개 입니다.',
        '=2' : '두 개 입니다.',
        '=3' : '세 개 입니다.',
        'other' : '해당 사항이 없습니다. 확인해 주세요.'
    }
    
}