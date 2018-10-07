import { Component } from '@angular/core';
import { ThreeVO } from './../service/A03.threeVO';
import { ThreeJumsu } from './../service/A03.three.Jumsu';

@Component({
    selector: 'a03Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Jumsu Service</h3>
            </div>

            <div class="panel-body">
                <div *ngFor="let item of str">{{item}}</div>
                <br>
            </div>
        </div>
    `
})
export class A03Component{
    private name: string[] = [];
    private total: number[] = [];
    private avg: number[] = [];
    private str: string[] = [];

    private hongVO: ThreeVO;
    private imVO: ThreeVO;

    constructor(private three: ThreeJumsu){
        this.hongVO = new ThreeVO('홍길동', 100, 90, 80);
        this.imVO = new ThreeVO('임꺽정', 90, 70, 60);
    }

    ngOnInit() {
        this.total[0] = this.three.getTotal(this.hongVO);
        this.total[1] = this.three.getTotal(this.imVO);

        this.avg[0] = this.three.getAvg(this.hongVO);
        this.avg[1] = this.three.getAvg(this.imVO);

        this.str[0] = this.three.display(this.hongVO);
        this.str[1] = this.three.display(this.imVO);
    }

}