function solution(myString) {
    var answer = [];
    var count = 0;
    for(var i = 0 ; i < myString.length ; i++) {
        if(myString[i] == "x") {
            answer.push(count);
            count = 0;
        } else {
            count++;
        }
    }
    answer.push(count);
    return answer;
}
