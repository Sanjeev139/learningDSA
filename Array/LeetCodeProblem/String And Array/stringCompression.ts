/**
 * 
 */

function stringCompresson(chars: string[]) : string[] {
    if(chars.length == 1) {
        return chars;
    }
    let firstPonter = 0;
    let secondPointer = 1;
    let count = 1
    let index = 0;
    while(secondPointer < chars.length) {
        if(chars[firstPonter] == chars[secondPointer]) {
            count++;
            secondPointer++
        } else {
            chars[index] = chars[firstPonter];
            if(count > 1) {
                chars[index+1] = String(count);
            } else {
                index--;
            }
            index = index+2;
            firstPonter = secondPointer;
            secondPointer = firstPonter+1;
            count = 1;
        }
    }
    chars[index] = chars[firstPonter];
    if(count > 1) {
        chars[index+1] = String(count);
    } else {
        index--;
    }
    chars.length = index+2
    console.log(chars.length);
    return chars;
}
var chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
console.log(stringCompresson(chars))