/**
 * Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
 * You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
 *  Example 1:
 *  Input: nums = [1,2,0]
 *  Output: 3
 *  Explanation: The numbers in the range [1,2] are all in the array.
 * 
 * Example 2:
 * Input: nums = [3,4,-1,1]
 * Output: 2
 * Explanation: 1 is in the array but 2 is missing.
 * 
 * Example 3:
 * Input: nums = [7,8,9,11,12]
 * Output: 1
 * Explanation: The smallest positive integer 1 is missing
 */

function firstMissingPositive(nums:number[]) : number {
    let sortedArr = nums.sort((a,b) => {return a-b});
    let minimumPositiveNumber = 1;
    for(let index=0; index<sortedArr.length; index++) {
        if(sortedArr[index] == minimumPositiveNumber) {
            minimumPositiveNumber++;
        }
    }
    return minimumPositiveNumber;
}

const missinArr = [1,2,3,4,5,6,7,8,9,10,11,12,23,20];
console.log(firstMissingPositive(missinArr));