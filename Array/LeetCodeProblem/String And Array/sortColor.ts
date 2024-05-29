/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, 
 * with the colors in the order red, white, and blue.
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 * You must solve this problem without using the library's sort function.
 * 
 * Example :
 *  Input : [2,0,2,1,1,0]
 *  Outout : [0,0,1,1,2,2]
 * 
 *  Input: [1,2,0,2,1,0,1,2,0],
 *  Output: [0,0,0,1,1,1,2,2,2]
 */

function sortColors(nums:number[]) : number[] {
    let firstPointer = 0;
    let secondPointer = nums.length-1;
    let mid = 0;
    while(mid <= secondPointer) {
        if(nums[mid] == 0) {
            swap(nums, firstPointer, mid);
            firstPointer++;
            mid++;
        } else if(nums[mid] == 1) {
            mid++;
        } else {
            swap(nums, mid, secondPointer);
            secondPointer--;
        }
    }
    return nums;
}

function swap(nums:number[], f: number, s:number) : number[] {
    let temp = nums[f];
    nums[f] = nums[s];
    nums[s] = temp;
    return nums;
}
const value1 = [1,0,0,0,1,0,1,0,0];
console.log(sortColors(value1));