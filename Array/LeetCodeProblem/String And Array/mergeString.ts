/**
 * Problem : 
 *     You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, 
 *     starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
 * Example :
 *     input : word1 = "abc", word2 = "pqr"
 *     output : apbqcr
 *     Explanation: The merged string will be merged as so:
        word1:  a   b   c
        word2:    p   q   r
        merged: a p b q c r
 * 
 *     input: word1 = "ab", word2 = "pqrs"
 *     output = apbqrs
 *     Explanation: Notice that as word2 is longer, "rs" is appended to the end.
        word1:  a   b 
        word2:    p   q   r   s
        merged: a p b q   r   s
 *     
 */

function margeAlternately(word1:string, word2:string) : string {
    let mergeString : string = "";
    let a = word1.split("");
    let b = word2.split("");
    for (let index = 0; index < word1.length || index < word2.length; index++) {
        if (index < word1.length) {
            mergeString += a[index];
        }
        if (index < word2.length) {
            mergeString += b[index];
        }
    }
    return mergeString
}
console.log(margeAlternately("abcd","pq"));