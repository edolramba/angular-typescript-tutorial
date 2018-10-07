
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class PersonData implements InMemoryDbService{
    createDb(){
        let persons = [
            {id: 1, name: 'HongGilDong', age: 20, address: 'Seoul'},
            {id: 2, name: 'NolBu', age: 50, address: 'Seoul'},
            {id: 3, name: 'HungBu', age: 40, address: 'Seoul'},
            {id: 4, name: 'IlJimea', age: 23, address: 'Busan'},
            {id: 5, name: 'ImGekjung', age: 30, address: 'Inchen'}
        ];

        return {persons};
    }
}

export class Person{
    public id: number;
    public name: string;
    public age: number;
    public address: string;
}

