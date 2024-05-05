/**
 * Problem : We have given an string s1, Write a function to check if string is palindrom or not.
 * return true if string is palindrom, otherwise return false
 * Example:
 *     i/p: str = "abba"
 *     o/pu: true
 */


function checkStringIsPalindrom(s:string):boolean {
    let firstPointer = 0;
    let seconPointer = s.length-1;
    while(firstPointer < seconPointer) {
        if(s[firstPointer] !== s[seconPointer]) {
            return false;
        }
        firstPointer++;
        seconPointer--;
        if(firstPointer > seconPointer) {
            return true;
        }
    }
    return true;
}
const stringcar = "abba";
console.log(checkStringIsPalindrom(stringcar));