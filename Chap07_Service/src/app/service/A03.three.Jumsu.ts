 //A02.twoJumsu.ts
import { Injectable } from '@angular/core';
import { ThreeVO } from './A03.threeVO'

 @Injectable()
 export class ThreeJumsu{

    public getTotal(vo:ThreeVO) : number{
        vo.total = vo.kor + vo.eng + vo.math;
        return vo.total;
    }
    public getAvg(vo: ThreeVO): number{
        vo.avg = vo.total / 3;
        return vo.avg;
    }

    public display(vo: ThreeVO): string{
        return `${vo.name}님의 총점은 ${vo.total}이고 평균은 ${vo.avg} 입니다.`;
    }

 }