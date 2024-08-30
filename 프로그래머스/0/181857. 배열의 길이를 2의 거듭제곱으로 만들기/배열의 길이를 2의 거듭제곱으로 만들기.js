function solution(arr) {
    var answer = arr;
    while(!((answer.length & (answer.length - 1)) == 0)) {
        answer.push(0)
    }
    return answer;
}