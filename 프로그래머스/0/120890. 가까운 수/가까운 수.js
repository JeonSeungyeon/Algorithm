function solution(array, n) {
    let closest = array[0]; // 초기값으로 첫 번째 요소를 설정

    array.forEach(e => {
        const diff = Math.abs(n - e);
        const closestDiff = Math.abs(n - closest);

        if (diff < closestDiff || (diff === closestDiff && e < closest)) {
            closest = e;
        }
    });

    return closest;
}