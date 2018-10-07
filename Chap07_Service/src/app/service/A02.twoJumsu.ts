 //A02.twoJumsu.ts
import { Injectable } from '@angular/core';
import { TwoVO } from './A02.twoVO.service'

 @Injectable()
 export class TwoJumsu{

    public getTotal(vo:TwoVO) : number{
        vo.total = vo.kor + vo.eng;
        return vo.total;
    }
    public getAvg(vo: TwoVO): number{
        vo.avg = vo.total / 2;
        return vo.avg;
    }

    public display(vo: TwoVO): string{
        return `${vo.name}님의 총점은 ${vo.total}이고 <br> 평균은 ${vo.avg} 입니다.`;
    }

 }