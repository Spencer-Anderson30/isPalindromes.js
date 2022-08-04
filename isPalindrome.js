// Write your code below


const isPalindrome = function (str) {
    let reversed = str.split('').reverse().join('')
    if (reversed === str) {
        return true 
    } else {
        return false 
    }
}

console.log(isPalindrome('level'))
console.log(isPalindrome('hello'))