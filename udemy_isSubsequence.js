const isSubsequence = (str1, str2) => {
  if (str1.length > str2.length) return false;
  let j = 0;
  let i = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) i++;
    j++;
  }

  return i === str1.length ? true : false;
};

console.log(isSubsequence("abc", "acb"));
