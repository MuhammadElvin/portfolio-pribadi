var jumlahAngkot = 10;
var angkotberoperasi = 6;
var noAngkot = 1;

while (noAngkot <= angkotberoperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    noAngkot++;
}

for (noAngkot = angkotberoperasi + 1; noAngkot <= jumlahAngkot; noAngkot++ ) {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
}
