function solution(price) {
    var rate = 0.0;
    
    if (price >= 500000) {
        rate = 0.20;
    } else if (price >= 300000) {
        rate = 0.10;
    } else if (price >= 100000) {
        rate = 0.05;
    } else {
        rate = 0.0;
    }
    
    return Math.floor(price - (price * rate));
}
