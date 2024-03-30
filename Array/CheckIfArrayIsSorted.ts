/**
 * Problem Statement : Given an array, you need to check if Array is sorted in ascending order
 * If Array is sorted in ascending order, return true, otherwise return false.
 * 
 * Example :
 *     I/P = [8,12,15,18,90]
 *     O/P = True
 * 
 *     I/P = [12,10,8,1]
 *     O/P = False
 * 
 *     I/P = [12,12,12,12]
 *     O/P = True
 */

function checkIfArrayIsSorted(arr:number[]) : boolean {
    let res : number = 0;
    let issorted : boolean = false;
    for(let index=1; index <= arr.length; index++) {
        if (arr[res] >  arr[index]) {
            issorted = false;
        } else {
            issorted = true;
        }
    }
    return issorted;
}
var arr = [12,12,12,12]
console.log(checkIfArrayIsSorted(arr))