/**
 * Problem : You're give a string and you need to return the index of fist leftmost repeated string.
 * 
 * Example:
 *     I/p: "abccbd"
 *     O/p: 1
 */
function letmostRepeatedChar(s:string) : number {
    let count:number[] = new Array(256).fill(0);
    //count[0] = 0;
    for(let index=0; index<s.length; index++) {
        count[s.charCodeAt(index)]++;
    }
    for(let index=0; index<s.length; index++) {
        if(count[s.charCodeAt(index)] > 1) {
            return index;
        }
    }
    return -1; 
}
const strtchar = "alccbdc";
console.log(letmostRepeatedChar(strtchar));