function solution(n) {
    var answer = [[]];
    for(i = 0 ; i < n ; i++) {
        answer[i] = [];
        for(j = 0 ; j < n ; j++) {
            answer[i].push(i == j ? 1 : 0);
        }
    }
    return answer;
}