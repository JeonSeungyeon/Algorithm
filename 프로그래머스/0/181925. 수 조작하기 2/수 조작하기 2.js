function solution(numLog) {
       const m = { 
           1: 'w',
           '-1': 's',
           10: 'd',
           '-10': 'a' 
       };
    return numLog.slice(1).map((num, i) => m[num - numLog[i]]).join('');
}