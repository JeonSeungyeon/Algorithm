function solution(start_num, end_num) {
    var answer = [];
    while(start_num != end_num - 1) {
        answer.push(start_num--)
    }
    return answer;
}