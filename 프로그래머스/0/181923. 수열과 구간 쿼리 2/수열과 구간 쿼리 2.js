function solution(arr, queries) {
    let result = []
    
    for(let [s, e, k] of queries) {
        let minVal = Infinity
        
        for(let i = s; i <= e; i++) {
            if(arr[i] > k && arr[i] < minVal) {
                minVal = arr[i]
            }
        }
        result.push(minVal == Infinity ? -1 : minVal)
    }
    return result
}