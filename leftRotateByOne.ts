/**
 * Input = [12,4,5,54,1,7]
 * output = [4,5,54,1,7,12]
 * 
 * function removeDuplicate(arr:number[]) : number | number[] {
 */


function letftRotateByOne(arr1:number[]) : number[] {

    let temp = arr1[0];

    for(let index=1; index < arr1.length; index++) {
        arr1[index-1] = arr1[index];
    }
    arr1[arr1.length-1] = temp;

    return arr1;
}
const tttttt = [12,4,5,54,1,7];
console.log(letftRotateByOne(tttttt));