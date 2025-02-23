/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // two pointer approach (only works with sorted array)
var twoSum = function(nums, target) {
    
    let pointer1 = 0;
    let pointer2 = nums.length - 1;

    let sum = 0;
    while(pointer1 <= pointer2){
        sum = nums[pointer1]+nums[pointer2];

        if(sum == target){
            return [pointer1, pointer2];
        }
        else if(sum < target){
            pointer1 += 1;
        }
        else {
            pointer2 -= 1;
        }
    }
};

let nums = [2,7,11,15];
let target = 9;
twoSum(nums, target);
