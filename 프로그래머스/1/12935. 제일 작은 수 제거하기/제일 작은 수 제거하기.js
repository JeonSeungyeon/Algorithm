function solution(arr) {
    const answer = arr.filter(value => value !== Math.min(...arr));
    return answer.length > 0 ? answer : [-1];
}
