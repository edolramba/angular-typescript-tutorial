// A08.interface.ts

// 현 타입을 체크 할 목적으로 기술한다
// JS 의 Object Type 은 모든 클래스의 부모크래스이지만
// 사용자 정의 타입이 존재하지 않으므로 사용자 객체를 
// object 타입에 대입하면 타입 에러 발생. 이것을 방지할 목적
interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
    ssn?: string; //이 프로퍼티는 생략 가능
}

// class PersonClass{
//     constructor(public config: object){

//     }
// }

// let iHong:object = {
//     firstName: 'Hong',
//     lastName: 'GilDong',
//     age: 20
// }

// 타입에서는 에러가 아니지만 Angular 에서는 에러 발생
// PersonClass의 config 변수에는 firstName, lastName.. 등의 프로퍼티가 없다
//let p = new PersonClass(iHong);

class PersonClass{
    constructor(public config: IPerson){

    }
}

let iHong:IPerson = {
    firstName: 'Hong',
    lastName: 'GilDong',
    age: 20
}

let p = new PersonClass(iHong);
console.log(p.config.firstName);