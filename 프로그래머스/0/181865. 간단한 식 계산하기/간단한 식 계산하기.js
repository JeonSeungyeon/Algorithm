function solution(binomial) {
    const [o1, o2, o3] = binomial.split(' ')
    const n1 = Number(o1)
    const n2 = Number(o3)
    
    switch (o2) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        default:
    }
}