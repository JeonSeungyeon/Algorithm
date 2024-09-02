function solution(a, d, included) {
    var answer = 0;
    arr = [3]
    for(i = 0; i < included.length; i++) {
        included[i] ? answer += a + (d * i) : 0
    }
    return answer;
}