function solution(s) {
    const length = s.length;
    const middle = Math.floor(length / 2);
    return length % 2 == 0 ? s.slice(middle - 1, middle + 1) : s.charAt(middle)
}