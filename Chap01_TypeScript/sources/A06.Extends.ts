// A06.Extends.ts

class PersonOne{
    
    // TypeScript 만 지원한다.
    // 매개변수에 접근제한자를 붙이면 내부 프로퍼티로 정의해주면서 
    // 매개변수의 역할도 한다.
    constructor(public firstName: string, public lastName: string, public age: number, private _id: string){
    }

    // Getter
    public get id() : string{
        return this._id;
    }

    // Setter 리턴 타입을 기술하지 않아야 한다. 있으면 에러 발생
    public set id(id: string){
        this._id = id;
    }

    //일반적인 메서드 
    public toString(): string{
        return `${this.firstName}, ${this.lastName}, ${this.age}, ${this._id}`;
    }

}

class Employee extends PersonOne{
    private department: string;

    //extends 가 붙었기 때문에 부모 객체에 대한 처리를 먼저 해줘야 한다.
    constructor(firstName: string, lastName: string, age: number, _id: string, department: string){
        super(firstName, lastName, age, _id);
        this.department = department;
    }

    //Overwrite 
    public toString(): string{
        //조사) private, proteced 차이 점 확인해보기
        return `${this.firstName}, ${this.lastName}, ${this.age}, ${this.id}, ${this.department}`;
    }
}

let emp1: PersonOne = new PersonOne('Hong','GilDong',20,'123-4567');
let emp2: Employee = new Employee('Nol','Bu',20,'123-4567','dept');

emp2.id = '345-6789';
emp2.age = 50;

console.log(emp1.toString());
console.log(emp2.toString());

//다형성 구현
let emp3: PersonOne = new Employee('Hung','Bu',30,'123-4566','dept')
console.log(emp3.toString());