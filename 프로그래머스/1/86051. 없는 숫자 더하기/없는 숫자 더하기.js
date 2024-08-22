function solution(numbers) {
    const a = Array.from({ length: 10 }, (_, i) => i);
    const b = a.filter(item => !numbers.includes(item));
    return b.reduce((acc, cur) => acc + cur, 0);
}