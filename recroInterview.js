/*

Write a function that takes a string as input and returns the length of the longest substring that contains no repeated characters.

console.log(lengthOfLongestSubstring("abcabcbb")); // Expected output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // Expected output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // Expected output: 3 ("wke")
console.log(lengthOfLongestSubstring(""));         // Expected output: 0 (empty string)
console.log(lengthOfLongestSubstring("dvdf"));     // Expected output: 3 ("vdf")
console.log(lengthOfLongestSubstring("anviaj"));   // Expected output: 5 ("nviaj")
console.log(lengthOfLongestSubstring("au"));       // Expected output: 2 ("au")
console.log(lengthOfLongestSubstring("aabbcc"));   // Expected output: 2 ("ab" or "bc")
console.log(lengthOfLongestSubstring(""));         // Expected output: 0 (empty string)
console.log(lengthOfLongestSubstring("abcdefgh")); // Expected output: 8 ("abcdefgh")
*/

const isArrUnique = (arr) => arr.length === [...new Set(arr)].length;

const lengthOfLongestSubstring = (str) => {
  const output = [];

  for (let i = 0; i <= str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      output.push([...str].slice(i, j));
    }
  }

  let counter = 0;
  output.map((item) => {
    if (isArrUnique(item) && counter < item.length) {
      counter = item.length;
    }
  });
  // console.log("output", output);
  return counter;
};

console.log(lengthOfLongestSubstring("aabbcc"));
