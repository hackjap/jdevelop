/** [연산자를 이용한 타입정의 ]

/**
 *  유니온 타입
 *  value: string | number
 */

// function logMessage(value: any){
//     console.log(value);
// }


// logMessage('hello');
// logMessage(100);

var seho: string | number | boolean;

function logMessage(value: string | number){
    if (typeof value === 'number') {
        value.toLocaleString()
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number')
}

logMessage('hello');
logMessage(100);

interface Developer {
    name: string
    skill: string
}

interface Person {
    name: string
    age: number
}

function askSomeone(someone: Developer | Person) {
    // 공통 속성만 접근 가능(Type Safe x)
    someone.name;
    // someone.age
    // someone.skill
}

askSomeone({name:'developer', skill: 'web'})
askSomeone({name: 'capt', age: 100})

/**
 * 인터섹션
 * value: Developer & Person
 */

function askSomeone(someone: Developer & Person) {
    // 공통 속성만 접근 가능(Type Safe x)
    someone.name;
    someone.age
    someone.skill
}



var seho: string | number | boolean;
var capt: string & number & boolean;