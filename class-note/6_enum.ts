/** [ 이넘(Enums) ]

/**
 *  1. 숫자형 이넘
 *  default
 */

enum Shoes {
    Nike,
    Adidas
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0


/**
 * 2. 문자형 이넘
 */

enum Shoes {
    Nike ='나이키',
    Adidas = '아디다스'
}

console.log(Shoes.Nike); // 나이키


/**
 * 이넘 활용 사례
 * 이넘타입을 통해 다양한 예외 케이스를 방지
 */

enum Shoes {
    Nike ='나이키',
    Adidas = '아디다스'
}

console.log(Shoes.Nike); // 나이키

enum Answer {
    Yes = 'Y',
    No = 'N',
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다');
    }
    if (answer === Answer.No) {
        console.log('오답입니다.');
    }
}

askQuestion(Answer.Yes);

// askQuestion('yes');
// askQuestion('y');
// askQuestion('예스');



