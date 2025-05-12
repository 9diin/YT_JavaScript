// 2. 배열 요소 읽기와 쓰기
// 배열 요소에 접근할 때는 [] 연산자를 사용합니다.
// 대괄호 왼쪽에는 배열 참조가 있어야 합니다.
// 대괄호 안에는 양의 정수로 평가되는 표현식이 있어야 합니다.

let a = ["world"]; // 요소가 하나 있는 배열
let value = a[0]; // 인덱스 0을 읽습니다.
a[1] = 3.14; // 인덱스 1에 씁니다.

let i = 2;
a[i] = 3; // 인덱스 2에 씁니다.
a[i + 1] = "hello"; // 인덱스 3에 씁니다.
a[a[i]] = a[0]; // 인덱스 0과 2를 읽은 다음, 인덱스 3에 씁니다.

let b = [true, false]; // 이 배열은 인덱스 0과 1에 요소가 있습니다.
a[2]; // => undefined; 이 인덱스에는 요소가 없습니다.
a[-1]; // => undefined; 이런 이름의 프로퍼티는 없습니다.

// 3. 성긴 배열
// 성긴 배열은 인덱스가 연속적이지 않은 배열입니다.
// 일반적으로 배열의 length 프로퍼티는 배열에 포함된 요소의 개수입니다.
// 하지만 성긴 배열의 경우, length 프로퍼티의 값의 요소 개수보다 큽니다.

let c = new Array(5); // 요소가 없지만 a.length는 5입니다.
a = []; // 요소가 없고 length가 0인 배열
a[1000] = 0; // 요소는 하나를 추가하지만 길이는 1001로 만드는 할당

let a1 = [,]; // 이 배열은 요소가 없고 길이는 1입니다.
let a2 = [undefined]; // 이 배열에는 undefined 요소가 하나 있습니다.
0 in a1; // => false; a1은 인덱스 0에 요소가 없습니다.
0 in a2; // => true; a2는 인덱스 0에 undefined 값이 있습니다.

// 배열 길이
// [].length => 0; 배열에 요소가 없습니다.
// ["a", "b", "c"].length => 3; 가장 큰 인덱스는 2이고 길이는 3입니다.

a = [1, 2, 3, 4, 5];
a.length = 3; // a는 이제 [1, 2, 3] 입니다.
a.length = 0; // 요소 전체를 삭제합니다. a는 [] 입니다.
a.length = 5; // 길이는 5이지만, new Array(5)와 마찬가지로 요소는 없습니다.

// 4. 배열 요소 추가와 삭제
let d = []; // 빈 배열로 시작합니다.
d[0] = "zero"; // 요소를 추가합니다.
d[1] = "one";

let e = []; // 빈 배열로 시작합니다.
e.push("zero"); // 마지막에 값을 추가합니다. e = ["zero"]
e.push("one", "two"); // 값을 두 개 더 추가합니다. e = ["zero", "one", "two"]

// push()는 a[a.length]에 값을 할당하는 것과 같습니다.

// 5. 배열 순회
let letters = [..."Hello world"];
let string = "";

for (let letter of letters) {
    string += letter;
}
string;

console.log(string); // => "Hello world"; 원래 텍스트를 다시 만들었습니다.

let everyother = "";
for (let [index, letter] of letters.entries()) {
    if (index % 2 === 0) everyother += letter; // 짝수 번째 인덱스의 글자
}
everyother; // => "Hlowrd"

// forEach()도 배열을 순회하는 좋은 방법입니다.
// 이 메서드는 for 루프의 변형이 아니라 배열 순회를 함수형으로 바꾼 배열 메서드입니다.
// forEach()는 전달받은 함수를 각 배열 요소에서 호출합니다.

let uppercase = "";
letters.forEach((letter) => {
    // 화살표 함수 문법을 썼습니다.
    uppercase += letter.toUpperCase();
});
console.log(uppercase); // => "HELLO WORLD"

// forEach()는 배열을 순서대로 순회하며 배열 인덱스를 함수의 두 번째 인자로 전달합니다.
// for-of 루프와 달리 forEach()는 성긴 배열을 인식하고 존재하지 않는 요소에 대해서는 함수를 호출하지 않습니다.

let test1 = [1, 2, 3];
delete test1[1];

console.log("delete 메서드가 동작한 직후, test: ", test1); // [1, 비어있음, 3]
console.log("test1 배열의 길이: ", test1.length); // 3
test1.forEach((item) => console.log(item));

let test2 = [1, 2, 3];
test2[1] = undefined;

test2.forEach((item) => console.log(item));
console.log("test2 배열의 길이: ", test2.length); // 3
