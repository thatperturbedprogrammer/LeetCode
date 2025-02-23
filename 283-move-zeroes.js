/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let insertPosition = 0;  // Pointer to place the non-zero elements

    // fill array with non-zero elements
    for(let num of nums){
        if(num !== 0){
            nums[insertPosition] = num;
            insertPosition++;
        }
    }
    
    // fill remaining places with 0s
    for(let i=insertPosition; i<nums.length; i++){
        nums[i] = 0;
    }
    return nums;
}

moveZeroes([0,1,0,3,12])
