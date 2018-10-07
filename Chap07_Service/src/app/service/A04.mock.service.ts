 // A04.mock.service.ts
import { Injectable } from '@angular/core';
import { ThreeVO } from './A03.threeVO'

 @Injectable()
 export class MockService{
     private students: Array<ThreeVO> = [
            new ThreeVO('Hong', 100, 90, 80),
            new ThreeVO('IM', 90, 90, 80),
            new ThreeVO('NulBu', 80, 90, 80),
            new ThreeVO('HungBu', 70, 90, 80),
            new ThreeVO('Jimea', 60, 90, 80)
     ]

     public getStudent(): Array<ThreeVO>{
         return this.students;
     }
 }