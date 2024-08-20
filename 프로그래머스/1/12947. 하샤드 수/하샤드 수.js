function solution(x) {    
    let sum = x.toString().split('').reduce((a, c) => a + Number(c), 0)
    return x % sum == 0 ? true : false
}