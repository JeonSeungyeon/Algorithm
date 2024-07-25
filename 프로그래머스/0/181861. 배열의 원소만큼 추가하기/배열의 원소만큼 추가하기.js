function solution(arr) {
    var answer = [];
    arr.forEach(a => {
        for (let i = 0; i < a; i++) {
            answer.push(a);
        }
    });
    return answer;
}