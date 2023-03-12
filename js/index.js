
var arrThemSo = [-1, -12, 1, 2, 3, 7];
document.getElementById('btnThemSo').onclick = function () {
    //input: themSo: number
    var so = +document.getElementById('nhap_so').value;
    arrThemSo.push(so);
    document.getElementById('arrThemSo').innerHTML = arrThemSo;
}
//Bài 1: tính tổng các số dương trong mảng
document.getElementById('btnTinhTong').onclick = function () {
    var tong = 0;
    for (var index = 0; index < arrThemSo.length; index++) {
        if (arrThemSo[index] >= 0) {
            tong += arrThemSo[index];
        }
    }
    document.getElementById('bai-1').innerHTML = 'Tổng số dương:' + tong;
}
//Bài 2: Đếm có bao nhiêu số dương trong mảng
document.getElementById('btnDem').onclick = function () {
    //input: arrThemSo
    //output: htmlstring:string
    var dem = 0;
    //process
    for (var index = 0; index < arrThemSo.length; index++) {
        if (arrThemSo[index] > 0) {
            dem += 1;
        }
    }
    document.getElementById('bai-2').innerHTML = 'Đếm số dương:' + dem;
}
//Bài 3: Tìm Min trong mảng
document.getElementById('btnMin').onclick = function () {
    //input: arrThemSo
    //output:min:string;
    var min = arrThemSo[0];
    for (var index = 0; index < arrThemSo.length; index++) {
        if (min> arrThemSo[index]) {
            min = arrThemSo[index]
        }
    }
    document.getElementById('bai-3').innerHTML = 'Min:' + min;
}
//Bài 4:Tìm min+
document.getElementById('btnMinDuong').onclick = function () {
    //input: arrThemSo
    //output:MinDuong:string

    var arrSoDuong = [];
    // for (var index = 0; index < arrThemSo.length; index++) {
    //     if (arrThemSo[index] > 0) {
    //         arrSoDuong += arrThemSo[index]
    //         for (var index = 0; index < arrSoDuong.length; index++) {
    //             if (arrSoDuong[0] <  arrSoDuong[index]) {
    //                 minDuong = arrSoDuong[index]
    //             }
    //         }
    //     }https://github.com/DucT4/bai_tap_B18
    // }
    var soDuong = 0;
    for (var index = 0; index < arrThemSo.length; index++) {
        if (arrThemSo[index] > 0) {
            soDuong = arrThemSo[index];
            arrSoDuong.push(soDuong);
        }
    }
    var minDuong = arrSoDuong[0];
    for (var index = 0; index < arrSoDuong.length; index++) {
        if (minDuong > arrSoDuong[index]) {
            minDuong = arrSoDuong[index]
        }
    }
    
    // for (var index = 0; index < arrThemSo.length; index++) {
    //     if (arrThemSo[0] > arrThemSo[index] && arrThemSo[index] > 0) {
    //         minDuong = arrThemSo[index]
    //     }
    // }
    document.getElementById('bai-4').innerHTML = 'Min+ :' + minDuong;

}
