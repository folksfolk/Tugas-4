// Jawaban Nomor 1
var a = 2;
var b = 20;
var looping1 = "";
var looping2 = "";

console.log("Looping Pertama");
while ( a <= 20) {
    if (a % 2 == 0) {
        looping1 = console.log(a + " - I Love Coding");
    }
    a ++;
}

console.log("Looping Kedua");
while (b >= 2) {
    if (b % 2 == 0) {
        looping2 = console.log(b + " - I Will Become a FrontEnd Developer");
    }
    b--;
}
// Jawaban Nomor 2
for (var c = 1; c <= 20; c++) {
    if (c % 2 == 1) {
        if (c % 3 == 0) {
            console.log(c + " - I Love Coding");
        } else {
            console.log(c + " - Santai");
        }
    } else {
        console.log(c + " - Berkualitas");
    }
}

// Jawaban Nomor 3
for ( let i = 1; i <= 7; i++) {

    let str = '';

    for(let j = 1; j <= i; j++) {
        str += '*';
    }

    console.log(str);
}

// Jawaban Nomor 4
var kalimat = "saya sangat senang belajar javascript"
var nama = kalimat.split(" ")
console.log(nama)

// Jawaban Nomor 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

daftarBuah.sort();
for (var i = 0; i < daftarBuah.length; i++) {
    console.log(daftarBuah[i]);
}



