function solution(my_string) {
    const arr = my_string.split(' ');
    let result = Number(arr[0]);

    for (let i = 1; i < arr.length; i += 2) {
        const operator = arr[i];
        const number = Number(arr[i + 1]);

        if (operator === '+') {
            result += number;
        } else if (operator === '-') {
            result -= number;
        }
    }

    return result;
}