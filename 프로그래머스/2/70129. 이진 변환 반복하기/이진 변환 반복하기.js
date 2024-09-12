function solution(s) {
    let count = 0
    let zero = 0
    
    while(s != "1") {
        const removed = s.split('0').length - 1
        zero += removed
        s = s.replace(/0/g, '').length.toString(2)
        count++
    }
    return [count, zero]
}