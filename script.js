//1. Write a JavaScript program to check if a given number is positive, negative, or zero.
// Sample Input:5
// Sample Output:Positive.

const checkNumber = (num) => {
  if (num < 0) {
    return 'Negative';
  } else if (num > 0) {
    return 'Positive';
  } else {
    return 'Zero';
  }
};

console.log(checkNumber(0));

// 2. Write a JavaScript program to calculate the sum of two numbers entered by the user.
// Sample Input:5,10
// Sample output:15

const sumOfToNumber = (a, b) => {
  return a + b;
};

console.log(sumOfToNumber(5, 10));

//3. Write a JavaScript function to check if a given number is even or odd.
// Sample Input:10
// Sample output:even

const findOddEven = (num) => {
  if (num % 2 === 0) {
    return `The ${num} Number is Even `;
  } else {
    return `The ${num} Number is Odd `;
  }
};

console.log(findOddEven(35));

//4. Write a JavaScript program to find the largest number among three numbers entered by the user.
// Sample Input:5,10,3
// Sample output:10

const findLargestNumber = (...num) => {
  let result = num[0];
  num.forEach((item) => {
    if (item > result) {
      result = item;
    }
  });
  return result;
};

console.log(findLargestNumber(5, 10, 6, 15, 0, 100, 200, -200));

//5. Write a JavaScript program to find the sum of all multiples of 3 or 5 below a given number.
// Sample Input:10
// Sample output:23

const sumOfAllMultiples = (num) => {
  let sum = 0;
  for (let x = 0; x < num; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
      sum += x;
    }
  }
  return sum;
};

console.log(sumOfAllMultiples(10));

//6. Write a JavaScript function to check if a given string is a valid URL.
// Sample Input: ("https://www.example.com");
// Sample Output:true

const findValidUrl = (url) => {
  const splitUrl = url.split(':');
  const [httpName, other] = splitUrl;

  if (httpName === 'http' || httpName === 'https') {
    const searchUrl = other.split('.');
    const [first, second, third] = searchUrl;
    const backSlack = first[0] + first[1];
    if (backSlack) {
      if (
        first.slice(2) === 'www' &&
        second === second.toLowerCase() &&
        third === 'com'
      ) {
        return 'True';
      } else return 'False';
    } else return 'False';
  } else {
    return 'False';
  }
};

console.log(findValidUrl('https://www.exmple.com'));

//7. Write a JavaScript program to find the longest word in a sentence.
// Sample Input: The quick brown fox jumps over the lazy dog.
// Sample Output:quick.

const findLargestWord = (word) => {
  const string = word.split(' ');
  let result = string[0].length;
  string.forEach((item) => {
    if (item.length > result) {
      result = item;
    }
  });
  return result;
};

console.log(findLargestWord('The quick brown fox jumps over the lazy dog'));

//8. Write a JavaScript function to reverse the order of words in a sentence while maintaining the order of punctuation marks.
// Sample Input: Hello, world!
// Sample Output: world, Hello!

const reverseOrder = (word) => {
  const reverseWord = word.split(' ');
  const [firstWord, secondWord] = reverseWord;

  const comma = firstWord.slice(firstWord.length - 1);

  const helloWord = firstWord.slice(0, firstWord.length - 1);

  const symbol = secondWord.slice(secondWord.length - 1);

  const worldWord = secondWord.slice(0, secondWord.length - 1);

  return `${worldWord}${comma}${' '} ${helloWord}${symbol}`;
};

console.log(reverseOrder('Hello, world!'));

//9. Write a JavaScript program to find the number of possible combinations given a set of numbers and a target sum.
// Sample Input:( [2, 4, 6, 8], 10);
// Sample Output: 3

//10. Write a JavaScript program to implement a queue data structure using an array.
// Sample Input: const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.dequeue();
// Sample Output:[2]
