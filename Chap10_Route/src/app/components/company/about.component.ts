import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'about',
    template: `
        <div class="panel-heading">
            <h3>회사 소개</h3>
        </div>
        <br>

        <div class="panel-body">
            엥귤러 회사는 2013년도에 설립되었습니다. 
            직원수는 1만명이 넘으며 프론트엔드 개발업계의 시장점유율 1위를 하고있는 기업입니다.
        </div>
        <br>
        
        <div class="panel-body">
            <h4>회사 장점  </h4>
            <ul>
                <li>가깝다.</li>
                <li>편리하다.</li>
                <li>믿을 만하다.</li>
            </ul>
            <p>회사 매출</p>
             {{salary}}원
        </div>
    `,
})
export class AboutComponent  { 
    private salary: number;

    constructor() { }

    ngOnInit() {
        
    }
}