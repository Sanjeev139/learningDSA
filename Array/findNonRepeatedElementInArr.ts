/**
 * Problem Statement : You have given and array where you have repeated number, you need to return an array which is never repeated
 * 
 * Example :
 *     I/p = [12,4,6,7,4,12,11,6]
 *     O/p = [7]
 */
function getNonRepeatedElementInArray(arr:number[]) : number | number[] {
    let result = 0;
    // for(let index=0; index<arr.length; index++) {
    //     //let count = 0;
    //     let jIndex
    //     for(jIndex=0; jIndex<arr.length; jIndex++) {
    //         if(arr[index] == arr[jIndex] && index != jIndex) {
    //             break;
    //         }
    //     }
    //     if(jIndex == arr.length) {
    //         return arr[index];
    //     }
    // }
    // return -1

    // // Using Bit Manipulation
    for(let index=0; index<arr.length; index++) {
        result ^= arr[index];
    }
    return result
}

const arraysss = [12,4,6,7,4,12,6];
console.log(getNonRepeatedElementInArray(arraysss))