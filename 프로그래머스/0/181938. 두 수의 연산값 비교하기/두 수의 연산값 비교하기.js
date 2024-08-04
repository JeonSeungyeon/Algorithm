function solution(a, b) {
    let c = Number(a.toString() + b);
    return c >= 2 * a * b ? c : 2 * a * b;
}