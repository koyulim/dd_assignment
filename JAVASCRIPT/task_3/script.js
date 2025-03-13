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