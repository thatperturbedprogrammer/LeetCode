/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false; // palindrome cannot be negative
    let num = x;
    let rev = 0;
    while(num > 0){
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    return x === rev;
};

isPalindrome(121)
