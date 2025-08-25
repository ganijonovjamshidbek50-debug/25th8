const ballar = new Map([
  ["A", 100], ["B", 14], ["C", 9], ["D", 28], ["E", 145],
  ["F", 12], ["G", 3], ["H", 10], ["I", 200], ["J", 100],
  ["K", 114], ["L", 100], ["M", 25], ["N", 450], ["O", 80],
  ["P", 2], ["Q", 12], ["R", 400], ["S", 113], ["T", 405],
  ["U", 11], ["V", 10], ["W", 10], ["X", 3], ["Y", 210],
  ["Z", 23]
])

function ismBall(ism) {
  let jami = 0
  for (let h of ism.toUpperCase()) {
    jami += ballar.get(h) || 0
  }
  if (jami <= 60) return "Unchalik yaxshi emas"
  if (jami <= 300) return "Yaxshi"
  if (jami <= 599) return "Zo'r"
  return "Eng zo'ri"
}

console.log(ismBall("Jamshid"))
console.log(ismBall("Davron"))
console.log(ismBall("Ulugbek"))
console.log(ismBall("Asal"))
