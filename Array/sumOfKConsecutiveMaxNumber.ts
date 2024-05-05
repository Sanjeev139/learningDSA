/**
 * Problem Statement
 * I/p = [2,4,6,1,7,8]
 * k = 3,
 * O/P = Find the maximum sum of k consecutive elements =  16
 */

function findKConsecutiveMax(arr:number[], k:number) : number {
    let current = 0;
    for(let index = 0; index < k; index++) {
        current += arr[index]
    }
    let res = current;
    for(let index=k; index < arr.length; index++) {
        current = current + arr[index] - arr[index-k];
        res = max(res, current);
    }
    return res;
}
function max(res:number, current:number) : number {
    if(res > current) {
        return res;
    } else {
        return current;
    }
}
const data1 = [2,4,6,1,7,8];
console.log(findKConsecutiveMax(data1,3))