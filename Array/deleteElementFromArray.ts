/**
 * Problem : we have an array, we need to delete the element from an array,
 * and after deleting the element we need to reduce the length of the array as well
 * For example:
 * I/P array : [1,12,5,6,9,15]
 * length of array is = 6
 * Deleted element should be = 5
 * 
 * O/P array : [1,12,6,9,15,_]
 * length of the array will be = 5
 * 
 */
function deleteElementFromArray(arr:number[], length: number, value: number) : number | number[] {
    for (var index = 0; index < length; index++) {
        if (arr[index] == value) {
            break;
        }
    }
    for(var jindex = index; jindex <= length-1; jindex++) {
        arr[jindex] = arr[jindex+1]
    }
    arr[length-1];
    return arr;
}
let arr2 =  [1,12,5,6,9,15];
console.log(deleteElementFromArray(arr2, 6, 5));