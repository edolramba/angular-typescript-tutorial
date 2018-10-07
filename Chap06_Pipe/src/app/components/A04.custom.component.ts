import { Component } from '@angular/core';
import { UpLowClass } from './../pipe/custom.pipe';

@Component({
    selector: 'a04Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">   
                <h3>Custom Pipe</h3>
            </div>


            <!--
                Pipe 는 이 component 나 app.module.ts 에 providers 로 등록되어 이썽야 사용할 수 있다.
                Pipe 도 View 에 참가하므로 app.module 에 declarations 에 View 로 등록해야 한다.
                => app.module.ts 의 declarations 와 provider 에 등록해야 사용 가능
            -->
            <div class="panel-body">
                <h4>대 소문자 변경</h4>
                {{'I am a Boy' | upLow}}<br>
                {{'I am a Boy' | upLow : 'up' }}<br>
                {{'I am a Boy' | upLow : 'low' }}<br>

                <h4>Replace</h4>
                <div>
                {{'I am a Boy' | replace : 'Boy' : 'Girl' }}<br>
                {{'I am a Boy' | replace : 'am' : ' '}}<br>
                {{'I am a Boy' | replace : ' ' : 'Girl' }}<br>
                {{'I am a Boy' | replace : 'Girl' }}<br>
                {{'a1b2c3d4e5' | replace : delete_alpha : ' '}}<br>

                </div>
                <br>

                <h4>Abbr</h4>
                <div>
                {{'동해물과 백두산이 마르고 닳도록 하느님이 보우하사' | abbr}}<br>
                {{'동해물과 백두산이 마르고 닳도록 하느님이 보우하사' | abbr : 10}}<br>
                {{'동해물과 백두산이 마르고 닳도록 하느님이 보우하사' | abbr : 10 : '*****'}}<br>
                
                </div>
                <br>

                <h4>LimitTo</h4>
                <div class="form-group">
                    <label for="num">Number</label>
                    <select class="form-control" name="num" [(ngModel)]="displayNum">
                        <option *ngFor="let item of [1,2,3,4,5]">{{item}}</option>
                    </select>
                    <br>

                    <table class="table">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>KOR</th>
                            <th>ENG</th>
                        </tr>
                        <tr *ngFor="let item of obj | limitTo : displayNum | search : 'n' : 'name' ">
                            <td>{{item.id}} </td>
                            <td>{{item.name}} </td>
                            <td>{{item.kor}} </td>
                            <td>{{item.eng}} </td>
                        </tr>
                        
                    </table>
                </div>
                <br>

                <h4>Filter</h4>
                <div>
                    <table class="table">
                        <tr>
                            <th>ID</th>
                            <!-- *ngFor="let item of obj | limitTo : displayNum"-->
                            <th>Name</th>
                            <th>KOR</th>
                            <th>ENG</th>
                        </tr>
                        <tr *ngFor="let item of obj | jumsu">
                            <td>{{item.id}} </td>
                            <td>{{item.name}} </td>
                            <td>{{item.kor}} </td>
                            <td>{{item.eng}} </td>
                        </tr>

                    </table>
                    <br>

                    <table class="table">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>KOR</th>
                            <th>ENG</th>
                        </tr>   
                        <tr *ngFor="let item of obj | jumsu : 'kor' : 50 : 80">
                            <td>{{item.id}} </td>
                            <td>{{item.name}} </td>
                            <td>{{item.kor}} </td>
                            <td>{{item.eng}} </td>
                        </tr>
                    </table>
                </div>
                <br>

                <h4>OrderBy</h4>
                <div>
                    <select class="form-control">
                        <option value="name">Name</option>
                        <option value="kor">Kor</option>
                        <option value="eng">Eng</option>
                    </select>
                    <table class="table">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>KOR</th>
                            <th>ENG</th>
                        </tr>
                        <tr *ngFor="let item of obj | orderBy : keyName : 'desc' ">
                            <td>{{item.id}} </td>
                            <td>{{item.name}} </td>
                            <td>{{item.kor}} </td>
                            <td>{{item.eng}} </td>
                        </tr>
                    </table>
                </div>
                <br>

                <h4>Search</h4>
                <div>
                    <label><input type="checkbox" [(ngModel)]="ignoreCase"> 대소문자 무시</label>
                    <table class="table">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>KOR</th>
                            <th>ENG</th>
                        </tr>
                        <tr *ngFor="let item of obj | search : 'n' : 'name': ignoreCase ">
                            <td>{{item.id}} </td>
                            <td>{{item.name}} </td>
                            <td>{{item.kor}} </td>
                            <td>{{item.eng}} </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `
})
export class A04Component{
    private delete_alpha:RegExp = /[a-zA-Z]+/g;
    private delete_number:RegExp = /[0-9]+/g;

    private displayNum: number = 3;
    private keyName: string = 'name';
    private ignoreCase: boolean = false;

    private obj: Array<any> = [
        {id: 1, name: 'Hong', kor: 90, eng: 71},
        {id: 2, name: 'Jimea', kor: 80, eng: 72},
        {id: 3, name: 'NolBu', kor: 70, eng: 73},
        {id: 4, name: 'HungBu', kor: 60, eng: 74},
        {id: 5, name: 'Ih', kor: 50, eng: 85}
    ]

    private nums: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

}
