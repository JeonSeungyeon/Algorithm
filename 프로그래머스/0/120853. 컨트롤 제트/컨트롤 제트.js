function solution(s) {
    let arr = s.split(' ');
    let answer = 0;
    let temp = 0;

    for(let i = 0 ; i < arr.length ; i++) {
        if (arr[i] === 'Z') {
            answer -= temp;
        } else {
            temp = parseInt(arr[i]);
            answer += temp;
        }
    }
    return answer;
}