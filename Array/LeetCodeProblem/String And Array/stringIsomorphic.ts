/**
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters. 
 * No two characters may map to the same character, but a character may map to itself.

 * Example : s = "egg", t = "add"
    Output : true
 */

function isIsomorphic(s:string, t:string) : boolean {
    const obj : any = {};
    let seen = new Set();
    for(let index = 0; index < s.length; index++) {
        if(obj[s[index]]) {
            if(obj[s[index]] !== t[index]) {
                return false;
            }
        } else {
            if(seen.has(t[index])) {
                return false;
            }
            obj[s[index]] = t[index];
            seen.add(t[index]);
        }
    }
    return true;
}
console.log(isIsomorphic("badc", "baba"));