function solution(my_string) {
    var arr = my_string.split('')
    arr = arr.filter(item => !isNaN(item) && item !== ' ')
    return arr.map(Number).sort()
}
