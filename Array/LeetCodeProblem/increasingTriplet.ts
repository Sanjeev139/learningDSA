/**
 * Problem Statement : Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. 
 * If no such indices exists, return false.
 * 
 * Example 1:
 *     Input: nums = [1,2,3,4,5]
 *     Output: true
 *     Explanation: Any triplet where i < j < k is valid.
 * 
 * Exmaple 2:
 *     Input: nums = [5,4,3,2,1]
 *     Output: false
 *     Explanation: No triplet exists.
 */

function increasingtriplet(nums:number[]) : boolean {
    let num_i = Infinity , num_j = Infinity;
    for (let index = 0; index < nums.length; index++) {
        if(nums[index] < num_i) {
            num_i = nums[index];
        } else if(nums[index] < num_j) {
            num_j = nums[index];
        } else {
            return true;
        }
    }
    return false;
}
var arr = [5,4,3,2,1]
console.log(increasingtriplet(arr))