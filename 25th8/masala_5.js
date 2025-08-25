const kitobTizimi = () => {
  let kitoblar = []
  let id = 1
  return {
    qoshish: (nom, muallif, oqilgan = false) => {
      const kitob = { id: id++, nom, muallif, oqilgan }
      kitoblar.push(kitob)
      return kitob
    },
    topBir: (kitobId) => kitoblar.find(k => k.id === kitobId) || null,
    hammasi: () => kitoblar,
    muallifBoyicha: (muallif) => kitoblar.filter(k => k.muallif === muallif),
    oqilganlar: () => kitoblar.filter(k => k.oqilgan),
    ochirishBir: (kitobId) => { kitoblar = kitoblar.filter(k => k.id !== kitobId) },
    ochirishHammasi: () => { kitoblar = []; id = 1 }
  }
}

const kolleksiya = kitobTizimi()
kolleksiya.qoshish('Xobbit', 'J.R.R. Tolkien', false)
kolleksiya.qoshish('Uzuklar Hukmdori', 'J.R.R. Tolkien', true)
kolleksiya.qoshish('1984', 'Jorj Oruell', true)

console.log(kolleksiya.topBir(1))
console.log(kolleksiya.hammasi())
console.log(kolleksiya.muallifBoyicha('J.R.R. Tolkien'))
console.log(kolleksiya.oqilganlar())
kolleksiya.ochirishBir(2)
console.log(kolleksiya.hammasi())
kolleksiya.ochirishHammasi()
console.log(kolleksiya.hammasi())
