const hodimlar = new Set([
  { ism: "John", maosh: 50000, dept: "IT" },
  { ism: "Jane", maosh: 60000, dept: "HR" },
  { ism: "Bob", maosh: 55000, dept: "IT" },
  { ism: "Sophie", maosh: 75000, dept: "HR" },
  { ism: "Mike", maosh: 65000, dept: "IT" },
  { ism: "Emily", maosh: 80000, dept: "HR" },
  { ism: "David", maosh: 70000, dept: "IT" }
])

function topDept(x) {
  if (x.size === 0) return "Xatolik: hodimlar yo'q"

  const hr = Array.from(x).filter(h => h.dept === "HR")
  const it = Array.from(x).filter(h => h.dept === "IT")

  const hrOrt = hr.reduce((a, b) => a + b.maosh, 0) / hr.length
  const itOrt = it.reduce((a, b) => a + b.maosh, 0) / it.length

  if (hrOrt > itOrt) return [{ dept: "HR", ortacha: Math.floor(hrOrt) }]
  if (itOrt > hrOrt) return [{ dept: "IT", ortacha: Math.floor(itOrt) }]
  return [
    { dept: "HR", ortacha: Math.floor(hrOrt) },
    { dept: "IT", ortacha: Math.floor(itOrt) }
  ]
}

console.log(topDept(hodimlar))