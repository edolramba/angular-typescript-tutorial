
// 주석 및 해제는 컨트롤 슬래쉬
// let name = 'NolBu';

class MyClass {
    private firstName: string;
    private lastName: string;

    private _age: number;

    //기본 생성자이므로 return type 이 없다
    //기본 접근 제한자는 public 이다 (public(default), protected, private)
    constructor(firstName:string, lastName:string, age:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
    }
    
    //Getter, Setter method 아님, JS 에서는 일반 메서드
    public getFirstName(): string{
        return this.firstName;
    }
    public setFirstName(firstName:string): void{
        this.firstName = firstName;
    }

    //JS 의 Getter, Setter method 
    //호출시에는 메서드 형태로 호출하지 않고 변수 호출 방식을 사용한다.
    public get age(): number{
        return this._age;//? 언더바 구분의 의미를 이해못함
    }
    public set age(age : number){ //반환타입이 있으면 에러다
        this._age = age;
    }

    public toString(): string{
        return `MyClass: [firstName]=${this.firstName}, [lastName]=${this.lastName}, [age]=${this.age}, [ages]=${this._age}`//달라이엘이 뭔지?
    }
}
//폴더에 동일한 이름이 있으면 안됨
let clazz = new MyClass('Hong', 'GilDong', 30);
//clazz.firstName = 'IM'; //error private 이므로 접근 불가
console.log(clazz.getFirstName()); //메서드로 가져오는 것과의 차이점?

//Getter, Setter
//clazz._age = 20; //private error 
clazz.age = 20;         //setter, getter 는 프로퍼티처럼 호출

console.log(clazz.toString());

// 컴파일 (도스창에서 실행)
// tsc A01.MyClass.ts --target es5

