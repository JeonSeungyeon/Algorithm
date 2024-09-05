function solution(arr) {
    let x = 0
    let isChanged = true
    
    while(isChanged) {
        isChanged = false
        
        for(i = 0; i < arr.length; i++) {
            const num = arr[i]
            if(num >= 50 && num % 2 == 0) {
                arr[i] = num / 2
                isChanged = true
            } else if(num < 50 && num % 2 !== 0) {
                arr[i] = num * 2 + 1
                isChanged = true
            }
        }
        
        if(!isChanged) break
        
        x++
    }
    return x
}