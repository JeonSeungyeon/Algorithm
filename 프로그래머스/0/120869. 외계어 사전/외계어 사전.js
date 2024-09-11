function solution(spell, dic) {
    const sorted = spell.sort().join('')
    
    for(w of dic) {
        if(w.split('').sort().join('') == sorted) {
            return 1
        }
    }
    return 2
}