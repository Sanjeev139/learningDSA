/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
 * The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 * Example:
 *     I/p: [3,2,2,3]
 *     val = 3
 *     O/p: [2,2]
 */
function removeElement(arr:number[], val:number) : number {
    let firstPointer = 0;
    let outputArr : number[] = [];
    for(let index=0; index<arr.length; index++) {
        if(arr[index] != val) {
            arr[firstPointer] = arr[index]; // [2]
            firstPointer++; // 1
            outputArr.push(arr[firstPointer]);
        }
    }
    return outputArr.length;
}
const arrw = [0,1,2,2,3,0,4,2];
console.log(removeElement(arrw,2))