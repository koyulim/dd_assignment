// 사용자의 이름과 나이를 입력받아 배열로 저장하는 프로그램을 자바스크립트로 작성합니다. 
// 입력받은 이름과 나이를 순서대로 출력하고, 각 사용자들의 나이의 평균을 계산한 값을 출력해봅니다. 
// 결과물로 프로그램 실행 결과의 스크린샷을 제출합니다.

const list = [];
const count = parseInt(prompt("몇 명의 정보를 입력하시겠습니까?"), 10);

for (let i = 0; i < count; i++) {
    let name = prompt(`이름`);
    let age = parseInt(prompt(`사용자 나이`), 10);
    list.push({name, age});
}

console.log(`사용자 정보`);
list.forEach((user, index) => {
    console.log(`${index + 1}. 이름 : ${user.name}, 나이 : ${user.age}`);
});

const avge = list.reduce((sum, user) => sum + user.age, 0) / list.length;
console.log(`사용자 평균 나이 : ${avge.toFixed(2)}`);