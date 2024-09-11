function solution(picture, k) {
    let answer = []
    for(i = 0; i < picture.length; i++) {
        let row = picture[i].split('').map(char => char.repeat(k)).join('')
        
        for(j = 0; j < k; j++) {
            answer.push(row)
        }
    }
    return answer
}