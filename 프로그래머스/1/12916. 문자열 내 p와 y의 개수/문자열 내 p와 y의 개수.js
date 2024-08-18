function solution(s) {
    s = s.toLowerCase();
    
    var pLength = s.split('').filter(c => c === 'p').length;
    var yLength = s.split('').filter(c => c === 'y').length;
    
    return pLength === yLength;
}
