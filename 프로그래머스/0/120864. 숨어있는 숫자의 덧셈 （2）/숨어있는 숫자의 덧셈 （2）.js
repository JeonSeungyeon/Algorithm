function solution(my_string) {
    numbers = my_string.match(/\d+/g)
    if(!numbers) return 0
    return numbers.reduce((a, c) => a += Number(c), 0)
}