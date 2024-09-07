function solution(arr, k) {
    let result = []
    let seen = new Set()
    
    for(let num of arr) {
        if(!seen.has(num)) {
            result.push(num)
            seen.add(num)
        }
        if(result.length === k) {
            break
        }
    }
    
    while(result.length < k) {
        result.push(-1)
    } 
    return result
}