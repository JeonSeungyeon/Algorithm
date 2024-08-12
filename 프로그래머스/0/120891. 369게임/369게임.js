function solution(order) {
    const arr = order.toString().split('');
    return arr.reduce((a, c) => (['3', '6', '9'].includes(c) ? ++a : a), 0);
}
