function solution(left, right) {
    var answer = 0
    for(i = left; i <= right; i++) {
        let count = 0
        for (j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                count++
                if (j !== i / j) {
                    count++
                }
            }
        }
        count % 2 == 0 ? answer += i : answer -= i
    }
    return answer
}