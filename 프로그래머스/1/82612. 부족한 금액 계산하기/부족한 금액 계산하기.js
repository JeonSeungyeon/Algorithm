function solution(price, money, count) {
    const t = (count * (count + 1) / 2) * price
    const m = t - money
    return m > 0 ? m : 0
}