// A07.polymorphism.ts

class OneClass{
    public name: string = 'Hong';

    public onOne(): void{
        console.log('One Class');
    }

    public toString(): string{
        return `One Class [name]=${this.name}`;
    }
}

class TwoClass extends OneClass{
    public name: string = 'Im';
    public kor: number = 100;

    public onTwo(): void{
        console.log('Two Class');
    }

    public toString(): string{
        return `Two Class [name]=${this.name}, [kor]=${this.kor}`;
    }
}

class ThreeClass extends OneClass{
    public name: string = 'Im';
    public kor: number = 100;
    public eng: number = 90;

    public onThree(): void{
        console.log('Three Class');
    }

    public toString(): string{
        return `Three Class [name]=${this.name}, [kor]=${this.kor}, [eng]=${this.eng}`;
    }
}


let clazzs: OneClass[] = [new OneClass(), new TwoClass(), new ThreeClass]

for(let item of clazzs){
    console.log(item.toString());
}

//One 만 호출가능하고 Two, Three 는 출력불가 (OneClass 구조만 참조 가능)
clazzs[1].onOne();
//clazzs[1].onTwo();