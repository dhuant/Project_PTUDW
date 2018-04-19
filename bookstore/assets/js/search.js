$(function () {

	// Đường dẫn đến trang Index
	var urlToIndex = './';

	// Mảng để phân loại trang Products
	var arrType = {
		'nxb': 'Nhà Xuất Bản',
		'category': 'Category',
	};

	var htmlType = "none"; 
	var proName = "None";
	

	/*=============================================================================================================================================

	1. LOAD CÁC THUỘC TÍNH CẦN THIẾT CHO TRANG

	=============================================================================================================================================*/


	// =============== THÊM BREADCRUMB VÀO TRANG PRODUCTS ===============
	var htmlBreadcrumb = `	<div class="container">
								<ul class="breadcrumb">
									<li><a href="` + urlToIndex + `index.html">Home</a></li>
								</ul>
							</div>`;
	$('#breadcrumb').append(htmlBreadcrumb);
	// ==================================================================



	// =============== THÊM SECTION VÀO TRANG PRODUCTS ===============
	var htmlSection = `	<!-- container -->
						<div class="container">
							<!-- row -->
							<div class="row">
								<!-- ASIDE -->
								<div id="aside" class="col-md-3">
									<!-- aside widget -->
									<div class="aside">
										<h3 class="aside-title">LỌC THEO GIÁ</h3>
									</div>
									<div class="aside" style="text-align: center">
										<input class="input" style="width: 45%" type="text" id="first-price">
										<span> - <span>
										<input class="input" style="width: 45%" type="text" id="second-price">
									</div>
									<div class="aside" style="text-align: center">
										<button class="primary-btn" id="price-filter-btn">LỌC</button>
									</div>
									<!-- /aside widget -->
									<!-- aside widget -->
									<div class="aside">
										<h3 class="aside-title"></h3>
										<img style="max-width: 100%" class="img-a" src="` + urlToIndex + `../assets/img/aside/01.jpg" alt="">
									</div>
									<div class="aside">
										<img style="max-width: 100%" class="img-a" src="` + urlToIndex + `../assets/img/aside/02.jpg" alt="">
									</div>

								</div>
								<!-- /ASIDE -->

								<!-- MAIN -->
								<div id="main" class="col-md-9">
									<!-- store top filter -->
									<div class="store-filter clearfix">
										<div class="pull-left">
											<div class="sort-filter">
												<span class="text-uppercase">TÌM KIẾM THEO: </span>
												<select class="input">
													<option value="name">Tên</option>
													<option value="category">Loại</option>
													<option value="nxb">NXB</option>
													<option value="origin">Xuất Xứ</option>
												</select>
												<span>&nbsp</span>
												<i class='result-text' style='color: red'></i>
											</div>
										</div>
										<div class="pull-right">
											<div class="page-filter">
												<span class="text-uppercase">Show:</span>
												<select class="input">
														<!-- <option value="0">9</option>-->
												</select>
											</div>
											<ul class="store-pages">
												<li><span class="text-uppercase">Page:</span></li>
												<span id="page-number">
														<!-- Page number -->
												</span>
												<li><a href="#"><i class="fa fa-caret-right"></i></a></li>
											</ul>
										</div>
									</div>
									<!-- /store top filter -->

									<!-- STORE -->
									<div id="store">
										<!-- row -->
										<div class="row">
											<!-- /Product Single -->
										</div>
										<!-- /row -->
									</div>
									<!-- /STORE -->

									<!-- store bottom filter -->
									<div class="store-filter clearfix">
										<div class="pull-left">
											<div class="sort-filter">
												<span class="text-uppercase">TÌM KIẾM THEO: </span>
												<select class="input">
													<option value="name">Tên</option>
													<option value="category">Loại</option>
													<option value="nxb">NXB</option>
													<option value="origin">Xuất Xứ</option>
												</select>
												<span>&nbsp</span>
												<i class='result-text' style='color: red'></i>
											</div>
										</div>
										<div class="pull-right">
											<div class="page-filter">
												<span class="text-uppercase">Show:</span>
												<select class="input">
													<!-- <option value="0">9</option>-->
													</select>
											</div>
											<ul class="store-pages">
												<li><span class="text-uppercase">Page:</span></li>
												<span id="page-number">
													<!-- Page number -->
												</span>
												<li><a href=""><i class="fa fa-caret-right"></i></a></li>
											</ul>
										</div>
									</div>
									<!-- /store bottom filter -->
								</div>
								<!-- /MAIN -->
							</div>
							<!-- /row -->
						</div>
						<!-- /container -->`;
	$('#section').append(htmlSection);
	// ===============================================================



	/*=============================================================================================================================================

	2. THỰC HIỆN CHỨC NĂNG PHÂN TRANG

	===============================================================================================================================================*/


	var row = $(".section .container .row #main #store .row"),
		pageFilter = $('#main .store-filter.clearfix .pull-right .page-filter .input'),
		storePage = $('#main .store-filter.clearfix .pull-right .store-pages #page-number');


	// =============== THÊM PAGE-FILTER VÀO .HTML ===============
	var numProduct = [9, 18, 27];

	$.each(numProduct, function (index) {
		var divStr = "<option value='" + index + "'>" + numProduct[index] + "</option>";
		pageFilter.append(divStr);
	}); 
	// ==========================================================



	// =============== THÊM TOÀN BỘ SÁCH THỎA ĐIỀU KIỆN TƯƠNG ỨNG VÀO arrBook ====================
	var arrBook = [];
	$.each(item, function (index) {
		if (item[index][htmlType] === proName) 
		{
			var str1 = "", 
				str2 = "", 
				str3 = "";

			// Thêm vào tình trạng nếu có
			if (item[index].status !== "") {
				str1 += "<span>"+ item[index].status + "</span>";
			}

			// Thêm vào sale nếu có
			if (item[index].sale !== 0) {
				str1 += "<span class='sale'>-"+ item[index].sale + "%</span>";
			}


			// Nếu có giảm giá thì hiển thị giá mới và giá cũ, không giảm giá thì chỉ hiển thị giá
			var oldPrice = item[index].price.toLocaleString('de-DE');
			var newPrice = (item[index].price * (100 - item[index].sale) / 100).toLocaleString('de-DE');
			if (item[index].sale !== 0) {
				str2 += "<h3 class='product-price'><a>"+ newPrice + "đ </a><del class='product-old-price'>" + oldPrice + "đ</del></h3>";
			} else {
				str2 += "<h3 class='product-price'><a>"+ oldPrice + "đ </a></h3>";
			}

			// Chạy vòng lặp tạo sao
			var i;
			for (i = 0; i < 5; i++) {
				if (i < item[index].star) {
					str3 += "<i class='fa fa-star'></i>";
				} else {
					str3 += "<i class='fa fa-star-o empty'></i>";
				}
			}

			var productSingle = `	<!-- Product Single -->
										<div class="col-md-4 col-sm-6 col-xs-6">
											<div class="product product-single">
												<div class="product-thumb">
													<div class="product-label">`
														+ str1 + 
													`</div>
													<a href='` + urlToIndex + `product-page/` + item[index].html + `'><img src="`+ urlToIndex + `../assets/img/books/` + item[index].url + `" alt=''></a>
												</div>
												<div class="product-body">`
													+ str2 +
													`<div class="product-rating">`
														+ str3 +
													`</div>
													<h2 class="product-name"><a href="` + urlToIndex + `product-page/` + item[index].html + `">` + item[index].name + `</a></h2>
													<div class="product-btns" style="text-align: right">
														<button class="primary-btn add-to-cart" id="` + item[index].id + `"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
													</div>
												</div>
											</div>
										</div>
										<!-- /Product Single -->`;

			// Thêm vào mảng arrBook
			arrBook.push(productSingle);
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
			storePage.append(str);
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
		RefreshSomeEventListener();
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
		RefreshSomeEventListener();
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




	/*=============================================================================================================================================

	3. THỰC HIỆN TÌM KIẾM THEO INPUT

	===============================================================================================================================================*/

	var sortFilter = $('#main .store-filter.clearfix .pull-left .sort-filter .input');
	// var sortType = {
	// 	'0': 'name',
	// 	'1': 'price',
	// 	'2': 'category',
	// 	'3': 'nxb',
	// 	'4': 'origin',
	// }

	var sortType = {
		'name': 'Tên',
		'price': 'Giá',
		'category': 'Loại',
		'nxb': 'Nhà Xuất Bản',
		'origin': 'Xuất Xứ',
	}


	// =============== HÀM LOẠI BỎ CÁC KHOẢNG TRẮNG DƯ THỪA TRONG CHUỖI ==============
	function trim(word)
	{
	    word = word.replace(/\s\s+/g, ' ');
	    word = word.trim();
	    return word;
	}
	// ===============================================================================



	// =============== LẤY CHUỖI NGƯỜI DÙNG TÌM KIẾM ===============
	var searchWord = "";
	function getSearchWord(){
		var parameters = location.search.substring(1).split("&");
	    var temp = parameters[0].split("=");
	    searchWord = decodeURIComponent(temp[1]);
	    searchWord = searchWord.toString();
	    while (searchWord.includes("+") == true){
	    	searchWord = searchWord.replace('+',' ');
	    }
	    searchWord = trim(searchWord);
	}
	getSearchWord();
	// =============================================================



	// =============== HÀM CẬP NHẬT SÁCH THEO YÊU CẦU NGƯỜI DÙNG ===============
	function updatearrBook(type, word){
		var newArrBook = [];
		$.each(item, function (index) {
			var firstStr = item[index][type].toString().toLowerCase();
			var secondStr = word.toLowerCase();
			if (firstStr.includes(secondStr)) 
			{
				var str1 = "", 
					str2 = "", 
					str3 = "";

				// Thêm vào tình trạng nếu có
				if (item[index].status !== "") {
					str1 += "<span>"+ item[index].status + "</span>";
				}

				// Thêm vào sale nếu có
				if (item[index].sale !== 0) {
					str1 += "<span class='sale'>-"+ item[index].sale + "%</span>";
				}


				// Nếu có giảm giá thì hiển thị giá mới và giá cũ, không giảm giá thì chỉ hiển thị giá
				var oldPrice = item[index].price.toLocaleString('de-DE');
				var newPrice = (item[index].price * (100 - item[index].sale) / 100).toLocaleString('de-DE');
				if (item[index].sale !== 0) {
					str2 += "<h3 class='product-price'><a>"+ newPrice + "đ </a><del class='product-old-price'>" + oldPrice + "đ</del></h3>";
				} else {
					str2 += "<h3 class='product-price'><a>"+ oldPrice + "đ </a></h3>";
				}

				// Chạy vòng lặp tạo sao
				var i;
				for (i = 0; i < 5; i++) {
					if (i < item[index].star) {
						str3 += "<i class='fa fa-star'></i>";
					} else {
						str3 += "<i class='fa fa-star-o empty'></i>";
					}
				}

				var productSingle = `	<!-- Product Single -->
											<div class="col-md-4 col-sm-6 col-xs-6">
												<div class="product product-single">
													<div class="product-thumb">
														<div class="product-label">`
															+ str1 + 
														`</div>
														<a href='` + urlToIndex + `product-page/` + item[index].html + `'><img src="`+ urlToIndex + `../assets/img/books/` + item[index].url + `" alt=''></a>
													</div>
													<div class="product-body">`
														+ str2 +
														`<div class="product-rating">`
															+ str3 +
														`</div>
														<h2 class="product-name"><a href="` + urlToIndex + `product-page/` + item[index].html + `">` + item[index].name + `</a></h2>
														<div class="product-btns" style="text-align: right">
															<button class="primary-btn add-to-cart" id="` + item[index].id + `"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
														</div>
													</div>
												</div>
											</div>
											<!-- /Product Single -->`;

				// Thêm vào mảng arrBook
				newArrBook.push(productSingle);
			}
		});
		arrBook = newArrBook;
	}
	// =========================================================================



	// =============== HÀM CẬP NHẬT LẠI BREADCRUMB KHI CÓ TỪ KHÓA TÌM KIẾM ===============
	function updateBreadcrumb(){
		var htmlupdateBreadcrumb = `<li><a class='active'>Kết Quả Tìm Kiếm Với: ` + searchWord + `</a></li>`;
		$('#breadcrumb .container ul').append(htmlupdateBreadcrumb);
	}
	updateBreadcrumb();
	// ===================================================================================



	// =============== HÀM TÌM TỪ KHÓA KHI TRANG HTML VỪA ĐƯỢC LOAD ===============
	function firstSearch(){
		var iNumProduct = pageFilter.val();
		updatearrBook('name', searchWord);
		row.empty();
		if (arrBook.length == 0){
			$('.result-text').empty();
			$('.result-text').append('Không tìm thấy kết quả');
		} else {
			$('.result-text').empty();
			$('.result-text').append('Tìm thấy ' + arrBook.length + ' sản phấm')
		}
		for (var i = 0; i < numProduct[iNumProduct]; i++) {
			row.append(arrBook[i]);
		}
		updatePageNumber(pageFilter.val());
		RefreshSomeEventListener();
	};
	firstSearch();
	// ============================================================================



	// =============== BẮT SỰ KIỆN THAY ĐỔI SORT FILTER ===============
	sortFilter.change(function(){
		var iType = $(this).val();
		sortFilter.val($(this).val());
		var iNumProduct = pageFilter.val();
		updatearrBook(iType,searchWord);
		row.empty();
		if (arrBook.length == 0){
			$('.result-text').empty();
			$('.result-text').append('Không tìm thấy kết quả');
		} else {
			$('.result-text').empty();
			$('.result-text').append('Tìm thấy ' + arrBook.length + ' sản phấm')
		}
		for (var i = 0; i < numProduct[iNumProduct]; i++) {
			row.append(arrBook[i]);
		}
		updatePageNumber(pageFilter.val());
		RefreshSomeEventListener();
	});
	// =================================================================



	// =============== HÀM CẬP NHẬT LẠI SÁCH THEO GIÁ ===============
	function priceFilterarrBook(type, word, firstVal, secondVal){
		var newArrBook = [];
		$.each(item, function (index) {
			var firstStr = item[index][type].toString().toLowerCase();
			var secondStr = word.toLowerCase();
			if (firstStr.includes(secondStr))
			{
				var itemVal =(item[index].price * (100 - item[index].sale) / 100);
				var intFirstVal = parseInt(firstVal);
				var intSecondVal = parseInt(secondVal);
				var intItemVal = parseInt(itemVal);
				if ((intFirstVal <= intItemVal) && (intItemVal <= intSecondVal)) 
				{
					var str1 = "", 
						str2 = "", 
						str3 = "";

					// Thêm vào tình trạng nếu có
					if (item[index].status !== "") {
						str1 += "<span>"+ item[index].status + "</span>";
					}

					// Thêm vào sale nếu có
					if (item[index].sale !== 0) {
						str1 += "<span class='sale'>-"+ item[index].sale + "%</span>";
					}


					// Nếu có giảm giá thì hiển thị giá mới và giá cũ, không giảm giá thì chỉ hiển thị giá
					var oldPrice = item[index].price.toLocaleString('de-DE');
					var newPrice = (item[index].price * (100 - item[index].sale) / 100).toLocaleString('de-DE');
					if (item[index].sale !== 0) {
						str2 += "<h3 class='product-price'><a>"+ newPrice + "đ </a><del class='product-old-price'>" + oldPrice + "đ</del></h3>";
					} else {
						str2 += "<h3 class='product-price'><a>"+ oldPrice + "đ </a></h3>";
					}

					// Chạy vòng lặp tạo sao
					var i;
					for (i = 0; i < 5; i++) {
						if (i < item[index].star) {
							str3 += "<i class='fa fa-star'></i>";
						} else {
							str3 += "<i class='fa fa-star-o empty'></i>";
						}
					}

					var productSingle = `	<!-- Product Single -->
												<div class="col-md-4 col-sm-6 col-xs-6">
													<div class="product product-single">
														<div class="product-thumb">
															<div class="product-label">`
																+ str1 + 
															`</div>
															<a href='` + urlToIndex + `product-page/` + item[index].html + `'><img src="`+ urlToIndex + `../assets/img/books/` + item[index].url + `" alt=''></a>
														</div>
														<div class="product-body">`
															+ str2 +
															`<div class="product-rating">`
																+ str3 +
															`</div>
															<h2 class="product-name"><a href="` + urlToIndex + `product-page/` + item[index].html + `">` + item[index].name + `</a></h2>
															<div class="product-btns" style="text-align: right">
																<button class="primary-btn add-to-cart" id="` + item[index].id + `"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
															</div>
														</div>
													</div>
												</div>
												<!-- /Product Single -->`;

					// Thêm vào mảng arrBook
					newArrBook.push(productSingle);
				}
			}
		});
		arrBook = newArrBook;
	}
	// ==============================================================



	// =============== XỬ LÝ KHI NGƯỜI DÙNG NHẤN NÚT LỌC THEO GIÁ ===============
	$('#price-filter-btn').on('click',function(){
		var firstVal = $('#first-price').val();
		var secondVal = $('#second-price').val();
		var iType = sortFilter.val();
		sortFilter.val(sortFilter.val());
		var iNumProduct = pageFilter.val();
		priceFilterarrBook(iType, searchWord, firstVal, secondVal);
		row.empty();
		if (arrBook.length == 0){
			$('.result-text').empty();
			$('.result-text').append('Không tìm thấy kết quả');
		} else {
			$('.result-text').empty();
			$('.result-text').append('Tìm thấy ' + arrBook.length + ' sản phấm')
		}
		for (var i = 0; i < numProduct[iNumProduct]; i++) {
			row.append(arrBook[i]);
		}
		updatePageNumber(pageFilter.val());
		RefreshSomeEventListener();
	});
	// ==========================================================================



	/*=============================================================================================================================================

	4. THỰC HIỆN CHỨC NĂNG ADD TO CART

	===============================================================================================================================================*/


	// =============== HÀM THÊM SÁCH VÀO GIỎ HÀNG ===============
	function addToCart(book){
		var newPrice = (book.price * (100 - book.sale) / 100).toLocaleString('de-DE');
		var htmlProductWidget = `	<div class="product product-widget" id="` + book.id + `">
										<div class="product-thumb">
											<img src="`+ urlToIndex + `../assets/img/books/`+ book.url + `" alt="">
										</div>
										<div class="product-body">
											<h3 class="product-price">` + newPrice +`đ <span class="qty">x1</span></h3>
											<h2 class="product-name"><a href="` + urlToIndex + `product-page/` + book.html + `">` + book.name + `</a></h2>
										</div>
										<button class="cancel-btn" id="` + book.id + `"><i class="fa fa-trash"></i></button>
									</div>`;
		$('.shopping-cart-list').append(htmlProductWidget);
		RefreshSomeEventListener();
	} // function addToCart
	// ==========================================================



	// =============== HÀM CẬP NHẬT GIỎ HÀNG (KHI KHÁCH CHỌN THÊM SẢN PHẨM CÓ SẴN TRONG GIỎ HÀNG) ===============
	function updateCart(book, quantity){
		var path = "#"+ book.id + " .product-body .product-price .qty";
		$(path).empty();
		$(path).append("x" + quantity);
	}
	// ==========================================================================================================



	// =============== BẮT SỰ KIỆN ADD TO CART ===============
	var cartBooks = [];
	var cartBooksAmount = [];
	$('.primary-btn.add-to-cart').on('click',function(){
		var curID = $(this).attr('id');
		$.each(item,function(i){
			if (item[i].id === curID)
			{	
				if ($.inArray(item[i], cartBooks) == -1)
				{
				  cartBooks.push(item[i]);
				  cartBooksAmount.push(1);
				  addToCart(item[i]);
				} else {
					cartBooksAmount[$.inArray(item[i], cartBooks)] += 1;
					updateCart(item[i],cartBooksAmount[$.inArray(item[i],cartBooks)]);
				}
				
				return false;
			}
		});
	});
	// =======================================================



	// =============== BẮT CỰ KIỆN XÓA SÁCH KHỎI GIỎ HÀNG ===============
	$('.product.product-widget').on('click','.cancel-btn',function(){
	    	var thisID = $(this).attr('id');
			var path = "#"+ thisID + ".product.product-widget";
			$(path).remove();

			var removeIndex;
			var newCartBooks = [];
			var newCartBooksAmount = [];
			$.each(cartBooks, function(i){
				if (cartBooks[i].id === thisID)
				{
					removeIndex = i;
				} else {
					newCartBooks.push(cartBooks[i]);
					newCartBooksAmount.push(cartBooksAmount[i]);
				}
			});
			
			cartBooks = newCartBooks;
			cartBooksAmount = newCartBooksAmount;
		});
	// ==================================================================


	// =============== REFRESH MỘT SỐ EVENT BẮT SỰ KIỆN ===============
	function RefreshSomeEventListener() {
	    $('.product.product-widget').off();
	    $('.product.product-widget').on('click','.cancel-btn',function(){
	    	var thisID = $(this).attr('id');
			var path = "#"+ thisID + ".product.product-widget";
			$(path).remove();

			var removeIndex;
			var newCartBooks = [];
			var newCartBooksAmount = [];
			$.each(cartBooks, function(i){
				if (cartBooks[i].id === thisID)
				{
					removeIndex = i;
				} else {
					newCartBooks.push(cartBooks[i]);
					newCartBooksAmount.push(cartBooksAmount[i]);
				}
			});
			
			cartBooks = newCartBooks;
			cartBooksAmount = newCartBooksAmount;
		});

	    $('.primary-btn.add-to-cart').off();
		$('.primary-btn.add-to-cart').on('click',function(){
			var curID = $(this).attr('id');
			$.each(item,function(i){
				if (item[i].id === curID)
				{	
					if ($.inArray(item[i], cartBooks) == -1)
					{
					  cartBooks.push(item[i]);
					  cartBooksAmount.push(1);
					  addToCart(item[i]);
					  RefreshSomeEventListener();
					} else {
						cartBooksAmount[$.inArray(item[i], cartBooks)] += 1;
						updateCart(item[i],cartBooksAmount[$.inArray(item[i],cartBooks)]);
					}
					
					return false;
				}
			});
		});
	}
	// ================================================================

});