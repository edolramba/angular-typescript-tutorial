import { Component, Input } from '@angular/core';

@Component({
    selector: 'a09One',
    template: `
        <div class="panel-body">
            
        </div>
    `
})
export class A09One {
    private name: string = "A09 One"
    @Input() age: number;

    constructor(){
        console.log('1. Child constructor=> ' + this.age);
    }

    ngOnInit() {
        console.log('2. Child ngOnInit=> ' + this.age);
    }

    ngDoCheck() {
        console.log('3. Child ngDoCheck=> ' + this.age);
    }

    ngOnDestroy() {
        console.log('4. Child ngOnDestroy=> ' + this.age);
    }

    ngAfterContentInit() {
        console.log('5. Child ngAfterContentInit=> ' + this.age);
    }

    ngAfterContentChecked() {
        console.log('6. Child ngAfterContentChecked=> ' + this.age);
    }

    ngAfterViewInit() {
        console.log('7. Child ngAfterViewInit=> ' + this.age);
    }

    ngAfterViewChecked(){
        console.log('8. Child ngAfterViewChecked=> ' + this.age);
    }

}

@Component({
    selector: 'a09Component',
    template: `
        <div class="panel-body">
            <input type="text" class="form-control" [(ngModel)]="name">
            <input type="number" class="form-control" [(ngModel)]="age">
            <input type="string" class="form-control" [(ngModel)]="user.address">
        </div>

        <a09One [age]="age"></a09One>
        
    `
})
export class A09Component {
    private name: string = 'A09 Component';
    private age: number = 20;
    private user: any = {
        address: 'Seoul'
    }

    /*
        constructor: 생성자. 딱 1번만 실행됨. 변수 및 객체 초기화
        ngOnInit: constructor가 실행 된 후 1번만 실행됨
                  초기화 후 먼저 실행될 명령이 있는 경우
        ngDoCheck: ngOnInit 실행된 후 class의 프로퍼티 메서드의 값 변경을 계속 체크
                   항상 메모리에 올라가 있는 이벤트
        ngOnDestroy: 현재 component 가 다른 component 에서 삭제되어 사라질 때, 1번만 실행
                    자원 해제 등의 목적으로 사용
        ngAfterContentInit: 외부 데이터 값이 현재 프로퍼티에 바인딩 될 때, 1번만 실행
                            EX) Input, Output...
        ngAfterContentChecked: 외부로부터 바인딩 된 값이 변경 여부를 체크
                               항상 메모리에 올라가 있는 이벤트
        ngAfterViewInit: Template이 HTML 형태로 완성되기 전 1번 실행
        ngAfterViewChecked: Template(View)의 변경 여부 체크
                            항상 메모리에 올라가 있는 이벤트
    */
    constructor(){
        console.log('1. Main constructor=> ' + this.age);
    }

    ngOnInit() {
        console.log('2. Main ngOnInit=> ' + this.age);
    }

    ngDoCheck() {
        console.log('3. Main ngDoCheck=> ' + this.age);
    }

    ngOnDestroy() {
        console.log('4. Main ngOnDestroy=> ' + this.age);
    }

    ngAfterContentInit() {
        console.log('5. Main ngAfterContentInit=> ' + this.age);
    }

    ngAfterContentChecked() {
        console.log('6. Main ngAfterContentChecked=> ' + this.age);
    }

    ngAfterViewInit() {
        console.log('7. Main ngAfterViewInit=> ' + this.age);
    }

    ngAfterViewChecked(){
        console.log('8. Main ngAfterViewChecked=> ' + this.age);
    }
}