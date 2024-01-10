/**
 * Problem - We have one array, we need to roatate the array to right by k steps
 * Example - 1:
 * I/P array = [2,12,1,6,7]
 * K = 3
 * 1st step = [7,2,12,1,6]
 * 2nd step = [6,7,2,12,1]
 * 3rd step = [1,6,7,2,12]
 * Final output = [1,6,7,2,12]
 * 
 * Example-2
 * I/p array = [-1,-100,3,99]
 * K = 2
 * 1st step = [99,-1,-100,3]
 * 2nd step = [3,99,-1,-100]
 * Final output = [3,99,-1,-100]
 */

function rotateArrayToKSteps(arr:number[], steps:number) : number[] {
    let rotateArr : number[] = [];
    for(let index = steps-1; index < arr.length; index ++) {
        rotateArr.push(arr[index])
    }
    for(let jindex = 0; jindex < steps-1; jindex++) {
        rotateArr.push(arr[jindex])
    }
    return rotateArr;
}

let originalArr = [-1,-100,3,99]
console.log(rotateArrayToKSteps(originalArr,2))