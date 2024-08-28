function solution(n) {
    const primeFactors = [];
    let divisor = 2;

    while (n > 1) {
        if (n % divisor === 0) {
            if (!primeFactors.includes(divisor)) {
                primeFactors.push(divisor);
            }
            n /= divisor;
        } else {
            divisor++;
        }
    }

    return primeFactors;
}
