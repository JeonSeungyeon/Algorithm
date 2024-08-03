function solution(num_list) {
    const a = num_list.filter(number => number % 2 !== 0);
    const b = num_list.filter(number => number % 2 === 0);

    return Number(a.join('')) + Number(b.join(''));
}