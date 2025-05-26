// this
// 일반 함수의 this는 호출 위치에서 정의
// 화살표 함수의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의
// 렉시컬: 함수가 동작할수 있는 유효한 범위를 의미

// ✅ 일반 함수의 this는 "호출 위치"에 따라 결정된다.
// ✅ 화살표 함수의 this는 "선언 당시의 외부 스코프(this)"를 따른다.
// 🔍 렉시컬(Lexical): 코드가 선언된 "문법적 위치"를 기준으로 스코프가 정해지는 방식

const user = {
    firstName: "9Diin",
    lastName: "Park",
    age: 50,
    getFullName: function () {
        return `${user.firstName} | ${user.lastName}`;
    },
};
console.log(user.getFullName()); // 9Diin | Park

// getFullName에서 어떻게 user 내부의 프로퍼티에 접근할 수 있을까요?
// 이게 가능한 이유는 자바스크립트의 스코프 체인 덕분입니다.
// 자바스크립트에서 변수나 식별자를 찾을 때, 현재 스코프 -> 바로 바깥 스코프 -> 그 바깥 ... -> 전역 스코프 순서대로 찾아 나갑니다.
// 이 연결 구조가 마치 체인처럼 연결되어 있어서 '스코프 체인'이라고 부릅니다.

// user 객체는 함수 바깥에 선언되어 있어서 함수 안에서도 접근할 수 있는 거예요.
// 즉, 전역 혹은 바깥 블록에 선언된 이름을 함수 내부에서 참조하는 것은 문제 없이 됩니다.

// 그러나 이렇게 작성하는 건 위험할 수 있습니다.
// getFullName: function () {
//     return `${user.firstName} | ${user.lastName}`;
// },

// user 변수가 다른 객체로 바뀌거나, 아예 없어지면 코드가 깨질 수가 있기 때문입니다.

// const user2 = user;
// user = null;

// console.log(user2.getFullName()); // ❌ TypeError 발생

// 그래서 더 안전하고 일반적인 방식은?
// this 키워드를 사용하여 getFullName을 호출한 객체, 즉 user를 가리킵니다.
// 따라서 객체의 자기 자신의 프로퍼티를 참조하는 가장 안전하고 유연한 방법이에요.

const user3 = {
    firstName: "9Diin",
    lastName: "Park",
    age: 50,
    getFullName: function () {
        return `${this.firstName} | ${this.lastName}`;
    },
};
console.log(user3.getFullName()); // 9Diin | Park

function user4() {
    this.firstName = "홍";
    this.lastName = "길동";

    return {
        firstName: "9Diin",
        lastName: "Park",
        age: 32,
        getFullName: () => {
            return `${this.firstName} | ${this.lastName}`;
        },
    };
}

console.log(user4().getFullName()); // 홍 | 길동

// user4() 함수가 호출됩니다.
// 이 함수 안에서 this.firstName = "홍"; 으로 설정되므로,
// this는 user4 함수의 호출 주체를 가리킵니다.

// getFullName은 user4 함수 내부에서 화살표 함수로 정의 되었습니다.
// 그래서 this는 user4 함수의 this를 그대로 가리킵니다.

const timer = {
    title: "TIMER!",
    timeout() {
        console.log(this.title); // TIMER!
        setTimeout(function () {
            console.log(this.title); // undefined
        }, 1000);
        setTimeout(() => {
            console.log(this.title); // TIMER!
        }, 1000);
    },
};
timer.timeout();

// timer는 title이라는 프로퍼티와 timeout()이라는 메서드를 가진 객체입니다.
// 이때, timeout 함수는 객체의 메서드로 호출되므로, this는 timer 객체를 가리킵니다.

// 첫 번째 setTimeout 안의 콜백 함수는 일반 함수로 작성되어 있습니다.
// 일반 함수의 this는 "누가 호출했느냐"에 따라 결정됩니다.

// 두 번째 setTimeout 여기선 화살표 함수를 사용했기 때문에 this는 렉시컬 스코프에서 가져옵니다.
// 즉, 이 화살표 함수가 정의된 곳의 this는 timeout() 함수 내부 → this === timer
// 즉, 이 this는 화살표 함수가 정의된 위치, timeout() 함수 내부의 this를 따릅니다.
