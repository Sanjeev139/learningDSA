/**
 * Problem : You have given an array where you need to find the 2nd min from the array
 * Example
 *     I/p : [10,12,9,6]
 *     O/p : 9
 */
function secondMinFromArray(arr:number[]) : number {
    let firstMin = Infinity;
    let secondMin = Infinity;
    for(let index = 0; index < arr.length; index++) {
        if(arr[index] < firstMin) {
            secondMin = firstMin;
            firstMin = arr[index];
        } else if(arr[index] < secondMin && arr[index] != firstMin) {
            secondMin = arr[index]
        }
    }
    return secondMin;
}
const arrr = [10,12,9,6];
console.log(secondMinFromArray(arrr));