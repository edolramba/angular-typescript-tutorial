// A05.Class.ts
var Person = /** @class */ (function () {
    // 생성자에는 리턴 타입을 기술하지 않는다.
    function Person(firstName, lastName, age, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this._id = id;
    }
    Object.defineProperty(Person.prototype, "id", {
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
    Person.prototype.toString = function () {
        return this.firstName + ", " + this.lastName + ", " + this.age + ", " + this._id;
    };
    return Person;
}());
// 객체 생성
var hong = new Person('Hong', 'GilDong', 20, '123-4567');
var im = new Person('Im', '꺽정', 30, '356-7894');
hong.firstName = '홍';
//_id 는 private 이니까 못쓴다.
//hong._id = '34234234';
// Getter, Setter 를 통해 접근한다.
// Getter, Setter 는 프로퍼티처럼 참조한다.
hong.id = '890-3421';
console.log(hong.id);
console.log(hong.toString());
console.log(im.toString());
//# sourceMappingURL=A05.Class.js.map