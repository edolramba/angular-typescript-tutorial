import { Jsonp, RequestOptionsArgs, Response, URLSearchParams } from '@angular/http';
import { Component } from '@angular/core';

@Component({
    selector: 'a05Component',
    template: `
    <div class="panel-default">
        <div class="panel-heading">
            <h3>JSONP</h3>
        </div>
        <div class="panel-body">
            <label>검색어
            <input type="text" class="form-control" [(ngModel)]="searchValue">
            </label>
            <button class="btn btn-primary" (click)="getData()">Search</button>
        </div>
        <div class="panel-body" *ngFor="let item of result">
            <b>{{item.title}}</b><br>
            {{item.content}}
        </div>
    </div>
    `,
    providers: []
})
export class A05Component  { 
    // 크롬의 JSONVIEW 확장프로그램 추가해서 아래 링크 데이터 살펴보기
    // https://en.wikipedia.org/w/api.php?search=JAVASCRIPT&action=opensearch&format=json&callback=JSONP_CALLBACK
    
    // ?key=value&key=value 를 관리하는 객체
    private params: URLSearchParams = new URLSearchParams();

    // http, jsonp 등을 요청할 때 필요한 옵션을 관리하는 변수
    private request: RequestOptionsArgs;

    // 결과를 받아 저장할 변수
    private result: { title: string, content: string}[] = [];

    // 검색할 key
    private searchValue: string = 'JavaScript';

    // Jsonp 를 주입. app.module 에 JsonModule 이 올라와야 한다.
    constructor(private jsonp: Jsonp){}

    private getData(): void{
        
        // 기존의 검색은 지우자.
        this.result = [];
        // ?search=JAVASCRIPT&action=opensearch&format=json&callback=JSONP_CALLBACK
        this.params.set('search', this.searchValue);
        this.params.set('action', 'opensearch');
        this.params.set('format', 'json');
        this.params.set('callback', 'JSONP_CALLBACK');

        this.request = {
            method: 'GET',
            params: this.params
        }

        let url = 'https://en.wikipedia.org/w/api.php';

        this.jsonp.request(url, this.request)
            .map(
                (data: Response) => {
                    //console.log(data)
                    return data.json();
                }
            )
            .subscribe(
                (data: any) => {
                    console.log(data)
                    for(let i = 0; i < data[1].length; i++){
                        this.result.push({
                            'title': data[1][i], 'content': data[2][i]
                         })
                    }
                }        
            )
    }
    
}