// A09.interface.ts
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
// 부모 클래스. 추상 클래스
var Jumsu = /** @class */ (function () {
    //math 는 생략가능
    function Jumsu(name, kor, eng, math) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
    Jumsu.prototype.getTotal = function () {
        this.total = this.kor + this.eng;
        return this.total;
    };

    return Jumsu;
}());
var TwoJumsu = /** @class */ (function (_super) {
    __extends(TwoJumsu, _super);
    function TwoJumsu(name, kor, eng) {
        return _super.call(this, name, kor, eng) || this;
    }
    TwoJumsu.prototype.getAvg = function () {
        this.avg = this.total / 2;
        return this.avg;
    };
    TwoJumsu.prototype.display = function () {
        console.log(this.name + " => " + this.total + " / " + this.avg);
    };
    return TwoJumsu;
}(Jumsu));
var ThreeJumsu = /** @class */ (function (_super) {
    __extends(ThreeJumsu, _super);
    function ThreeJumsu(name, kor, eng, math) {
        return _super.call(this, name, kor, eng, math) || this;
    }
    //override
    ThreeJumsu.prototype.getTotal = function () {
        this.total = this.kor + this.eng + this.math;
        return this.total;
    };
    //override
    ThreeJumsu.prototype.getAvg = function () {
        this.avg = this.total / 3;
        return this.avg;
    };
    ThreeJumsu.prototype.display = function () {
        console.log(this.name + " => " + this.total + " / " + this.avg);
    };
    return ThreeJumsu;
}(Jumsu));
var jumsu = [];
jumsu[0] = new TwoJumsu('Hong', 100, 90);
jumsu[1] = new ThreeJumsu('Im', 90, 80, 70);
for (var _i = 0, jumsu_1 = jumsu; _i < jumsu_1.length; _i++) {
    var item = jumsu_1[_i];
    var total = item.getTotal();
    var avg = item.getAvg();
    item.display();
}
//# sourceMappingURL=A09.interface.js.map