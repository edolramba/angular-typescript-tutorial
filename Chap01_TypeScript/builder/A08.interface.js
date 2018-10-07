// A08.interface.ts
// class PersonClass{
//     constructor(public config: object){
//     }
// }
// let iHong:object = {
//     firstName: 'Hong',
//     lastName: 'GilDong',
//     age: 20
// }
// 타입에서는 에러가 아니지만 Angular 에서는 에러 발생
// PersonClass의 config 변수에는 firstName, lastName.. 등의 프로퍼티가 없다
//let p = new PersonClass(iHong);
var PersonClass = /** @class */ (function () {
    function PersonClass(config) {
        this.config = config;
    }
    return PersonClass;
}());
var iHong = {
    firstName: 'Hong',
    lastName: 'GilDong',
    age: 20
};
var p = new PersonClass(iHong);
console.log(p.config.firstName);
//# sourceMappingURL=A08.interface.js.map