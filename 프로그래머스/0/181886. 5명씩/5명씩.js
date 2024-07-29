function solution(names) {
    var answer = [];
    for(i = 0 ; i < names.length ; i++) {
        (i + 1)%5 == 1 ? answer.push(names[i]) : 0
    }
    return answer;
}