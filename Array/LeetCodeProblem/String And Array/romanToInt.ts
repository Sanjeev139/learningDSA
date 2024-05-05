/**
 * 
 */

function romanToInt(s:string) : number {
    let romanNumerals : any = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;
    for(let index = 0; index < s.length; index++) {
        let jIndex = index+1;
        let CurrentNumerals = romanNumerals[s[index]];
        let nextNumerals = romanNumerals[s[jIndex]]
        if(nextNumerals && CurrentNumerals < nextNumerals) {
            result += nextNumerals - CurrentNumerals;
            index++;
        } else {
            result += CurrentNumerals;
        }
    }
    return result;
} 
console.log(romanToInt("MCMXCIV"))