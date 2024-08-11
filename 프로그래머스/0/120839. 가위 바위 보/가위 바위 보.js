function solution(rsp) {
    let answer = '';
    let arr = rsp.split('');

    for(let i = 0; i < arr.length ; i++) {
        switch (arr[i]) {
            case '2':
                answer += '0';
                break;
            case '0':
                answer += '5';
                break;
            case '5':
                answer += '2';
                break;
            default:
        }
    }
    return answer;
}
