function solution(num_str) {
    return num_str.split('').reduce((acc, char) => acc + Number(char), 0);
}