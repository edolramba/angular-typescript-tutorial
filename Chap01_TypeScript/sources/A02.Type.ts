// A02.type.ts

// 변수에 타입을 지정하지 않은 경우 값이 타입을 가지고 있다. 
// 따라서 firstName 은 자동으로, string Type 으로 지정된다.
let firstName = 'Hong';
let lastName: string = 'GilDong';

// string 으로 초기화 되어 있으므로 에러
// firstName = 20;
firstName = 'IM';

// JavaScript 와의 호환성을 위해 탄생한 TypeScript 타입
// 모든 타입의 부모타입으로 어떠한 값도 다 넣을 수 있다.(가급적 사용 안함)
let age: any = 20;

age = 'NulBu';
age = new Date();

// 타입을 지정하지 않고 초기화도 하지 않은 변수 (any로 할당 됨)
let notType;

notType = 10;
notType = "String";


//참조형 변수, 생성자와 동일한 타입으로 생성
let today: Date = new Date();

// outDir 폴더명
// outFolder 
// tsc A02.Type.ts --outDir ../builder
console.log(`${firstName}, ${lastName}, ${age}, ${notType}, ${today}`);
// tsconfig.json 소스폴더에 복붙해서 넣기, typescript 는 복붙이 안되서 폴더에서 해야 됨

// 배열의 이용. 제너릭을 이용해 선언해도 된다.
let ary: string[] = ['One','Two','Three'];
let ary1: Array<string> = ['First','Second','Third'];


//let 와 var 등의 차이점은 scope 를 갖는 부분
for(let i = 0; i < ary.length; i++){
    console.log(`${i} => ${ary[i]}`)
}

// let 로 선언한 i 변수는 for문 안에서만 사용하여 scope 를 벗어나므로 오류 발생
// console.log(i);

//es2015에서 추가된 기능. 
//Array 클래스에 prototype으로 추가된 custom prototype 속성은 출력 안함
for(let item of ary1){
    console.log(item);
}

// null로 선언된 변수에는 null 과 undefiend 만 대입 가능
let nullValue: null = null; //쓸 일이 거의 없음

// nullValue = 10;
// nullValue = 'Hong';
nullValue = undefined;

// undefined 로 선언된 변수에는 null과 undefined 만 대입 가능
let unValue: undefined = undefined;
//unValue = 10;
//unValue = 'Hong';
unValue = null;
