/**
 * Problem : Array is given, we need to rotate the array from kth index
 * Example :
 * I/P arr[] = [15,1,3,12,17,8,4,9]
 * K = 4
 * 
 * == Now rotate given array from kth index
 * 
 * O/p arr[] = [8,4,9,15,1,3,12,17]
 */

function rotateArrayFromKthIndex(arr:number[], value: number) : number[] {
    var tempArr : number[] = []
    for (let index = value+1; index <= arr.length-1; index++) {
        tempArr.push(arr[index])
    }
    for (let jindex = 0; jindex <= value; jindex++) {
        tempArr.push(arr[jindex])
    }
    return tempArr
}
let rotateArr = [-1,-100,3,99]
console.log(rotateArrayFromKthIndex(rotateArr, 2))
