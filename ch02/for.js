// 3. for
// for 문은 자바스크립트의 대표적인 반복문

for (initialize; test; increment) {
    statement;
}

// initialize, test, increment는 세미콜론으로 구분하며 각각 루프 변수의 초기화, 테스트, 증감을 담당합니다.
// 이 요소들은 루프의 첫 번째 행에 모음으로써 for 루프가 무엇을 하는지 이해하기 쉽고,
// 루프 변수의 초기화나 증감을 잊어버리는 실수를 방지할 수 있다는 편리함이 있습니다.
// while 문과 비교해볼까요?

initialize;
while (test) {
    statment;
    increment;
}

for (let count = 0; count < 10; count++) {
    console.log(count);
}

// 예제 테스트의 루프 변수를 모두 숫자로 테스트해보았지만, 루프 변수는 대부분 숫자를 사용하지만 꼭 그래야하는 것은 아닙니다.
