function solution(myString) {
    let parts = myString.split("x")
    return parts.filter(part => part !== "").sort();
}