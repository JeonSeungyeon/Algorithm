function solution(my_string, indices) {
    let arr = my_string.split('')
    
    indices.forEach(index => {
        arr[index] = ''
    })
    
    return arr.join('')
}