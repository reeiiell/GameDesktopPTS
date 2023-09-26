let pilihan = true;
alert ('Selamat Datang Di Game Kertas Batu Gunting');
while(pilihan){


    let p = prompt('Ayo Pilih mau Kertas, Batu, Gunting ?');

    let comp = Math.random();

    if( comp < 0.34){
        comp = 'kertas';
    } else if ( comp >= 0.34 && comp < 0.67) {
        comp = 'batu';
    } else {
        comp = 'gunting';
    } 

    let hasil = '';

    if ( p == comp) {
        hasil = 'Seri';
    } else if ( p == 'kertas'){
        hasil = (comp == 'batu') ? 'Anda Menang' : 'Komputer Menang';
    } else if ( p == 'batu'){
        hasil = (comp == 'gunting') ? 'Anda Menang' : 'Komputer Menang';
    } else if ( p == 'gunting'){
        hasil = (comp == 'kertas') ? 'Anda Menang' : 'Komputer Menang';
    } else {
        hasil = 'BISA MAINNYA GAK SIH?!!';
    }

    alert('Anda Pilih : ' + p + '\nKomputer Pilih : ' + comp + '\nHasilnya : ' + hasil);

    pilihan = confirm('Mau Main Lagi ?');

}

alert('Terimakasih Sudah Bermain ! !');
