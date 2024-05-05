/**
 * Problem : You have given an array where you need to find the 2nd maximum from the array
 * Example
 *     I/p : [1,4,5,8,12,6,1,9]
 *     O/p : 9
 */
function getSecondMaximumFromArr(arr:number[]) : number {
    let firstMax = 0;
    let secondMax = 0;
    for(let index=0; index < arr.length; index++) {
        if(arr[index] > firstMax) { // 
            secondMax = firstMax; // secondMax = 0, 1, 4, 8
            firstMax = arr[index]; // firstMax = 1, 4, 8, 12
        } else if(arr[index] > secondMax && arr[index] != firstMax) {
            secondMax = arr[index]; // 5, 9
        }
    }
    return secondMax;
}
const examArr = [12,4,5,8,8,1,9];
console.log(getSecondMaximumFromArr(examArr));