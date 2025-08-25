const talabalar = new Set([
  { ism: 'Jamshid', ballar: [90, 85, 92] },
  { ism: 'Sardor', ballar: [75, 80, 85] },
  { ism: 'Ali', ballar: [90, 95, 85] },
  { ism: 'Vali', ballar: [100, 100, 100] }
])

function engYaxshi(talabalar) {
  const ortachalar = Array.from(talabalar).map(talaba => {
    const ortacha = talaba.ballar.reduce((a, b) => a + b, 0) / talaba.ballar.length
    return { ism: talaba.ism, ortacha }
  })

  const engKatta = Math.max(...ortachalar.map(t => t.ortacha))
  return ortachalar.filter(t => t.ortacha === engKatta)
}

console.log(engYaxshi(talabalar))