/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * Example 1:
 *     Input: nums = [1,2,3,4]
 *     Output: [24,12,8,6]
 * Example 2:
 *     Input: nums = [-1,1,0,-3,3]
 *     Output: [0,0,9,0,0]
 */

function productExpectSelf(nums:number[]) : number[] {

    let prefixArr : number[] = []
    prefixArr[0] = 1;
    let postFixArr : number[] = [];
    postFixArr[arr.length-1] = 1;
    let prodArr : number[] = [];

    for(let index = 1; index < arr.length; index++) {
        prefixArr[index] = nums[index-1] * prefixArr[index-1]
    }

    for(let index=arr.length-2; index >= 0; index--) {
        postFixArr[index] = nums[index+1] * postFixArr[index+1]
    }

    for(let index=0; index<arr.length; index++) {
        prodArr[index] = prefixArr[index] * postFixArr[index]
    }
    
    return prodArr;
}
var arr = [1,2,3,4]
console.log(productExpectSelf(arr))