function solution(num_list) {
    var even = num_list.reduce((a, c, i) => a + (i % 2 === 0 ? c : 0), 0);
    var odd = num_list.reduce((a, c, i) => a + (i % 2 !== 0 ? c : 0), 0);
    return even > odd ? even : odd;
}