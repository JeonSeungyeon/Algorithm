function solution(n) {
    let num = Math.sqrt(n);
    return num === Math.floor(num) ? (num + 1) * (num + 1) : -1;
}
