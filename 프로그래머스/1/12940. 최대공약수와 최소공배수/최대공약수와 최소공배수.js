function gcd(a, b) {
    while(b != 0) {
        let temp = b
        b = a % b
        a = temp
    }
    return a
}

function solution(n, m) {
    const gcdValue = gcd(n, m)
    const lcmValue = (n * m) / gcdValue
    return [gcdValue, lcmValue]
}