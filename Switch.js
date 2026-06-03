var kendaraan = prompt('Masukan nama Mobil / Motor : \n (cth: daihatsu, mitsubushi, brio, suprabapak,mio)');

switch (kendaraan) {
    case 'daihatsu' :
        case 'mitsubishi' :
            case 'brio' :
                alert('Selamat anda memilih mobil');
                break;
    case 'suprabapak' :
        case 'mio' :
                alert('Selamat anda memilih motor');
                break;
    default :
        alert('anda Memasukan kendaraan yang salah!!');
        break;
}