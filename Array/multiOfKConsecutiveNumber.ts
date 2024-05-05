/**
 * Problem Statement
 * I/p = [2,4,6,1,7,8]
 * k = 3,
 * O/P = Find the maximum multiply of k consecutive elements =  56
 */

function maximumMultiply(arr:number[], k:number) : number {
    let current = 1;
    for(let index = 0; index < k; index++) {
        current *= arr[index];
    }
    let res = current;
    for(let index = k; index < arr.length; index++) {
        current = (current * arr[index]) / (arr[index-k])
        res = maxMulti(current, res)
    }
    return res;
}
function maxMulti(current:number, res:number) : number {
    if(current > res) {
        return current;
    } else {
        return res;
    }
}
const dataq = [2,4,6,1,7,8];
console.log(maximumMultiply(dataq,3))