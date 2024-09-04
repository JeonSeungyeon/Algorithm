function solution(arr, queries) {
    for(i = 0; i < queries.length; i++) {
        let [s, e] = queries[i]
        t = arr[s]
        arr[s] = arr[e]
        arr[e] = t
        
    }
    return arr
}