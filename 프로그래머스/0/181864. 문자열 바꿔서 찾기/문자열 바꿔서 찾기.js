function solution(myString, pat) {
    return (myString.replace(/A/g, 'X').replace(/B/g, 'A').replace(/X/g, 'B').includes(pat) ? 1 : 0);
}