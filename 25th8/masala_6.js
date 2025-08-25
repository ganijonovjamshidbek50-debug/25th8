function yillardanSong(odamlar, n) {
  let yil = Math.abs(n)
  let yangi = {}
  for (let ism in odamlar) {
    yangi[ism] = odamlar[ism] + yil
  }
  return yangi
}

console.log(yillardanSong({
  "Joel": 32,
  "Fred": 44,
  "Reginald": 65,
  "Susan": 33,
  "Julian": 13
}, 1))

console.log(yillardanSong({
  "Baby": 2,
  "Child": 8,
  "Teenager": 15,
  "Adult": 25,
  "Elderly": 71
}, 19))

console.log(yillardanSong({
  "Genie": 1000,
  "Joe": 40
}, 5))
