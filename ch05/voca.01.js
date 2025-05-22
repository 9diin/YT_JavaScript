/** 함수
 * 1. 함수 선언문(Declaration)
 * 2. 함수 표현식(Expression)
 */

/** 1. 함수 선언문(Declaration) */
// function fn() {}

/** 2. 함수 표현식(Expression) */
// const fn = function () {};

/** ---------------------------------------------------------------------------------------------------- */

/** 호이스팅(Hoisting)
 * 자바스크립트에서 함수 호이스팅(function hoisting)은 함수 선언이 해당 함수의 호출보다 먼저 평가되는 개념입니다.
 * 즉, 자바스크립트 엔진은 함수 선언을 코드의 실행 전에 끌어올려서 처리하기 때문에, 함수가 선언되기 전에 호출해도 에러가 발생하지 않습니다.
 * 따라서, 하단의 hello() 함수 호출의 코드가 함수 선언 이전에 작성되어도 작동하는 것이 바로 이 이유에서 입니다.
 *
 * 단, 함수 호이스팅 현상은 함수 선언문에서만 발생하고, 함수 표현문에서는 발생하지 않습니다.
 */

hello(); // hello, world!!
// fn(); // Cannot access 'fn' before initialization

function hello() {
    console.log("Hello, World!");
}

const fn = function () {
    console.log("Hello, World!");
};

/** 함수의 반환 및 종료 */
function hello() {
    return "Hello, World!";

    /** return 키워드 이후에 작성된 코드는 동작하지 않는다. */
}

function plusOne(num) {
    /** 방어 코드 작성 */
    if (typeof num === "number") {
        console.log("숫자를 입력해주세요.");
        return 0;
    }
    return num + 1;
}
console.log(plusOne(10)); // 11
console.log(plusOne()); // undefined + 1 -> NaN

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2)); // 3
console.log(sum(7)); // NaN

/** 매개변수 패턴(Parameter Pattern) */
/** 기본값(Default Value) */
function sum1(a, b = 1) {}
console.log(sum(1, 2)); // 3
console.log(sum(7)); // 8

/** 구조 분해 할당 */
const user = {
    name: "9Diin",
    age: 32,
};

function getName(user) {
    const { name } = user;
    return name;
    // return user.name;
}
function getName2({ name }) {
    return name;
}
function getEmail({ email = "이메일이 없습니다." }) {
    return email;
}
console.log(getName(user)); // 9Diin
console.log(getName2(user)); // 9Diin
console.log(getEmail(user)); // undefined

const fruits = ["Apple", "Banana", "Cherry"];
const numbers = [1, 2, 3, 4, 5];

function getSecondItem([a, b, c]) {
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("c: ", c);
}
console.log(getSecondItem(fruits));

/** 나머지 매개변수 */
function add(...rest) {
    console.log(rest);
    console.log(arguments); // 유사 배열(Array-Like) 배열 데이터는 아니기 때문에 활용도가 많이 떨어진다.
    /**
     * acc: 누적 값
     * cur: 현재 값
     */
    return rest.reduce(function (acc, cur) {
        return acc + cur;
    }, 0);
}

console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4)); // 10
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 45
