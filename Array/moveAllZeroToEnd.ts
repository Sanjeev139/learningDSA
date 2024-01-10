/**
 * Problem : We have an array which contains number along with zero,
 * we need to move all the zeros to the end of the array
 * Example:
 * I/p array = [2,9,0,4,7,0,16]
 * O/p array = [2,9,4,7,16,0,0]
 * 
 * Example-2
 *   Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]

 */
function moveAllZeroToEnd(arr:number[],length:number) : number[] {
    let jIndex = 0
    for (let index = 0; index <= length-1; index ++) {
        if(arr[index] != 0) {
            swap(arr, jIndex, index)
            jIndex++
        }
    }

    return arr;
}

function swap(arr:number[], jindex: number, index:number) : number[] {
    let temp = arr[jindex]
    arr[jindex] = arr[index]
    arr[index] = temp;
    return arr;
}

let arr1 = [0,1,0,3,12];
console.log(moveAllZeroToEnd(arr1, 5))