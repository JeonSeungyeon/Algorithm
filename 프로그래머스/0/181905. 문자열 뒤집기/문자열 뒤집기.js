function solution(str, s, e) {
    p1 = str.slice(0, s);
    p2 = str.slice(s, e + 1).split('').reverse().join('');
    p3 = str.slice(e + 1);
    return p1 + p2 + p3
}