function solution(age) {
    var ageStr = age.toString();
    var answer = [];
    
    for (var i = 0; i < ageStr.length; i++) {
        answer.push(String.fromCharCode(ageStr[i].charCodeAt(0) + 49));
    }
    
    return answer.join('');
}