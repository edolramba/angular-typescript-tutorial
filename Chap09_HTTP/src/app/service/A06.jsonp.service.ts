// A06.jsonp.service.ts

import { Injectable } from '@angular/core';
import { Http, Jsonp, Response, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class A06Service {

    // ?key=value&key=value 를 관리하는 객체
    private params: URLSearchParams = new URLSearchParams();
    private request: RequestOptionsArgs;
    private result: { title: string, content: string }[] = [];

    constructor(private jsonp: Jsonp) { }

    get(key: string): Observable<string[]> {
        this.result = [];

        this.params.set('search', key);
        this.params.set('action', 'opensearch');
        this.params.set('format', 'json');
        this.params.set('callback', 'JSONP_CALLBACK');

        this.request = {
            method: 'GET',
            params: this.params
        }

        let url = 'https://en.wikipedia.org/w/api.php';

        return this.jsonp.request(url, this.request)
            .map((res: Response) => res.json())
            //              .do(data => console.log('server data:', data))  // debug
            .map(
                (data: string[])=>{
                    for(let i = 0; i < data[1].length; i++){
                        this.result.push({
                            'title': data[1][i], 'content': data[2][i]
                         })
                    }
                    return this.result;
                }
            )
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


}