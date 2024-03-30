/**
 * Problem Statement :
 *     We have an array which contains duplicate number, we need to remove the duplicate number from an array
 *     And return the array and newly array size
 * 
 * Example :
 *     I/P = [10,20,20,30,30,30]
 *     o/p: [10,20,30], length = 5
 */

function removeDuplicate(arr:number[]) : number | number[] {
    var res = 1;
    for(let index=1; index < arr.length; index++) {
        if(arr[index] != arr[res-1]) {
            arr[res] = arr[index]
            res++
        }
    }
    return arr
}
var arr = [10,20,20,30,30,30];
console.log(removeDuplicate(arr))