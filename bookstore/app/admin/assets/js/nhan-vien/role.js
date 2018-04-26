

var roles = [
    {
        maRole: 'ad',
        tenRole: 'Admin',
        mota: 'quản lý nhân viên bán sách'
    },
    {
        maRole: 'sl',
        tenRole: 'Seller',
        mota: 'nhân viên bán sách'
    },
    {
        maRole: 'se',
        tenRole: 'Secretary',
        mota: 'nhân viên kế toán'
    }
];
var temp;
var roleTitle = [];
if (!sessionStorage.temp)
    sessionStorage.temp = JSON.stringify(roleTitle);
roleTitle = JSON.parse(sessionStorage.temp);
for (var i = 0; i < roles.length; i++) {
    var idDel = `delete${roles[i].maRole}`;
    var idEdit = `edit${roles[i].maRole}`;
    var idtr = `tr${roles[i].maRole}`;
    $('#ds-role').append(`
                                            <tr id="${idtr}">
                                                <td>${i + 1}</td>
                                                <td>${roles[i].maRole}</td>
                                                <td>${roles[i].tenRole}</td>
                                                <td>${roles[i].mota}</td>
                                                <td>
                                                    <div class="hidden-sm hidden-xs btn-group">
                                                        <a id="${idEdit}" href="./role-detail.html" class="btn btn-xs btn-info">
                                                            <i class="ace-icon fa fa-pencil bigger-120"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="hidden-sm hidden-xs btn-group">
                                                        <button id="${idDel}" class="btn btn-xs btn-danger">
                                                            <i class="ace-icon fa fa-trash bigger-120"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
    `);
}

for (var j = 0; j < roles.length; j++) {
    var jq = `#delete${roles[j].maRole}`;
    $(jq).on('click', function () {
        var id = $(this).attr('id');
        for (var k = 0; k < roles.length; k++) {
            var idBtnDel = `delete${roles[k].maRole}`;
            if (idBtnDel === id) {
                var idtr = `#tr${roles[k].maRole}`;
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
                    $('#delete').fadeOut(3500);
                    setTimeout(() => {
                        $('#delete').remove();
                    }, 1500);
                }, 500);
            }
        }
    });

}

$('#add-new-role').click(function () {
    roleTitle = [];
    var str = 'Bạn đang thêm mới một Role';
    roleTitle.push(str);
    sessionStorage.temp = JSON.stringify(roleTitle);
    roleTitle = JSON.parse(sessionStorage.temp);
});

for (var j = 0; j < roles.length; j++) {
    var jq = `#edit${roles[j].maRole}`;
    $(jq).on('click', function () {
        roleTitle = [];
        var id = $(this).attr('id');
        for (var k = 0; k < roles.length; k++) {
            var idEdit = `edit${roles[k].maRole}`;
            if (idEdit === id) {
                var str = 'Bạn đang chỉnh sửa một Role';
                roleTitle.push(str);
                break;
            }
        }
        sessionStorage.temp = JSON.stringify(roleTitle);
        roleTitle = JSON.parse(sessionStorage.temp);
    });
}

$('#role-title').append(`
        <h4 class="panel-title" style="padding-top: 12px;">${roleTitle[0]}</h4>
    `);