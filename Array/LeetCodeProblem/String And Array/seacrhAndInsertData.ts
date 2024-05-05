/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, 
 * return the index where it would be if it were inserted in order.
 * 
 * Example :
 *     I/P: nums = [1,3,5,6], target = 5
 *     o/P: 2
 *     I/p: nums = [1,3,5,6], target = 2
 *     O/p = 1
 */

function searchAndInsert(arr:number[], target:number) {
    let mid = Math.round(arr.length/2);
    if(arr[mid] == target) {
        return mid;
    }
    if(target==0) {
        return 0;
    }
    if(arr.length == 1) {
        if(arr[0] > target) {
            return 0;
        } else if(arr[0] < target){
            return 1;
        } else {
            return 0;
        }
    }
    if(target < arr[mid]) {
        for(let index=0; index<mid; index++) {
            if(arr[index] == target) {
                return index;
            }
            if(arr[index] > target) {
                arr[index] = target;
                return index;
            } else if (arr[index] < target && arr[arr.length-1] > target){
                arr[arr.length-1] = target;
                return arr.length-1;
            } else {
                return arr.length;
            }
        }

    }
    if(target > arr[mid]) {
        for(let index=mid; index<arr.length; index++) {
            if(arr[index] == target) {
                return index;
            }
            if(arr[index] < target && arr[arr.length-1] > target) {
                arr[index+1] = target;
                return index+1;
            } else {
                return arr.length;
            }
        }

    }
}
const data2 = [1,3,5,6]
console.log(searchAndInsert(data2,2))