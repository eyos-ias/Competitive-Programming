function sortSentence(s) {
  let words = "";
  const sentence = s.split(" ");
  const sortedSentence = new Array(sentence.length);
  for (let i = 0; i < sentence.length; i++) {
    const currentWord = sentence[i];
    for (let j = 0; j < sentence[i].length; j++) {
      const word = sentence[i][j];
      if (word !== currentWord[currentWord.length - 1]) {
        words += word;
      } else {
        const x = parseInt(word, 10) - 1;
        sortedSentence[x] = words;
      }
    }
    words = "";
  }
  return sortedSentence.join(" ");
}
