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