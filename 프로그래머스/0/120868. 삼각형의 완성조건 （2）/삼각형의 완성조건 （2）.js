function solution(sides) {
    sides.sort((a, b) => a - b)
    const [a, b] = sides
    return (a + b) - (b - a) - 1
}