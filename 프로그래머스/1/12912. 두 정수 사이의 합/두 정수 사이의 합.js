function solution(a, b) {
    let start = Math.min(a, b)
    let end = Math.max(a, b)
    let answer = 0;

    for (let i = start; i <= end; i++) {
        answer += i
    }

    return answer
}