/**
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are 
 * (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * 
 * Notice that you may not slant the container.
 * 
 * 
 */
function maxAreaCalculate(height: number[]) : number {
    let firstPointer = 0;
    let secondPointer = height.length-1;
    let maxArea = 0;
    while(firstPointer < secondPointer) {
        let localArea = (secondPointer-firstPointer) * Math.min(height[firstPointer], height[secondPointer]);
        maxArea = Math.max(maxArea, localArea); // maxArea = 49
        if(height[firstPointer] < height[secondPointer]) {
            firstPointer++;
        } else {
            secondPointer--;
        }
    }
    return maxArea;
}

const heightArr = [1,8,6,2,5,4,8,3,7];
console.log(maxAreaCalculate(heightArr));