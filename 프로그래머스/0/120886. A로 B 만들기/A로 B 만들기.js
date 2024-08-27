function solution(b, a) {
    return a.split('').sort().join('') == b.split('').sort().join('') ? 1 : 0
}