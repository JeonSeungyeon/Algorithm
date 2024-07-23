function solution(array) {
    var answer = [];
    let max = array[0];
    let maxIndex = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            maxIndex = i;
        }
    }
    answer.push(max)
    answer.push(maxIndex)
    return answer;
}