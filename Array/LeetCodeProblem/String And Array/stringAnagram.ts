/**
 * Problem : Check if given two sting is anagram of each other or not.
 * Exmaple:
 *  Input : 
 *      str1: "abaac"
 *      str2: "aacba"
 * Output: true
 * 
 * Input:
 *      str1: "listen"
 *      str2: "silent"
 * Output: true
 * 
 * Input:
 *      str1: "abbss"
 *      str2: "absss"
 * Output: false
 */

function checkAnagram(str1: string, str2: string) : boolean {
    if(str1.length !== str2.length) {
        return false;
    }
    let sortedS1 = str1.split("").reverse().join("");
    let sortedS2 = str2.split("").reverse().join("");
    console.log(sortedS1 , "============", sortedS2);
    if(sortedS1 == sortedS2) {
        return true;
    }
    return false;
}
const str1 = "listen";
const str2 = "silent";
console.log(checkAnagram(str1, str2));
