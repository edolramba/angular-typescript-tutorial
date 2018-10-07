// A02.input.directive.ts
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[a02OneDir]',
    host: {
        '(click)': 'onClick()'
    }
})
export class A02OneDirective{
    @Input() a02OneDir: string;

    private onClick(): void{
        console.log(`Hello~ ${this.a02OneDir}`);
    }
}

@Directive({
    // 일단 3개의 값을 받을 변수를 준비 해 놓겠다. 안주면 안쓰고 주면 쓴다.
    selector: '[a02TwoDir], [name], [age]',
    host: {
        '(click)': 'onClick()'
    }
})
export class A02TwoDirective{
    @Input('name') name: string;
    @Input('age') age: number;

    private _title: string;
    @Input('a02TwoDir')
    public get title(): string{
        return this._title;
    }
    public set title(title: string){
        this._title = title;
    }

    private onClick(): void{
        console.log(`Hello~ ${this.name}, Age: ${this.age}, Title: ${this.title}`);
    }
}