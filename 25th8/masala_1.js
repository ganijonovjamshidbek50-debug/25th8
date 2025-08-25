function qisqa(str) {
  return str
    .split(' ')
    .map(word => {
      if (word.length <= 2) {
        return word
      }
      return word[0] + (word.length - 2) + word[word.length - 1]
    })
    .join(' ')
}

const matn = 'Toshkent Axborot Texnologiyalari Universiteti'
const natija = qisqa(matn);

console.log(natija);