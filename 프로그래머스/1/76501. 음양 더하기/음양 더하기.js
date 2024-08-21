function solution(a, s) {
    var answer = 0;
    for(i = 0 ; i < a.length ; i++) {
        s[i] == true ? answer += a[i] : answer -= a[i]
    }
    return answer;
}