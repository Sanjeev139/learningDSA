 /**
  * Problem Statement : We need to reverse the given array
  * Example :
  *     I/P = [1,5,18,3,8]
  *     o/p = [8,3,1,8,5,1]
  */
 
 function reversearray(arr:number[]) : number[] {
    let low = 0;
    let high = arr.length-1
    while(low < high) {
        let temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
        low++;
        high--
    }
    return arr;
 }

 var arr = [1,5,18,3,8]
 console.log(reversearray(arr))