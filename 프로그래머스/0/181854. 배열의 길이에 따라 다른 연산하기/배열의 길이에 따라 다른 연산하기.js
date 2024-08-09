function solution(arr, n) {
    if(arr.length % 2 == 0) {
        arr = arr.map((v, i) => i % 2 != 0 ? v + n : v);
    } else {
        arr = arr.map((v, i) => i % 2 == 0 ? v + n : v);
    }
    return arr;
}
