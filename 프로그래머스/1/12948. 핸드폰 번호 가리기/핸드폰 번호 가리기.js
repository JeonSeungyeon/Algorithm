function solution(phone_number) {
    pn = phone_number.split('')
    for(i = 0; i < pn.length - 4 ; i++) {
        pn[i] = '*';
    }
    return pn.join('')
}