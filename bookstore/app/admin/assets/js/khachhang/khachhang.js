
$(document).ready(function () {
    var kh = [
        {
            hoten: 'Nguyễn Đình Tiến',
            email: 'tien@gmail.com',
            username: 'tiennd',
            password: '*&.982j(^'
        },
        {
            hoten: 'Trần Lê Thăng',
            email: 'thang@gmail.com',
            username: 'thangtl',
            password: '!&#%2rkaf$%'
        },
        {
            hoten: 'Hoàng Lê An',
            email: 'an@gmail.com',
            username: 'angl',
            password: '&*@Hfaln.1a'
        }
    ];

    /*tạo biến lưu Storege giống cookie */
    var temp;
    var titleHeader = [];
    if (!sessionStorage.temp)
        sessionStorage.temp = JSON.stringify(titleHeader);
    titleHeader = JSON.parse(sessionStorage.temp);

    var check;
    var Status = [];
    if (!sessionStorage.check)
        sessionStorage.check = JSON.stringify(Status);
    Status = JSON.parse(sessionStorage.check);
    /*end tạo biến lưu Storege giống cookie */


    for (i = 0; i < kh.length; i++) {
        var idtr = `tr${kh[i].hoten}`;
        var idBtnDel = `delete${kh[i].hoten}`;
        var idBtnEdit = `edit${kh[i].hoten}`;
        $('#kh').append(`
        <tr id="${idtr}">
        <td>${i + 1}</td>
        <td>${kh[i].hoten}</td>
        <td>${kh[i].email}</td>
        <td>${kh[i].username}</td>
        <td>${kh[i].password}</td>
        <td>
            <div class="hidden-sm hidden-xs btn-group">
                <a id="${idBtnEdit}" href="./detail-khachhang.html" class="btn btn-xs btn-info">
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
    /*nút xóa trong khách hàng */
    for (var j = 0; j < kh.length; j++) {
        var jq = `#delete${kh[j].hoten}`;
        $(jq).on('click', function () {
            var id = $(this).attr('id');
            for (var k = 0; k < kh.length; k++) {
                var idBtnDel = `delete${kh[k].hoten}`;
                if (idBtnDel === id) {
                    var idtr = `#tr${kh[k].hoten}`;
                    $(idtr).remove();
                    $('body').append(`
                <div class="alert alert-success" id="delete" 
                style="
                        position: fixed;
                        top: 20px;
                        right: 20px;
                        z-index: 99999;
                        display: none;
                        ">
                        <i class="fa fa-check">
                        </i> Delete Successfully </div>`);
                    $('#delete').fadeIn('slow');
                    setTimeout(() => {
                        $('#delete').fadeOut(2500);
                        setTimeout(() => {
                            $('#delete').remove();
                        }, 1500);
                    }, 1000);
                }
            }
        });

    }
    /* end nút xóa trong loại sách */

    /*push vào trong Storage */
    for (var j = 0; j < kh.length; j++) {
        var jq = `#edit${kh[j].hoten}`;
        $(jq).on('click', function () {
            titleHeader = [];
            var id = $(this).attr('id');
            for (var k = 0; k < kh.length; k++) {
                var idEdit = `edit${kh[k].hoten}`;
                if (idEdit === id) {
                    var str = 'Chỉnh sửa thông tin khách hàng';
                    titleHeader.push(str);
                    break;
                }
            }
            sessionStorage.temp = JSON.stringify(titleHeader);
            titleHeader = JSON.parse(sessionStorage.temp);
        });
    }
    $('#titleHeader').append(`
        <h4 class="panel-title" style="padding-top: 12px;">${titleHeader[0]}</h4>
    `);
    /*end push vào trong Storage */

    /*end set lại cho input bên thêm mới kh */

    $('#save-them-kh').click(function () {
        Status = [];
        Status.push('save-kh-success');
        sessionStorage.check = JSON.stringify(Status);
        Status = JSON.parse(sessionStorage.check);
    });
    $('body').append(`
    <div class="alert alert-success" id="${Status[0]}" 
    style="
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 99999;
            display: none;
            ">
            <i class="fa fa-check">
            </i> Save Successfully </div>
    `);
    $('#save-kh-success').fadeIn('slow');
    setTimeout(() => {
        $('#save-kh-success').fadeOut(2500);
        setTimeout(() => {
            $('#save-kh-success').remove();
        }, 1500);
    }, 1000);
    Status = [];
    sessionStorage.check = JSON.stringify(Status);
    Status = JSON.parse(sessionStorage.check);
});


