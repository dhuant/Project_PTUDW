$(document).ready(function () {

    /* danh sách set cứng*/
    var loaiSach = [
        {
            maso: 'thieunhi',
            ten: 'Thiếu Nhi',
            diachi: '227 Nguyễn Văn Cừ, Q5 TP HCM',
            dienthoai: '0978289014',
            mota: 'Sách thiếu nhi'
        },
        {
            maso: 'vanhoc',
            ten: 'Văn Học',
            diachi: '181/3 Tân Phước, P6 Quận 10',
            dienthoai: '0978252146',
            mota: 'Sách văn học'
        },
        {
            maso: 'kinhte',
            ten: 'Kinh Tế',
            diachi: '81/3 Phước Hòa, P7 Quận 10',
            dienthoai: '0978236546',
            mota: 'Sách kinh tế'
        },
    ];
    /* end danh sách set cứng*/


    /*tạo biến lưu Storege giống cookie */
    var temp;
    var form;
    var editBook = [];
    if (!sessionStorage.form)
        sessionStorage.form = JSON.stringify(editBook);
    editBook = JSON.parse(sessionStorage.form);
    if (!sessionStorage.temp)
        sessionStorage.temp = JSON.stringify(loaiSach);
    loaiSach = JSON.parse(sessionStorage.temp);
    /*end tạo biến lưu Storege giống cookie */

    /*append ds vào trong loại sách */
    for (var i = 0; i < loaiSach.length; i++) {
        var idtr = `tr${loaiSach[i].maso}`;
        var idBtnEdit = `edit${loaiSach[i].maso}`;
        var idBtnDel = `delete${loaiSach[i].maso}`;
        $('#loai-sach').append(`
                                                <tr id="${idtr}">
                                                    <td>${i + 1}</td>
                                                    <td>${loaiSach[i].maso}</td>
                                                    <td>${loaiSach[i].ten}</td>
                                                    <td>${loaiSach[i].diachi}</td>
                                                    <td>${loaiSach[i].dienthoai}</td>
                                                    <td>${loaiSach[i].mota}</td>
                                                    <td>
                                                        <div class="hidden-sm hidden-xs btn-group">
                                                            <a href="./them-loai-sach.html" id="${idBtnEdit}" class="btn btn-xs btn-info">
                                                                <i class="ace-icon fa fa-pencil bigger-120"></i>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="hidden-sm hidden-xs btn-group">
                                                            <button id="${idBtnDel}" class="btn btn-xs btn-danger">
                                                                <i class="ace-icon fa fa-trash bigger-120"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
    
        `);


    }
    /*end append ds vào trong loại sách */

    /*nút xóa trong loại sách */
    for (var j = 0; j < loaiSach.length; j++) {
        var jq = `#delete${loaiSach[j].maso}`;
        $(jq).on('click', function () {
            var id = $(this).attr('id');
            for (var k = 0; k < loaiSach.length; k++) {
                var idBtnDel1 = `delete${loaiSach[k].maso}`;
                if (idBtnDel1 === id) {
                    var idtr1 = `#tr${loaiSach[k].maso}`;
                    $(idtr1).remove();
                    loaiSach.splice(k, 1);
                    sessionStorage.temp = JSON.stringify(loaiSach);
                    loaiSach = JSON.parse(sessionStorage.temp);
                }
            }
        });

    }
    /* end nút xóa trong loại sách */

    /*push vào trong Storage */
    for (var j = 0; j < loaiSach.length; j++) {
        var jq = `#edit${loaiSach[j].maso}`;
        $(jq).on('click', function () {
            var id = $(this).attr('id');
            for (var k = 0; k < loaiSach.length; k++) {
                var idEdit = `edit${loaiSach[k].maso}`;
                if (idEdit === id) {
                    editBook.push(loaiSach[k].maso);
                    editBook.push(loaiSach[k].ten);
                    editBook.push(loaiSach[k].diachi);
                    editBook.push(loaiSach[k].dienthoai);
                    editBook.push(loaiSach[k].mota);
                    break;
                }
            }
            sessionStorage.form = JSON.stringify(editBook);
            editBook = JSON.parse(sessionStorage.form);

        });
        $('#txtMaSo').val(editBook[0]);
        $('#txtTen').val(editBook[1]);
        $('#txtDiaChi').val(editBook[2]);
        $('#txtSDT').val(editBook[3]);
        $('#txtMoTa').val(editBook[4]);
    }
    /*end push vào trong Storage */

    /*set lại cho input bên thêm mới loại sách */

    editBook = [];
    /*end set lại cho input bên thêm mới loại sách */
    $('#add').click(function () {
        editBook = [];
        sessionStorage.form = JSON.stringify(editBook);
        editBook = JSON.parse(sessionStorage.form);
    })

    /*nút save bên thêm mới sách */

    var check = false;

    $('#save-them-loai-sach').click(function () {

        var maso = $('#txtMaSo').val();
        var ten = $('#txtTen').val();
        var diachi = $('#txtDiaChi').val();
        var sdt = $('#txtSDT').val();
        var mota = $('#txtMoTa').val();
        if (maso === '' || ten === '' || diachi === '' || sdt === '') {
            alert('điền đủ đi bạn ơi');
            $('#save-them-loai-sach').attr('href', 'javascript:;');
        }
        else {
            var Item = {
                maso: maso,
                ten: ten,
                diachi: diachi,
                dienthoai: sdt,
                mota: mota
            }
            for (var n = 0; n < loaiSach.length; n++) {
                if (loaiSach[n].maso === Item.maso) {
                    loaiSach[n].ten = ten;
                    loaiSach[n].diachi = diachi;
                    loaiSach[n].dienthoai = sdt;
                    loaiSach[n].mota = mota;
                    check = true;
                    break;
                }
            }
            if (check === false)
                loaiSach.push(Item);
            sessionStorage.temp = JSON.stringify(loaiSach);
            loaiSach = JSON.parse(sessionStorage.temp);
            $('#save-them-loai-sach').attr('href', './loai-sach.html');
        }
    });
    /*end nút save bên thêm mới sách */

})
