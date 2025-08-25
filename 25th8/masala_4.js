let mamlakatlar = new Set([
  { Russian: 9 },
  { English: 91 },
  { French: 45 },
  { Spanish: 24 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Arabic: 25 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 }
])

function engKopTil(set, n) {
  const arr = Array.from(set)
  const tartib = arr.sort((a, b) => {
    const va = Object.values(a)[0]
    const vb = Object.values(b)[0]
    return vb - va
  })
  return tartib.slice(0, n)
}

console.log(engKopTil(mamlakatlar, 3))