const constructNote = (msg, letters) => {
  if (letters.length < msg.length) return false;
  if (msg === letters) return true;

  const msgObj = {};
  const lettersObj = {};

  for (let i = 0; i < msg.length; i++) {
    msgObj[msg[i]] = msgObj[msg[i]] + 1 || 1;
  }
  for (let i = 0; i < letters.length; i++) {
    lettersObj[letters[i]] = lettersObj[letters[i]] + 1 || 1;
  }

  for (let key in msgObj) {
    if (msgObj[key] > lettersObj[key]) {
      return false;
    }
  }
  return true;
};
console.log(constructNote('aabbcc', 'bcabcaddff'));
