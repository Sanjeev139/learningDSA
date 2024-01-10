/**
 * Problem : We need to insert an element into an array at specific position
 * ex:
 * I/p array = [1,5,21,8,15,6,_,_]
 * pos = 2
 * value = 10
 * We need to add value 10 into the given array at position 2
 * O/P array = [1,10,5,21,8,15,6]
 */

function insertElementIntoArray(arr:number[], pos:number, length:number, value:number,capacity:number): number | number[] {
    // console.log(arr)
    if (length == capacity) {
        return length;
    }
    let idex = pos-1
    for(let index = length-1; index >= 0; index--) {
        arr[index+1] = arr[index]
    }
    arr[idex] = value;
    return arr;
}
let arr = [1,5,21,8,15,6]
console.log(insertElementIntoArray(arr,2,6,10,7));
