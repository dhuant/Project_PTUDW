

var dh = [
    {
        madh: '0x01',
        sanpham: 'Mật mã phái đẹp',
        dongia: '52500',
        soluong: '1',
        tongthu: '52500',
        nguoidat: 'Nguyễn Đình Tiến',
        email: 'tien1@gmail.com',
        sdt: '0988111222',
        nguoinhan: 'Nguyễn Đình Tiến',
        diachi: '181 Tân Phước, phường 11, quận 10, TP.HCM',
        sdtn: '0988111222',
        status: 'Delivered'
    },
    {
        madh: '0x02',
        sanpham: 'Để con được ốm',
        dongia: '56000',
        soluong: '1',
        tongthu: '56000',
        nguoidat: 'Lê Thăng',
        email: 'thang@gmail.com',
        sdt: '0122311411',
        nguoinhan: 'Lê Thăng',
        diachi: '42/1 Ung Văn Khiêm, phường 21, quận Tân Bình, TP.HCM',
        sdtn: '0122311411',
        status: 'Delivered'
    },
    {
        madh: '0x03',
        sanpham: 'Thiên văn bất tận',
        dongia: '42000',
        soluong: '1',
        tongthu: '56000',
        nguoidat: 'Lê An',
        email: 'An@gmail.com',
        sdt: '01255234156',
        nguoinhan: 'Lê An',
        diachi: '227 Nguyễn Văn Cừ, phường 7, quận 5, TP.HCM',
        sdtn: '01255234156',
        status: 'Waiting'
    }
];

/*tạo biến lưu Storege giống cookie */
var temp;
var dhHeader = [];
if (!sessionStorage.temp)
    sessionStorage.temp = JSON.stringify(dhHeader);
dhHeader = JSON.parse(sessionStorage.temp);

var check;
var Status = [];
if (!sessionStorage.check)
    sessionStorage.check = JSON.stringify(Status);
Status = JSON.parse(sessionStorage.check);
/*end tạo biến lưu Storege giống cookie */


for (i = 0; i < dh.length; i++) {
    var idtr = `tr${dh[i].madh}`;
    var idDel = `delete${dh[i].madh}`;
    var idEdit = `edit${dh[i].madh}`;
    var idStatus = `status${dh[i].madh}`;
    var btnClass;
    if (dh[i].status === 'Delivered') {
        btnClass = 'btn-success';
    }
    else {
        btnClass = 'btn-danger';
    }
    $('#dh').append(`
        <tr id="${idtr}">   
        <td>${i + 1}</td>
        <td>${dh[i].madh}</td>
        <td>${dh[i].sanpham}</td>
        <td>${dh[i].dongia}</td>
        <td>${dh[i].soluong}</td>
        <td>${dh[i].tongthu}</td>
        <td>${dh[i].nguoidat}</td>
        <td>${dh[i].email}</td>
        <td>${dh[i].sdt}</td>
        <td>${dh[i].nguoinhan}</td>
        <td>${dh[i].diachi}</td>
        <td>${dh[i].sdtn}</td>

        <td>
            <div class="btn-group text-right">
            <button id="${idStatus}" class="btn btn-xs ${btnClass} br2 btn-xs fs12 dropdown-toggle" data-toggle="dropdown" aria-expanded="false"> ${dh[i].status}
                <span class="caret ml5"></span>
            </button>
            <ul class="dropdown-menu" role="menu">   
                <li>
                <a href="#">Delivered</a>
                    
                </li>
                <li>
                <a href="#">Waiting</a>
               
                </li>
            </ul>
            </td>
        </div>
        </tr>
        `);
}
/*nút xóa trong dhách hàng */
for (var j = 0; j < dh.length; j++) {
    var jq = `#delete${dh[j].madh}`;
    $(jq).on('click', function () {
        var id = $(this).attr('id');
        for (var k = 0; k < dh.length; k++) {
            var idBtnDel = `delete${dh[k].madh}`;
            if (idBtnDel === id) {
                var idtr = `#tr${dh[k].madh}`;
                $(idtr).remove();

                /*thông báo delete successfully */
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
                    $('#delete').fadeOut(3500);
                    setTimeout(() => {
                        $('#delete').remove();
                    }, 1500);
                }, 500);
                /*end thông báo delete successfully */

            }
        }
    });

}
/* end nút xóa trong loại sách */

for (var j = 0; j < dh.length; j++) {
    var jq = `#edit${dh[j].madh}`;
    $(jq).on('click', function () {
        dhHeader = [];
        var id = $(this).attr('id');
        for (var k = 0; k < dh.length; k++) {
            var idEdit = `edit${dh[k].madh}`;
            if (idEdit === id) {
                var str = 'Chỉnh sửa thông tin dhách hàng';
                dhHeader.push(str);
                break;
            }
        }
        sessionStorage.temp = JSON.stringify(dhHeader);
        dhHeader = JSON.parse(sessionStorage.temp);
    });
}
$('#dh-Header').append(`
        <h4 class="panel-title" style="padding-top: 12px;">${dhHeader[0]}</h4>
    `);
/*end push vào trong Storage */

/*end set lại cho input bên thêm mới dh */

$('#save-them-dh').click(function () {
    Status = [];
    Status.push('save-dh-success');
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
$('#save-dh-success').fadeIn('slow');
setTimeout(() => {
    $('#save-dh-success').fadeOut(2500);
    setTimeout(() => {
        $('#save-dh-success').remove();
    }, 1500);
}, 1000);
Status = [];
sessionStorage.check = JSON.stringify(Status);
Status = JSON.parse(sessionStorage.check);