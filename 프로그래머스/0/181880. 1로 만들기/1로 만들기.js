function solution(num_list) {
    answer = 0
    num_list.forEach((e) => {
        num = 0
        while(e !== 1) {
            num++
            e % 2 == 0 ? e = e/2 : e = (e - 1)/2
        }
        answer += num
    });
    return answer
}