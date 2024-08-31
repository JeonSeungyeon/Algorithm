function solution(my_string) {
    const counts = new Array(52).fill(0);

    for (let char of my_string) {
        const charCode = char.charCodeAt(0);
        
        if (charCode >= 65 && charCode <= 90) {
            counts[charCode - 65] += 1;
        } else if (charCode >= 97 && charCode <= 122) {
            counts[charCode - 97 + 26] += 1;
        }
    }

    return counts;
}
