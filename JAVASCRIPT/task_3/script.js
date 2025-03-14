// if 문과 for 반복문을 사용하여 숫자 배열에서 짝수만 골라 출력하는 코드를 작성합니다. 
// 또한, for...of 문을 사용해 다른 배열을 순회하며 조건에 맞는 값을 필터링하는 연습도 추가합니다. 
// 결과물로 코드와 콘솔 출력 스크린샷을 제출합니다.

const lists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`list : ${lists}`);
console.log(`짝수만 출력`);
for (let list of lists) {
    if (list % 2 == 0) {
        console.log(list);
    }
}
console.log(`홀수만 출력`);
for (let list of lists) {
    if (list % 2 == 1) {
        console.log(list);
    }
}