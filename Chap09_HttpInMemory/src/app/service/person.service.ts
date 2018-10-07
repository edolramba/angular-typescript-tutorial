import { Person } from './../resources/data/personData';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonService {

    private url: string = 'app/persons';

    constructor(private http: Http) { }

    getPerson(): Observable<string[]> {
        return this.http.get(this.url)
            .map((res: Response) => res.json())
            .map((res: Response) => res['data'])
            .catch(this.handleError);
    }

    addPerson(person: Person): Observable<Person> {
        let body: any = { name: person.name, age: person.age, address: person.address };

        return this.http.post(this.url, body)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    modifyPerson(person: Person): Observable<Person> {
        let url: string = `${this.url}/${person.id}`;

        // let headers = new Headers( {'Content-Type': 'application/json'} );
        // let options = new RequestOptions(
        //     {headers: headers}
        // )
        console.log(JSON.stringify(person));

        return this.http.put(url, JSON.stringify(person))
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    deletePerson(person: Person): Observable<Person>{
        let url: string = `${this.url}/${person.id}`;

        console.log(JSON.stringify(person));

        return this.http.delete(url, JSON.stringify(person))
            .map( (res: Response) => res.json() )
            .catch(this.handleError)
    }


    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}