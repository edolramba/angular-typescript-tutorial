// A05.Class.ts

class Person{
    public firstName: string;
    public lastName: string;
    public age: number;
    private _id: string;

    // 생성자에는 리턴 타입을 기술하지 않는다.
    constructor(firstName: string, lastName: string, age: number, id: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this._id = id;
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

// 객체 생성
let hong: Person = new Person('Hong','GilDong',20,'123-4567');
let im: Person = new Person('Im','꺽정',30,'356-7894');

hong.firstName = '홍';
//_id 는 private 이니까 못쓴다.
//hong._id = '34234234';
// Getter, Setter 를 통해 접근한다.
// Getter, Setter 는 프로퍼티처럼 참조한다.
hong.id = '890-3421';
console.log(hong.id);
console.log(hong.toString());
console.log(im.toString());
