// Javascript questions
// 1. Wap to check if a number is prime
// 2. Wap to check if a number is palindrome
// 3. Wap to reverse a number.
// 4. Wap to print all prime numbers in a range.
// 5. Wap to print Fibonacci series.

// solution1
let checkPrimeNumber = (number, index) => {
  let sqrt = number ** 0.5;
  if (index > sqrt) return true;
  if (number % index == 0) return false;
  return checkPrimeNumber(number, index + 1);
};
const primeNumber = 19;
let isPrime = checkPrimeNumber(primeNumber, 2);
if (isPrime) console.log(`Yes, ${primeNumber} is a Prime Number`);
else console.log(`No,  ${primeNumber} is not a Prime Number`);

// Solution2
let isPalindromeNumber = (number, start, end) => {
  if (start > end) return true;
  if (number[start] != number[end]) return false;
  return isPalindromeNumber(number, start + 1, end - 1);
};
const palindrome = 10101;
const palindromeString = palindrome + "";
let isPalindrome = isPalindromeNumber(
  palindromeString,
  0,
  palindromeString.length - 1
);
if (isPalindrome) console.log(`Yes, ${palindrome} is a Palindrome Number`);
else console.log(`No, ${palindrome} is not a Palindrome Number`);

//Solution 3
let reverseNumber = (number, ans) => {
  if (number <= 0) return ans;
  let digit = number % 10;
  ans = ans * 10 + digit;
  return reverseNumber(parseInt(number / 10), ans);
};
let number = 111223;
console.log(`${number} is the number before reversing`);
let reversedNumber = reverseNumber(number, 0);
console.log(`${reversedNumber} is the number after reversing`);

//Solution 4
console.log("Printing all the prime number from 20 to 40");
let arr = [];
for (let i = 20; i <= 40; i++) {
  let isprime = checkPrimeNumber(i, 2);
  if (isprime) arr.push(i);
}
console.log(arr);

//Solution 5
console.log("Printing first 10 Fibonacci series numbers");
let FibonacciSeries = (first, second, index, fibo) => {
  if (index === 0) {
    fibo.push(first);
    return FibonacciSeries(first, second, index + 1, fibo);
  }
  if (index === 1) {
    fibo.push(second);
    return FibonacciSeries(first, second, index + 1, fibo);
  }
  if (index > 10) {
    return fibo;
  }
  let nextNum = first + second;
  fibo.push(nextNum);
  return FibonacciSeries(second, nextNum, index + 1, fibo);
};

let fiboSeriesTillTen = FibonacciSeries(0, 1, 0, []);
console.log(fiboSeriesTillTen);
