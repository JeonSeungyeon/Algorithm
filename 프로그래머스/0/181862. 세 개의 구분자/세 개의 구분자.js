function solution(myStr) {
    const splitStrings = myStr.split(/[abc]/);
    const filteredStrings = splitStrings.filter(str => str.length > 0);
    return filteredStrings.length > 0 ? filteredStrings : ['EMPTY'];
}