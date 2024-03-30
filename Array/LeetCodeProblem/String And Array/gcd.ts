/**
 * Problem : For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 * 
 * Example 1:
 *     Input: str1 = "ABCABC", str2 = "ABC"
 *     Output = ABC
 * Example 2:
 *     Input: str1 = "ABABAB", str2 = "AB"
 *     Output = "AB"
 * 
 */

function gcdOfString(str1: string, str2: string) : string {
    if (str1 === str2) {
        return str1;
    }
    if (str2.length > str1.length) {
        return gcdOfString(str2, str1);
    }
    if (str1.startsWith(str2)) {
        return gcdOfString(str1.substring(str2.length), str2)
    }
    return "";
}
console.log(gcdOfString("ABC","ABCABC",));