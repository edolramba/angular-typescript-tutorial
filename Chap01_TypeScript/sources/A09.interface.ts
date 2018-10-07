// A09.interface.ts

// 접근제한자를 기술하면 에러.
interface iJumsu{
    getTotal(): number;
    getAvg(): number;
    display(): void;
}

// 부모 클래스. 추상 클래스
abstract class Jumsu implements iJumsu{
    protected name: string;
    protected kor: number;
    protected eng: number;
    protected math: number;
    protected avg: number;
    protected total: number;
    //math 는 생략가능
    constructor(name: string, kor: number, eng: number, math?:number){
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }

    public getTotal(): number{
        this.total = this.kor + this.eng;
        return this.total;
    }

    public abstract getAvg(): number;
    public abstract display(): void;
}

class TwoJumsu extends Jumsu implements iJumsu{
    constructor(name: string, kor: number, eng: number){
       super(name, kor, eng);
    }

    public getAvg(): number{
        this.avg = this.total / 2;
        return this.avg;
    }

    public display(): void{
        console.log(`${this.name} => ${this.total} / ${this.avg}`)
    }

}

class ThreeJumsu extends Jumsu implements iJumsu{
    constructor(name: string, kor: number, eng: number, math: number){
       super(name, kor, eng, math);
    }

    //override
    public getTotal(): number{
        this.total = this.kor + this.eng + this.math;
        return this.total;
    }

    //override
    public getAvg(): number{
        this.avg = this.total / 3;
        return this.avg;
    }

    public display(): void{
        console.log(`${this.name} => ${this.total} / ${this.avg}`)
    }

}

let jumsu: Jumsu[] = [];
jumsu[0] = new TwoJumsu('Hong', 100, 90);
jumsu[1] = new ThreeJumsu('Im',90,80,70);

for(let item of jumsu){
    let total = item.getTotal();
    let avg = item.getAvg();
    item.display();
}