// A07.polymorphism.ts
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
var OneClass = /** @class */ (function () {
    function OneClass() {
        this.name = 'Hong';
    }
    OneClass.prototype.onOne = function () {
        console.log('One Class');
    };
    OneClass.prototype.toString = function () {
        return "One Class [name]=" + this.name;
    };
    return OneClass;
}());
var TwoClass = /** @class */ (function (_super) {
    __extends(TwoClass, _super);
    function TwoClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Im';
        _this.kor = 100;
        return _this;
    }
    TwoClass.prototype.onTwo = function () {
        console.log('Two Class');
    };
    TwoClass.prototype.toString = function () {
        return "Two Class [name]=" + this.name + ", [kor]=" + this.kor;
    };
    return TwoClass;
}(OneClass));
var ThreeClass = /** @class */ (function (_super) {
    __extends(ThreeClass, _super);
    function ThreeClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Im';
        _this.kor = 100;
        _this.eng = 90;
        return _this;
    }
    ThreeClass.prototype.onThree = function () {
        console.log('Three Class');
    };
    ThreeClass.prototype.toString = function () {
        return "Three Class [name]=" + this.name + ", [kor]=" + this.kor + ", [eng]=" + this.eng;
    };
    return ThreeClass;
}(OneClass));
var clazzs = [new OneClass(), new TwoClass(), new ThreeClass];
for (var _i = 0, clazzs_1 = clazzs; _i < clazzs_1.length; _i++) {
    var item = clazzs_1[_i];
    console.log(item.toString());
}
//One 만 호출가능하고 Two, Three 는 출력불가 (OneClass 구조만 참조 가능)
clazzs[1].onOne();
//clazzs[1].onTwo(); 
//# sourceMappingURL=A07.polymorphism.js.map