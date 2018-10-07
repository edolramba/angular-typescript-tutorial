// A07.profit.service.ts

import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfitListService {
    private params: URLSearchParams = new URLSearchParams();
    private request: RequestOptionsArgs;

    constructor(private http: Http) {}

    get(year: string): Observable<string[]> {
        // prarameter setting
        this.params.set('year', year);
        this.request = {
            params: this.params
        }

        return this.http.get('http://localhost:8080/Profit/profitList', this.request)
        .map((res: Response) => res.json())
        //              .do(data => console.log('server data:', data))  // debug
        .map((res: string[]) => res['profit'])
        .catch(this.handleError);
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}