$(function () {

	// Tên nhà xuất bản
	var nxb = "Kim Đồng";


	var row = $(".section .container .row #main #store .row"),
		pageFilter = $('#main .store-filter.clearfix .pull-right .page-filter .input'),
		storePage = $('#main .store-filter.clearfix .pull-right .store-pages #page-number');



	// =============== THÊM TÊN NHÀ XUẤT BẢN VÀO .BREADCRUMB ===============
	$("#breadcrumb .container .breadcrumb").append("<li class='active'>" + nxb + "</li>");
	// =====================================================================



	// =============== THÊM PAGE-FILTER VÀO .HTML ===============
	var numProduct = [9, 18, 27];

	$.each(numProduct, function (index) {
		var divStr = "<option value='" + index + "'>" + numProduct[index] + "</option>";
		pageFilter.append(divStr);
	}); // $.each(numProduct,function(index)
	// ==========================================================



	// =============== THÊM TOÀN BỘ SÁCH THỎA ĐIỀU KIỆN TƯƠNG ỨNG VÀO arrBook ====================
	var arrBook = [];
	$.each(item, function (index) {
		if (item[index].nxb === nxb) {
			var divStr = "";
			divStr += "\
			   	<div class='col-md-4 col-sm-6 col-xs-6'>\
					<div class='product product-single'>\
						<div class='product-thumb'>\
							<div class='product-label'>\
			";

			// Thêm vào tình trạng nếu có
			if (item[index].status !== "") {
				divStr += "\
								<span>"+ item[index].status + "</span>\
				";
			}

			// Thêm vào sale nếu có
			if (item[index].sale !== 0) {
				divStr += "\
								<span class='sale'>-"+ item[index].sale + "%</span>\
				";
			}

			// Thêm vào nút QuickView
			divStr += "\
			   				</div>\
							<button class='main-btn quick-view'><i class='fa fa-search-plus'></i> View</button>\
							<img src='"+ imgUrl + item[index].url + "' alt=''>\
						</div>\
						<div class='product-body'>\
			";


			// Nếu có giảm giá thì hiển thị giá mới và giá cũ, không giảm giá thì chỉ hiển thị giá
			var oldPrice = item[index].price.toLocaleString('de-DE');
			var newPrice = (item[index].price * (100 - item[index].sale) / 100).toLocaleString('de-DE');
			if (item[index].sale !== 0) {
				divStr += "\
							<h3 class='product-price'><a>"+ newPrice + "đ </a><del class='product-old-price'>" + oldPrice + "đ</del></h3>\
				";
			} else {
				divStr += "\
							<h3 class='product-price'><a>"+ item[index].price + "đ </a></h3>\
				";
			}

			// Thêm vào rating (ngôi sao)
			divStr += "\
			   				<div class='product-rating'>\
			";

			// Chạy vòng lặp tạo sao
			var i;
			for (i = 0; i < 5; i++) {
				if (i < item[index].star) {
					divStr += "\
			   				<i class='fa fa-star'></i>\
					";
				} else {
					divStr += "\
			   				<i class='fa fa-star-o empty'></i>\
					";
				}
			}

			// Thêm vào tên của sách, các nút phía dưới và đóng lại thẻ <div>
			divStr += "\
						</div>\
			 			<h2 class='product-name'><a href='#''>"+ item[index].name + "</a></h2>\
			 			<div class='product-btns'>\
			 				<button class='main-btn icon-btn'><i class='fa fa-heart'></i></button>\
			 				<button class='main-btn icon-btn'><i class='fa fa-exchange'></i></button>\
			 				<button class='primary-btn add-to-cart'><i class='fa fa-shopping-cart'></i> Add to Cart</button>\
			 			</div>\
			 		</div>\
			 	</div>\
			   </div>\
			";

			// append vào .html tương ứng
			// $(".section .container .row #main #store .row").append(divStr);

			// Thêm vào mảng arrBook
			arrBook.push(divStr);
		}
	}); // $.each(item,function(index)
	// ===========================================================================================



	// =============== THÊM SÁCH LẦN ĐẦU TIÊN ===============
	var iNumProduct = pageFilter.val();
	for (var i = 0; i < numProduct[iNumProduct]; i++) {
		row.append(arrBook[i]);
	}
	// ======================================================



	// =============== HÀM CẬP NHẬT LẠI SỐ TRANG HIỂN THỊ ===============
	function updatePageNumber(iNumProduct) {
		var numPage = Math.ceil(parseInt(arrBook.length) / parseInt(numProduct[iNumProduct]));
		var str = "<li><a class='cur-page' href='#' style='color:#F8694A'>" + 1 + "</a></li>";
		storePage.empty();
		storePage.append(str);
		for (var i = 1; i < numPage; i++) {
			var str = "<li><a href='#'>" + (i + 1) + "</a></li>";
			storePage.append(str)
		}
	} // updatePageNumber
	// =================================================================



	// Cập nhật trang hiển thị lần đầu tiên
	updatePageNumber(pageFilter.val());



	// =============== CẬP NHẬT LẠI SỐ SẢN PHẨM HIỂN THỊ KHI NGƯỜI DÙNG THAY ĐỔI SỐ LƯỢNG SẢN PHẨM HIỂN THỊ ===============
	pageFilter.change(function () {
		pageFilter.val($(this).val());
		var iNumProduct = $(this).val();
		updatePageNumber(iNumProduct);
		row.empty();
		for (var i = 0; i < numProduct[iNumProduct]; i++) {
			row.append(arrBook[i]);
		}
	});
	// =====================================================================================================================



	// =============== CẬP NHẬT LẠI SỐ SẢN PHẨM HIỂN THỊ NGƯỜI DÙNG THAY ĐỔI TRANG ===============
	storePage.on('click', 'li a', function () {
		$(this).css('color', '#F8694A');
		var text = $(this).text();

		$('#page-number li a').each(function (i) {
			if (text === $(this).text()) {
				$(this).css('color', '#F8694A');
				$(this).addClass('cur-page');
			}
			else {
				$(this).css('color', '');
				$(this).removeClass('cur-page');
			}
		});

		var page = parseInt($(this).text());
		var nPage = parseInt(numProduct[pageFilter.val()]);
		row.empty();
		var startIndex = page * nPage - nPage;
		var endIndex = page * nPage;
		for (var i = startIndex; i < endIndex; i++) {
			row.append(arrBook[i]);
		}
	})
	// ===========================================================================================



	// =============== THỰC HIỆN ĐẾN TRANG TIẾP THEO KHI NHẤN NÚT MŨI TÊN BÊN PHẢI ===============
	$('.fa.fa-caret-right').on('click', function () {
		var curPage;
		$('#page-number li a').each(function (i) {
			if ($(this).hasClass('cur-page')) {
				curPage = $(this).text();
				return false;
			}
		});
		var nextPage = parseInt(curPage) + 1;
		$('#page-number li a').each(function (i) {
			if ($(this).text() == nextPage) {
				$(this).trigger('click');
			}
		});
	});
	// ===========================================================================================

});

