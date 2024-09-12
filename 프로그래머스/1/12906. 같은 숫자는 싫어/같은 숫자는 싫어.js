function solution(arr) {
    return arr.filter((v, i) => {
        return i == 0 || v != arr[i - 1]
    })
}