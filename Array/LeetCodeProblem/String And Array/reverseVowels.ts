/**
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once
 * Example-1:
 *    Input: s = "hello"
 *     Output: "holle" 
 * Example-2:
 *     Input: s = "leetcode"
 *     Output: "leotcede"
 * 
 */

function reverseVowels(str: string) : string {
    let newStr : string = '';
    let splitArr = str.split("");
    let vowels = ["a","e","i","o","u","A","E","I","O","U"];
    let firstPointer = 0;
    let secondPointer = splitArr.length-1;
    while (firstPointer < secondPointer) {
        
        if (!vowels.includes(splitArr[firstPointer])) {
            firstPointer++;
            continue;
        }
        if(!vowels.includes(splitArr[secondPointer])) {
            secondPointer--;
            continue;
        }
        let temp = splitArr[firstPointer];
        splitArr[firstPointer] = splitArr[secondPointer];
        splitArr[secondPointer] = temp;
        firstPointer++;
        secondPointer--;
    }
    newStr = (splitArr).join("");
    return newStr;
}
console.log(reverseVowels("leetcode"));