// A06.Extends.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonOne = /** @class */ (function () {
    // TypeScript 만 지원한다.
    // 매개변수에 접근제한자를 붙이면 내부 프로퍼티로 정의해주면서 
    // 매개변수의 역할도 한다.
    function PersonOne(firstName, lastName, age, _id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this._id = _id;
    }
    Object.defineProperty(PersonOne.prototype, "id", {
        // Getter
        get: function () {
            return this._id;
        },
        // Setter 리턴 타입을 기술하지 않아야 한다. 있으면 에러 발생
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    //일반적인 메서드 
    PersonOne.prototype.toString = function () {
        return this.firstName + ", " + this.lastName + ", " + this.age + ", " + this._id;
    };
    return PersonOne;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    //extends 가 붙었기 때문에 부모 객체에 대한 처리를 먼저 해줘야 한다.
    function Employee(firstName, lastName, age, _id, department) {
        var _this = _super.call(this, firstName, lastName, age, _id) || this;
        _this.department = department;
        return _this;
    }
    //Overwrite 
    Employee.prototype.toString = function () {
        //조사) private, proteced 차이 점 확인해보기
        return this.firstName + ", " + this.lastName + ", " + this.age + ", " + this.id + ", " + this.department;
    };
    return Employee;
}(PersonOne));
var emp1 = new PersonOne('Hong', 'GilDong', 20, '123-4567');
var emp2 = new Employee('Nol', 'Bu', 20, '123-4567', 'dept');
emp2.id = '345-6789';
emp2.age = 50;
console.log(emp1.toString());
console.log(emp2.toString());
//다형성 구현
var emp3 = new Employee('Hung', 'Bu', 30, '123-4566', 'dept');
console.log(emp3.toString());
//# sourceMappingURL=A06.Extends.js.map