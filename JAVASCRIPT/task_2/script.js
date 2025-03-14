// 1부터 10까지의 숫자를 배열에 저장합니다. 
// 배열에서 push, pop, slice 등의 배열 메서드를 사용하여 값을 추가하고 삭제합니다. 
// 또한 문자열의 toUpperCase와 substring 같은 메서드를 사용해 간단한 문자열 조작을 연습합니다. 
// 결과물로 코드와 콘솔 출력 스크린샷을 제출합니다.

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`list : ${list}`);
console.log(`push : ${list.push(11)}`);
console.log(`list : ${list}`);
console.log(`pop : ${list.pop()}`);
console.log(`list : ${list}`);
console.log(`list.slice(1, 5) : ${list.slice(1, 5)}`);

console.log("");
const str = "stringList";
console.log(`string : ${str}`);
console.log(`toUpperCase : ${str.toUpperCase()}`);
console.log(`substring(6, 10) : ${str.substring(6, 10)}`);
