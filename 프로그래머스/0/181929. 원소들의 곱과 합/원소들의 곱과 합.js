function solution(num_list) {
    var m = num_list.reduce((a, c) => a * c)
    var p = num_list.reduce((a, c) => a + c)

    return m < p * p ? 1 : 0;
}