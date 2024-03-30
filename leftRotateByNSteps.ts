function leftRotateByNSteps(arr:number[], step:number) {
    reverse(arr, 0, step-1);
    reverse(arr,step,arr.length-1);
    return reverse(arr,0,arr.length-1);
}

function reverse(arr:number[], low:number, high:number) {
    while(low<high) {
        let temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
        low++;
        high--
    }
    return arr;
}

const data = [1,2,3,4,5]
// [2,3,4,5,1], [3,4,5,1,2], [4,5,1,2,3]
console.log(leftRotateByNSteps(data,3))
