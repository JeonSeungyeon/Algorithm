function solution(i, j, k) {
    var answer = 0;
    for (let a = i; a <= j; a++) {
        answer += a.toString().split('').filter(e => e == k.toString()).length;
    }
    return answer;
}
