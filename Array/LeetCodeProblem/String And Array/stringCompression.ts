/**
 * 
 * 
 */

function stringCompresson(chars: string[]): number {
    let firstPointer = 0;
    let writeIndex = 0;
    while(firstPointer < chars.length) {
        let char = chars[firstPointer];
        let count = 0;
        while(chars[firstPointer] == char) {
            firstPointer++;
            count++;
        }
        chars[writeIndex] = char;
        writeIndex++;
        if(count > 1) {
            let countStr = count.toString();
            for(let index=0; index<countStr.length; index++) {
                chars[writeIndex] = countStr[index];
                writeIndex++;
            }
        }
    }
    return writeIndex;
};
var chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
console.log(stringCompresson(chars))