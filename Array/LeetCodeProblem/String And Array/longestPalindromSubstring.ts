/**
 * Given a string s, return the longest palindromic substring in s.
 * 
 * Example:
 *     i/p = "babad"
 *     o/p: "bab"
 */
function longestPalindrome(s:string) : string {

    let longest = "";

    const expandFromMiddle = (left:number, right:number) => {
        while(left >=0 && right < s.length && s[left] == s[right]) {
            left--;
            right++;
        }
        return s.slice(left+1, right);
    }
    for(let index=0; index<s.length; index++) {
        const left = expandFromMiddle(index, index);
        const right = expandFromMiddle(index, index+1);

        if(right.length > longest.length) {
            longest = right;
        }
        if(left.length > longest.length) {
            longest = left;
        }
    }
    return longest;
}
const stringdata = "babad";
console.log(longestPalindrome(stringdata));