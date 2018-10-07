import { DecimalPipe, PercentPipe, SlicePipe } from '@angular/common';
import { Component }              from '@angular/core';

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Pipe Percent / Decimal / Slice</h3>
            </div>

            <div class="panel-body">
                <h4>Percent</h4>
                <div>
                    값 * 100을 구현<br>
                    1. 1.23 => {{1.23 | percent}} <br>

                    <!-- 소수점 자리수를 기술하지 않으면 퍼센트 적용 후 3자리까지 나온다 -->
                    <!--2. 1.23456 => {{1.23456 | percent}} <br>-->
                    
                    <!-- 소수점 자리수 제한 가능 -->
                    3. 1.2345678 => {{1.2345678 | percent : '1.1-1'}}<br>
                    4. 1.2345678 => {{1.2345678 | percent : '1.2-2'}}<br>
                    5. 1.2345678 => {{1.2345678 | percent : '1.1-3'}}<br>
                    <!-- 퍼센트 적용 후 소수점 4자리 이하부터는 오류 발생, 4부터는 범위 지정 방식 사용 --> 
                    7. 1.2345678 => {{1.2345678 | percent : '1.1-4'}}<br>
                    <!-- 따라서 가능하면 범위로 사용한다 -->
                    8. Method : {{getPercent()}}
                </div>
                <br>

                <h4>Decimal Pipe</h4>
                <div>
                    1. 123456789 => {{123456789 | number }}<br>
                    2. 1234.56789 => {{1234.56789 | number }}<br>
                    3. 1234.56700 => {{1234.56700 | number : '1.4-4' }}<br>
                    4. Method : {{getNumber()}}
                </div>
                <br>

                <h4>String slice</h4>
                <div>
                    문자열을 지정한 수만큼 잘라서 표시. 범위<br>
                    1. {{str | slice}}<br>
                    <!--자르는 옵션은 문자열이 아닌 숫자 방식 -->
                    2. {{str | slice : 2 : 10}}<br>
                    3. {{str | slice : 2 }}<br>
                    4. {{str | slice : -5 : -2}}<br>
                    5. {{str | slice : -5}}<br>
                    6. Method : {{getString()}}
                </div>
            </div>
        </div>
    `
})
export class A02Component{
    private num: number = 1.23;
    private str: string = '동해물과 백두산이 마르고 닳도록';

    constructor(private percent: PercentPipe,
                private numPipe: DecimalPipe,
                private slice: SlicePipe){}

    private getPercent(): string{
        return this.percent.transform(this.num, '1.2-2');
    }

    private getNumber(): string{
        return this.numPipe.transform(this.num, '1.2-2');
    }

    private getString(): string{
        return this.slice.transform(this.str, 3, 10);
    }
   
}