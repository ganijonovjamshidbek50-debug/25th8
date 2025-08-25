function olibTashla(buyumlar, nom) {
  let yangi = {}
  for (let k in buyumlar) {
    if (k !== nom) {
      yangi[k] = buyumlar[k]
    }
  }
  return yangi
}

console.log(olibTashla({ piano: 300, tv: 100, skate: 50 }, "skate"))
console.log(olibTashla({ mirror: 500, painting: 1 }, "mirror"))
