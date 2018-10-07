
import { DatePipe, JsonPipe, CurrencyPipe }              from '@angular/common';
import { Component }                                     from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Pipe Date / Currency / JSON</h3>
            </div>

            <div class="panel-body">
                <h4>Date Pipe</h4>
                <!-- 
                pipe 적용: {{value | pipeName [: option : option...] }} 
                option 은 생략가능
                -->
                    Today(날짜): {{today}} <br>=> {{today | date}} <br>=> {{today | date : 'yyyy-MM-dd hh:mm:ss EEEE a'}} <br>
                    TodayUTC(숫자): {{todayUTC}}<br>=> {{todayUTC | date}} <br>=> {{todayUTC | date : 'y-MM-dd hh:mm:ss EEEE a'}} <br>
                    TodayIOC(복합): {{todayIOC}}<br>=> {{todayIOC | date}} <br>=> {{todayIOC | date : 'yy-M-d h:m:s EE a'}} <br>
                <br>

                <h4>Date Pipe 단축형</h4>
                Date: {{today | date : 'fullDate'}} => {{today | date : 'longDate'}} => {{today | date : 'mediumDate'}} => {{today | date : 'shortDate'}} <br>
                Time: {{today | date : 'mediumTime'}} => {{today | date : 'shortTime'}} <br>
                All: {{today | date : 'medium'}} => {{today | date : 'short'}} <br>

                Method: {{getDate()}}
            </div>

            <div class="panel-body">
                <h4>통화코드 ISO 4217 규격에 따름.</h4>
                1. {{12345.6789 | currency}}<br>
                2. {{12345.6789 | currency : 'USD'}}<br> <!-- 표준이 소수점 2자리 -->
                3. {{12345.6789 | currency : 'KRW'}}<br> <!-- 표준이 소수점 0자리 -->
                4. {{12345.6789 | currency : 'KWD'}}<br> <!-- 표준이 소수점 3자리 -->
                5. {{12345.6789 | currency : 'USD' : true}}<br>
                6. {{12345.6789 | currency : 'KRW' : true}}<br>
                7. {{12345.6789 | currency : 'KWD' : true}}<br> <!-- 통화 기호가 없음 -->

                <!-- 소수점 이하 값을 단일 수 지정은 기본 값
                   , 이하까지는 표시할 값이 있으면 기본값으로 출력 -->
                8. {{12345.6 | currency : 'USD' : true : '1.1'}}<br> 
                9. {{12345.6789 | currency : 'USD' : true : '1.2'}}<br> 
                10. {{12345.6789 | currency : 'USD' : true : '1.4'}}<br> 

                <!-- 범위 내에 표시할 수 있는 값까지 출력-->
                11. {{12345.67 | currency : 'USD' : true : '1.2-3'}}<br> 
                12. {{12345.6789 | currency : 'USD' : true : '1.2-3'}}<br> 

                13. Method: {{getCurrency()}}
            </div>

            <div class="panel-body">
                <h4>JSON</h4>
                {{obj}}<br>
                {{obj | json}}<br>
                {{getJson()}}<br>
            </div>
        </div>
    `,
    // 주입받는 서비스를 선언
    // app.module 에서 선언해도 된다 (share)
    providers: [DatePipe, CurrencyPipe, JsonPipe]
})
export class A01Component{
    private today: Date = new Date();
    private todayUTC: number = Date.now();
    private todayIOC: string = this.today.toISOString();

    private obj: any = {
        name: 'Hong',
        user: {
            address: 'seoul',
            tel: '010-1234-5678'
        },
        ary: ['one','two','three'],
        age: 20
    }
    // 내장 Pipe 는 주입만 받아 사용 가능하다.
    // Pipe 는 서비스와 지시자의 중간 
    // 작성은 서비스처럼, 사용은 Component 나 Directive 처럼 한다.=> app.module 에 올라가야 한다.
    // 서비스는 providers: [] 이런식으로 객체를 만들어야 한다.
    constructor(private datePipe: DatePipe, 
                private currency: CurrencyPipe, 
                private json: JsonPipe){}

    private getDate(): string{
        return this.datePipe.transform(this.today, 'medium');
    }

    private getCurrency(): string{
        return this.currency.transform(12345.6789, 'USD', true, '1.2-3');
    }
    
    private getJson(): string{
        return this.json.transform(this.obj);
    }
}
