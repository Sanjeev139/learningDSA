/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
 * The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
 * Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
 * Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. 
 * The remaining elements of nums are not important as well as the size of nums.
 * Return k.
 * 
 * Example :
 *     I/p = [1,1,2]
 *     O/p = 2, [1,2,_]
 */
function removeDuplicatesFromSortedArray(nums: number[]): number {
    let res = 1;
    for(let index=1; index < nums.length; index++) {
        if(nums[index] != nums[res-1]) {
            nums[res] = nums[index]
            res++
        }
    }
    return res;
};
const nums = [0,0,0,1,1,3]
console.log(removeDuplicatesFromSortedArray(nums));