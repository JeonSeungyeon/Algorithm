function solution(arr, queries) {
    for(i = 0; i < queries.length; i++) {
        let [s, e] = queries[i]
        for(j = s; j <= e; j++) {
            arr[j] += 1
        }
    }
    return arr;
}