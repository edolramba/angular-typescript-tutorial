
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'a09Component',
    template: `
    <div class="panel-heading">
        <h3>Observable Event Demo</h3>
    </div>

    <div class="panel-body">
        <input type="text" class="form-control" placeholder="Enter stock" [formControl]="searchInput"><br>
        Temperature: {{temperature}}
    </div>
    `,
})
export class A09Component  { 
    private baseWeatherURL : string = 'http://api.openweathermap.org/data/2.5/weather?q=';
    private urlSuffix : string = '&units=metric&appid=ca3f6d6ca3973a518834983d0b318f73';
    
    private searchInput: FormControl = new FormControl();
    private temperature: string;

    constructor(private http: Http) {}

    ngOnInit() {
        this.searchInput.valueChanges
            .debounceTime(1000)
            //도중에 글자가 바뀌면 바뀐 글자로 재요청 (중간에 전송했던 문자를 취소해 줌)
            .switchMap(
                (data : string) => {
                    // return this.getWeather(data);
                    return this.http.get(this.baseWeatherURL + data + this.urlSuffix);
                }
            )
            .map(
                (data: any) => {
                    return data.json();
                }
            )
            .map(
                (data: any) => {
                    let ary: string[] = [];
                    ary[0] = data['main'].temp;
                    ary[1] = data['main'].humidity;
                    return ary;
                }
            )
            .subscribe(
                (data: any) => {
                    console.log(data);
                    //this.temperature = `${data['main'].temp}/${data['main'].humidity}`
                    this.temperature = `${data[0]}/${data[1]}`
                }
            )
            
    }

    private getWeather(data: any): Observable<string[]>{
        return this.http.get(this.baseWeatherURL + data + this.urlSuffix)
            .map(
                (result: any) => {
                    return result.json();
                }
            )
    }
    
}