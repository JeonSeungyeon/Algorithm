function solution(my_string, m, c) {
    arr = my_string.match(new RegExp('.{1,' + m + '}', 'g')) || []
    return arr.map(s => s.charAt(c-1)).join('')
}