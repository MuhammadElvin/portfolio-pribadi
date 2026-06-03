var jumlahAngkot = 10;
var angkotberoperasi = 6;

for (var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++ ) {

    if (noAngkot <= 6) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    } else if(noAngkot === 8 || noAngkot === 8 || noAngkot === 10) {
        console.log('angkot No. '+ noAngkot + ' sedang lembur.');
    } else {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
}

}
