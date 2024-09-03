function solution(intStrs, k, s, l) {
    var answer = [];
    for(i = 0; i < intStrs.length; i++) {
        a = intStrs[i].slice(s, s+l) 
        a > k ? answer.push(Number(a)) : 0
    }
    return answer;
}