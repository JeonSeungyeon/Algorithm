function solution(my_string, queries) {
    arr = my_string.split("")
    for(i = 0 ; i < queries.length ; i++) {
        let [s, e] = queries[i]
        while(s < e) {
            let temp = arr[s]
            arr[s] = arr[e]
            arr[e] = temp
            s++
            e--
        }
    }   
    return arr.join('')
}