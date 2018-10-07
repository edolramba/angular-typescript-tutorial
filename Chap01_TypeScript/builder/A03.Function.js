// A03.Function.ts
// 매개변수에도 타입이 있고 리턴 타입이 존재한다.
// 리턴 타입이 없는 경우는 void로 지정한다.
// 단, 생성자 mothod 와 setter method 는 return type 을 기술하지 않는다. 
function calcTax(state, amount, person) {
    if (state === 'NY') {
        return amount * 0.06 - person * 500;
    }
    else if (state === 'NJ') {
        return amount * 0.03 - person * 300;
    }
}
// 변수 선언 방식
var calcTax2 = function (state, amount, person) {
    if (state === 'NY') {
        return amount * 0.06 - person * 500;
    }
    else if (state === 'NJ') {
        return amount * 0.03 - person * 300;
    }
};
var ny1 = calcTax('NY', 5000, 2); //변수는 함수가 리턴하는 값으로 자동으로 초기화 된다.
var ny2 = calcTax2('NY', 5000, 2);
console.log(ny1 + "," + ny2);
//매개변수의 기본 값을 지정할 수 있다.
//이 때 기본값을 가진 매개변수는 매개변수 가장 뒤쪽에 위치해야 한다.
//기본 값을 가진 매개변수는 생략 가능하다.
var calcTax3 = function (amount, person, state) {
    if (state === void 0) { state = 'NY'; }
    //state = state || 'NY';
    if (state === 'NY') {
        return amount * 0.06 - person * 500;
    }
    else if (state === 'NJ') {
        return amount * 0.03 - person * 300;
    }
};
var ny3 = calcTax3(5000, 2);
var ny4 = calcTax3(5000, 2, 'NJ');
console.log(ny3 + "," + ny4);
//생략 가능한 매개변수. 넣을 수도 있고 생략할 수도 있도록 세팅
//생략 가능한 매개변수는 가장 뒤에 와야한다.
var calcTax4 = function (state, amount, person) {
    // 변수가 생략되었을 경우 계산식이 이루어 질 수 없는 경우 초기값 설정 목적
    person = person || 0;
    if (state === 'NY') {
        return amount * 0.06 - person * 500;
    }
    else if (state === 'NJ') {
        return amount * 0.03 - person * 300;
    }
};
var ny5 = calcTax4('NY', 5000);
var ny6 = calcTax4('NY', 5000, 2);
console.log(ny5 + "," + ny6);
//# sourceMappingURL=A03.Function.js.map