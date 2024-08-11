function solution(s1, s2) {
    var answer = 0;
    s2.forEach((c) => {
        if (s1.includes(c)) {
            answer++;
        }
    });
    return answer;
}