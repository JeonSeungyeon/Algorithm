function solution(hp) {
    var answer = 0;
    ant1 = Math.trunc(hp/5)
    ant2 = Math.trunc(hp%5/3)
    ant3 = Math.trunc(hp%5%3)
    answer = ant1 + ant2 + ant3
    return answer;
}