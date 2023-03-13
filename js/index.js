
var arrThemSo = [2,1,4,3];
document.getElementById('btnThemSo').onclick = function () {
    //input: themSo: number
    var so = +document.getElementById('nhap_so').value;
    arrThemSo.push(so);
    document.getElementById('arrThemSo').innerHTML = arrThemSo;
}
//Bài 1: tính tổng các số dương trong mảng
document.getElementById('btnTinhTong').onclick 

= function () {
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
        if (min > arrThemSo[index]) {
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
// Bài 5: Tìm số chẳn cuối cùng
document.getElementById('btnSoChan').onclick = function () {
    //input: arrThemSo
    //output: arrSoChan: string; soChanCuoi: stirng;
    var arrSoChan = [];
    var soChanCuoi = '';
    //process
    for (var index = 0; index < arrThemSo.length; index++) {
        //điều kiện tìm số chẳn: number%2===0
        if (arrThemSo[index] % 2 === 0) {
            arrSoChan.push(arrThemSo[index]);
        } else {
            soChanCuoi = -1
        }
    }
    for (var index = 0; index < arrSoChan.length; index++) {
        // Để tìm được số chẳn cuối cùng:
        soChanCuoi = 'giá trị chẳn cuối của mảng là: ' + arrSoChan[arrSoChan.length - 1];
    }
    document.getElementById('bai-5').innerHTML = `
 ${soChanCuoi}
`;
}
//Bài 6: Đổi vị trí 2 giá trị trong mảng
document.getElementById('btnDoiVT').onclick = function () {
    //input: arrThemSo, change1:number; change2: nunber
    var change1 = +document.getElementById('change1').value;
    var change2 = +document.getElementById('change2').value;
    //output: doi
    var arrDoi = [];
    //process
    var viTri1 = '';
    var viTri2 = '';

    for (var index = 0; index < arrThemSo.length; index++) {
        if (arrThemSo[index] === change1) {
            viTri1 = index;
            arrThemSo[viTri1] = change2;
        } else if (arrThemSo[index] === change2) {
            viTri2 = index
            arrThemSo[viTri2] = change1;
        }
        // else if(arrThemSo[index]===change2){
        //     change1 =change2;
        // }
        /*
        tìm ra vị trí của 2 giá trị muốn đổi thông qua duyệt mảng
        sau đó đổi giá trị index
        */
    }
    document.getElementById('bai-6').innerHTML = `
    ${arrThemSo}
   `;
}
// Bài 7: sắp xếp các phần tử trong mảng theo thứ tự tăng dần
document.getElementById('btnSapXep').onclick = function () {
    //input: arrThemSo
    //Output: xapsep các phần tử trong mảng theo thứ tự tăng dần
    //process
    /*
    B1:Duyệt mảng
    B2:so sánh các giá trị với nhau
    */
    // var viTri1 = '';
    // var viTri2 = '';

    // for (var index = 1; index < arrThemSo.length; index++) {
    //     if (arrThemSo[index] < arrThemSo[(index - 1)]) {
    //         viTri1 = index;
    //         viTri2 = (index - 1);
    //         arrThemSo[viTri2] = arrThemSo[(index)]
    //         // arrThemSo[viTri2]= arrThemSo[index];
    //     } 
    // }
    arrThemSo.sort();
    document.getElementById('bai-7').innerHTML = `
   ${arrThemSo}
   `;
}









