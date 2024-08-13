function solution(num, k) {
    arr = num.toString().split('')
    for(i = 0 ; i < arr.length ; i++) {
        if(arr[i] == k) {
            return i + 1
        }
    }
    return -1
}