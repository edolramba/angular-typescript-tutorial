 // A02.twoVO.service.ts
import { Injectable } from '@angular/core';

 @Injectable()
 export class TwoVO{
     private _name: string;
     public kor: number;
     public eng: number;
     public total: number;
     public avg: number;

     public get name(): string{
         return this._name;
     }
     public set name(name: string){
         this._name = name;
     }
 }