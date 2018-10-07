import { Component } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'content',
    template: `
        <div class="panel-heading">
            <h3>Contact</h3>
        </div>

        <div class="panel-body">
            <p>회사 전화번호 : 0000-0000</p>
            <p>회사 대표 이메일 : info@angular.com</p>
            <br>
            <h2>회사에 궁금한점 문의하기</h2>
            <form>
                <label>이름</label> 
                <input type="text" class="form-control" name="name" [(ngModel)]="sendData.name"><br>

                <label>용건</label>
                <textarea class="form-control" rows="10" name="name" [(ngModel)]="sendData.content"></textarea>
                <br>
                <button class="btn btn-primary" (click)="onClick()">전송</button>
            </form>
        </div>
    `,
})
export class ContentComponent  { 
    private sendData: {name: string, content: string} = {
        name: '',
        content: ''   
    };

    constructor() {}

    private onClick(): void{
        window.alert(this.sendData.name + ' - ' + this.sendData.content);
    }
}