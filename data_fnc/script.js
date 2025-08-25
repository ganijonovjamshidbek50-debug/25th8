function toliq() {
    var ism = document.getElementById("ism").value;
    var familiya = document.getElementById("familiya").value;
    var yil = parseInt(document.getElementById("yil").value);
    var aniqlash = parseInt(document.getElementById("aniqlash").value);

    var natija = document.getElementById("natija");

    if (aniqlash === 1) {
        var yoshi = new Date().getFullYear() - yil;
        natija.innerHTML = `Salom ${familiya} ${ism} <br> Sizning yoshingiz: ${yoshi}`;
    } else {
        natija.innerHTML = "Malumot notogri kiritildi.";
    }
}

document.getElementById("submitBtn").addEventListener("click", toliq);
