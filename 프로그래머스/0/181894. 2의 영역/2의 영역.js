function solution(arr) {
    first = arr.indexOf(2)
    second = arr.lastIndexOf(2)
    return first == -1 ? [-1] : arr.slice(first, second + 1)
}