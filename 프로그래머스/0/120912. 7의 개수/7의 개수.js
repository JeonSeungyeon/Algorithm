function solution(array) {
   return array.reduce((acc, num) => 
        acc + num.toString().split('').filter(e => e === '7').length, 0
    )
}