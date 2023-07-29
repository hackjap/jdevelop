// ES2015(ES6)
/**
 *  Class
 */
class Person {
    // 클래스 로직
    constructor(name,age) {
        console.log('created')
        this.name = name;
        this.age = age;
    }
}
var seho = new Person('jsp', 26); // 생성 되었습니다.
console.log(seho);

/**
 * 위 Class와 동일한 기능이며 과거 생성자 함수 -> 클래스 문법으로 발전
 * @param name
 * @param age
 * @constructor
 */
function Person(name, age) {
    this.name = age;
    this.age = age;
}
var seho = new Person('jsp', 26); // 생성 되었습니다.
console.log(seho);

/**
 * Javascript Proto Type
 * __proto__
 * 기본적으로 중복되는 것들은 상속받아 사용하는 것이 메커니즘
 *
 * [ 활용 사례 ]
 * MDN: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object
 * Object.keys
 * Object.hasOwnProperty();
 * js는 기본적으로 Object,Array등과 같은 객체가 proto type을 이용하여 위 함수들을 제공
 * "Build-In Javascript Api" or "Javascript Native Api" 라고 함
 *
 */

var user = { id : 1, name: 'A'}

var admin = {};
admin.__proto__ = user;

admin.age= 26;

console.log(admin); // __proto__ id:1, name: 'A , { age: 26 }




