// Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums.
// If there are multiple answers, you may return any of them.

/**
 * @param {string[]} nums
 * @return {string}
 */

nums = ["01", "10"];
var findDifferentBinaryString = function (nums) {
  var n = nums[0].length;

  var permutations = binaryPermutations(n);
  console.log(permutations);

  var notAppears = [];
  notAppears = permutations.filter((item) => !nums.includes(item));

  // console.log(notAppears);
  return notAppears[0];
};

// Recursively Generating all possible Strings
function binaryPermutations(n) {
  const result = [];

  function generate(current, remaining) {
    if (remaining === 0) {
      result.push(current);
      return;
    }

    generate(current + "0", remaining - 1);
    generate(current + "1", remaining - 1);
  }

  generate("", n);
  return result;
}

findDifferentBinaryString(nums);
