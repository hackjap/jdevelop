interface User {
    age: number,
    name: string,
}

// 변수에 활용한 인터페이스
let seho: User ={ 
    age: 33,
    name: 'jsp'
}

// 함수에 인터페이스 활용 
// 함수의 인자를 정의하는 인터페이스
function getUser(user: User){
    console.log(user);
}

const capt = {
    name: 'captin',
    age:15
}
getUser(capt);

// 함수에 구조를 정의하는 인터페이스 
interface SumFunction {
    (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a: number,b: number): number {
    return a + b;
}

// 인덱싱 
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a','b','c'];
// arr[0] // a

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp
}

var obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
Object.keys(obj).forEach(function(value){

})


// 인터페이스 확장 ( 상속)
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    // name: string;
    // age: number;
    language: string;
}

var capt2: Developer = {
    language: 'hi',
    age: 100,
    name: 'capt'
}