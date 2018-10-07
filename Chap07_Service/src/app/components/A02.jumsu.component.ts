import { Component, OnInit } from '@angular/core';
import { TwoVO } from '../service/A02.twoVO.service';
import { TwoJumsu } from '../service/A02.twoJumsu';

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Jumsu Service</h3>
            </div>

            <div class="panel-body">
                Name: {{name}}<br>
                Total: {{total}} / Avg : {{avg}} <br>
                Info: {{str}}
                <br>
            </div>
        </div>
    `
})
export class A02Component{
    private name: string;
    private total: number;
    private avg: number;
    private str: string;

    constructor(private vo: TwoVO, private two: TwoJumsu){
        vo.name = 'HongGilDong';
        vo.kor = 100;
        vo.eng = 50;
    }

    ngOnInit() {
        this.name = this.vo.name;
        this.total = this.two.getTotal(this.vo);
        this.avg = this.two.getAvg(this.vo);
        this.str = this.two.display(this.vo);
    }
}