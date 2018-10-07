 // A04.http.service.ts

 import { Injectable } from '@angular/core';
 import { Http, Response } from '@angular/http';
 import { Observable } from 'rxjs/Observable';
 
 @Injectable()
 export class A04httpService {

     constructor(private http: Http) {}

     get(): Observable<string[]> {
         return this.http.get('app/resources/data/productData.json')
         .map((res: Response) => res.json())
         .catch(this.handleError);
     }
 
     private handleError (error: any) {
         let errMsg = (error.message) ? error.message :
         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
         console.error(errMsg); // log to console instead
         return Observable.throw(errMsg);
     }
 }