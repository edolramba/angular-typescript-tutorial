// A04.Arrow.ts

let data1: string = 'Hong';
let data2: string = 'GilDong';
let lasName: string = 'Oh';

//console.log(getName()); //변수를 부르니까 오류, 아래가 함수라면 오류가 아님
console.log(getLastName()); //global 영역에 선언되므로 오류가 아님
let getName = function(): string{
    return `${data1} ${data2}`;
}

function getLastName(): string{
    return data2;
}

console.log(getName());
console.log(getLastName());

//☆ 책에 없는 부분 ☆
//ECMAScript 2015에서 추가된 Arros 함수
let getAllName = () => {
    console.log(`${data1} ${data2}`)
}
console.log(getAllName());
// 리턴만 딱 1줄 가지고 있는 함수
// let getFullName = () => {
//     return `${data1} ${data2}`
// }

// function 과 return 이 생략. return 기술하면 에러
let getFullName = () => `${data1} ${data2}`;
console.log(getFullName());
// 함수 내부에 기술한 스크립트가 2줄(1줄 이상) 이다. 
// 이 때는 반드시 {} ㅏ가 있어야하며 return 값 앞에는 return 명령어가 있어야한다.
// let getFullName1 = function() => {
//     console.log(`${data1} ${data2}`);
//     return `${data1} ${data2}`
// }

let getFullName1 = () => {
    console.log(`${data1} ${data2}`);
    return `${data1} ${data2}`
}
console.log(getFullName1());

// 매개변수는 동일. 단, 자바스크립트에서는 매개변수 타입이 없으므로 
// 매개변수가 1개일 경우는 매개변수의 ()가 생략 가능

let getFullName2 = value => {
    console.log(`${data1} ${data2}`);
    return `${data1} ${data2}`
}
console.log(getFullName2(22));
// 매개변수의 수가 1개 이상이거나 타입을 기술할 경우는 반드시 () 이용
let getFullName3 = (value, result) => {
    console.log(`${data1} ${data2}, ${value}, ${result}`);
    return `${data1} ${data2}`
}
console.log(`${data1} ${data2}`);
let getFullName4 = (value:string) => { //arrow 잘 모르겠다.
    console.log(`${data1} ${data2}, ${value}`);
    return `${data1} ${data2}`
}
//console.log(getFullName3(), getFullName4() => 'getFullName3(123,'abc'), getFullName4('abc')';
// function 과 return 이 생략. return 기술하면 에어

// 일반 함수의 this 와 Arrow 함수의 this 참조가 다르다.
// 일반 함수는 기술된 객체가 전역객체라면 this 는 window 
// Arrow 함수는 자신이 선언된 클래스에서 먼저 참조
function TodayClass(){
    //예전 JS 의 this 선언방식
    this.today1 = new Date();

    setTimeout(function(){
        console.log('Today Class : ' + this.today1);
    }, 1000)
}

let NowClass = () => {
    this.today2 = new Date();

    setTimeout(function(){
        console.log('Now Class : ' + this.today2);
    }, 1500)
}

function NowClassOne(){
    this.today3 = new Date();

    //arrow 함수는 자기안에 있는  this 를 사용할 수 있게 함
    setTimeout( () => {
        //예전 JS에서는 아래와 같이 this 를 쓰면 글로벌 영역으로 넘어가서 에러가 났었음
        console.log('Today Class : ' + this.today3);
    }, 2000)
}

let todayClazz = new TodayClass();
let nowClazz = new NowClass();
let nowClazzOne = new NowClassOne();