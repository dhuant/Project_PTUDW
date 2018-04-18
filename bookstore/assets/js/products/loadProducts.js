$(function () {

	// Đường dẫn đến trang Index
	var urlToIndex = '../';

	// Mảng để phân loại trang Products
	var arrType = {
		'nxb': 'Nhà Xuất Bản',
		'category': 'Category',
	};
	

	/*=============================================================================================================================================

	1. LOAD CÁC THUỘC TÍNH CẦN THIẾT CHO TRANG

	=============================================================================================================================================*/


	// =============== THÊM VÀO .CSS CHO TRANG PRODUCTS ===============
	var htmlStyle = `<style>
						.product.product-single .product-thumb a img {
							width: 100%;
							height: 360px;
						}
						.product.product-single .product-thumb:after {
							position: static;
						}
						.product.product-single .product-body {
							padding: 8px;
						}
						.col-md-4.col-sm-6.col-xs-6 {
							height: 544px;
						}
					</style>`;
	$('head').append(htmlStyle);
	// ================================================================



	// =============== THÊM HEADER VÀO TRANG PRODUCTS =================
	var htmlHeader = `	<!-- header -->
						<div id="header">
							<div class="container">
								<div class="pull-left">
									<!-- Logo -->
									<div class="header-logo">
										<a class="logo" href="`+ urlToIndex + `index.html">
											<img src="`+ urlToIndex + `../assets/img/logo.png" alt="">
										</a>
									</div>
									<!-- /Logo -->

									<!-- Search -->
									<div class="header-search">
										<form>
											<input class="input search-input" type="text" placeholder="Search entire store here...">
											<button class="search-btn"><i class="fa fa-search"></i></button>
										</form>
									</div>
									<!-- /Search -->
								</div>
								<div class="pull-right">
									<ul class="header-btns">
										<!-- Account -->
										<li class="header-account dropdown default-dropdown">
											<div class="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="true">
												<div class="header-btns-icon">
													<i class="fa fa-user-o"></i>
												</div>
												<strong class="text-uppercase">My Account <i class="fa fa-caret-down"></i></strong>
											</div>
											<a href="` + urlToIndex + `login.html" class="text-uppercase">Login</a> / <a href="#" class="text-uppercase">Join</a>
											<ul class="custom-menu">
												<li><a href="#"><i class="fa fa-user-o"></i> My Account</a></li>
												<li><a href="#"><i class="fa fa-heart-o"></i> My Wishlist</a></li>
												<li><a href="#"><i class="fa fa-exchange"></i> Compare</a></li>
												<li><a href="#"><i class="fa fa-check"></i> Checkout</a></li>
												<li><a href="#"><i class="fa fa-unlock-alt"></i> Login</a></li>
												<li><a href="#"><i class="fa fa-user-plus"></i> Create An Account</a></li>
											</ul>
										</li>
										<!-- /Account -->

										<!-- Cart -->
										<li class="header-cart dropdown default-dropdown">
											<a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
												<div class="header-btns-icon">
													<i class="fa fa-shopping-cart"></i>
													<!-- <span class="qty">3</span> -->
												</div>
												<strong class="text-uppercase">My Cart:</strong>
												<br>
												<span>0.00$</span>
											</a>
											<div class="custom-menu">
												<div id="shopping-cart">
													<div class="shopping-cart-list">
														<div class="product product-widget">
															<div class="product-thumb">
																<img src="../assets/img/thumb-product01.jpg" alt="">
															</div>
															<div class="product-body">
																<h3 class="product-price">$32.50 <span class="qty">x3</span></h3>
																<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
															</div>
															<button class="cancel-btn"><i class="fa fa-trash"></i></button>
														</div>
														<div class="product product-widget">
															<div class="product-thumb">
																<img src="../assets/img/thumb-product01.jpg" alt="">
															</div>
															<div class="product-body">
																<h3 class="product-price">$32.50 <span class="qty">x3</span></h3>
																<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
															</div>
															<button class="cancel-btn"><i class="fa fa-trash"></i></button>
														</div>
													</div>
													<div class="shopping-cart-btns">
														<button class="main-btn">View Cart</button>
														<button class="primary-btn">Checkout <i class="fa fa-arrow-circle-right"></i></button>
													</div>
												</div>
											</div>
										</li>
										<!-- /Cart -->

										<!-- Mobile nav toggle-->
										<li class="nav-toggle">
											<button class="nav-toggle-btn main-btn icon-btn"><i class="fa fa-bars"></i></button>
										</li>
										<!-- / Mobile nav toggle -->
									</ul>
								</div>
							</div>
							<!-- header -->
						</div>
						<!-- container -->`;
	$('header').prepend(htmlHeader);
	// ================================================================



	// =============== THÊM NAVIGATION BAR VÀO TRANG PRODUCTS ===============
	var htmlNav = `	<!-- container -->
						<div class="container">
							<div id="responsive-nav">
								<!-- category nav -->
								<div class="category-nav show-on-click">
									<span class="category-header">DANH MỤC<i class="fa fa-list"></i></span>
									<ul class="category-list">
										<li class="dropdown side-dropdown">
											<a href="` + urlToIndex + `products/thieunhi.html" class="dropdown-toggle" aria-expanded="true">THIẾU NHI</a>
										</li>
										<li class="dropdown side-dropdown">
											<a href="` + urlToIndex + `products/ngoaingu.html" class="dropdown-toggle" aria-expanded="true">NGOẠI NGỮ</a>
										</li>
										<li class="dropdown side-dropdown">
											<a href="` + urlToIndex + `products/vanhoc.html" class="dropdown-toggle" aria-expanded="true">VĂN HỌC</a>
										</li>
										<li class="dropdown side-dropdown">
											<a href="` + urlToIndex + `products/kinhte.html" class="dropdown-toggle" aria-expanded="true">KINH TẾ</a>
										</li>
										<li class="dropdown side-dropdown">
											<a href="` + urlToIndex + `products/khac.html" class="dropdown-toggle" aria-expanded="true">KHÁC</a>
										</li>
									</ul>
								</div>
								<!-- /category nav -->

								<!-- menu nav -->
								<div class="menu-nav">
									<span class="menu-header">Menu <i class="fa fa-bars"></i></span>
									<ul class="menu-list">
										<li><a href="` + urlToIndex + `dailydeals.html">DAILY DEALS</a></li>
									</ul>
								</div>
								<!-- menu nav -->
							</div>
						</div>
						<!-- /container -->`;
	$('#navigation').append(htmlNav);
	// ======================================================================



	// =============== THÊM BREADCRUMB VÀO TRANG PRODUCTS ===============
	var htmlBreadcrumb = `	<div class="container">
								<ul class="breadcrumb">
									<li><a href="` + urlToIndex + `index.html">Home</a></li>
									<li><a >` + arrType[htmlType] + `</a></li>
									<li class='active'>` + proName + `</li>
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
										<img class="img-a" src="` + urlToIndex + `../assets/img/aside/01.jpg" alt="">
									</div>
									<div class="aside">
										<img class="img-a" src="` + urlToIndex + `../assets/img/aside/02.jpg" alt="">
									</div>

								</div>
								<!-- /ASIDE -->

								<!-- MAIN -->
								<div id="main" class="col-md-9">
									<!-- store top filter -->
									<div class="store-filter clearfix">
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



	// =============== THÊM FOOTER VÀO TRANG PRODUCTS ===============
	var htmlFooter = `	<div class="container">
							<!-- row -->
							<div class="row">
								<!-- footer widget -->
								<div class="col-md-3 col-sm-6 col-xs-6">
									<div class="footer">
										<!-- footer logo -->
										<div class="footer-logo">
											<a class="logo" href="#">
												<img src="` + urlToIndex + `../assets/img/logo.png" alt="">
											</a>
										</div>
										<!-- /footer logo -->

										<p>Tòa nhà I Town, 227 Nguyễn Văn Cừ Quận 5 TP HCM</p>
									</div>
								</div>
								<!-- /footer widget -->

								<!-- footer widget -->
								<div class="col-md-3 col-sm-6 col-xs-6">
									<div class="footer">
										<h3 class="footer-header">dịch vụ</h3>
										<ul class="list-links">
											<li>
												<a href="#">Điều khoản sử dụng</a>
											</li>
											<li>
												<a href="#">chính sách bảo mật</a>
											</li>
											<li>
												<a href="#">Giới thiệu BookStore</a>
											</li>
											<li>
												<a href="#">Hệ thống trung tâm - nhà sách</a>
											</li>
										</ul>
									</div>
								</div>
								<!-- /footer widget -->

								<div class="clearfix visible-sm visible-xs"></div>

								<!-- footer widget -->
								<div class="col-md-3 col-sm-6 col-xs-6">
									<div class="footer">
										<h3 class="footer-header">Hỗ trợ</h3>
										<ul class="list-links">
											<li>
												<a href="#">Chính sách đổi - trả</a>
											</li>
											<li>
												<a href="#">Chính sách khách sỉ</a>
											</li>
											<li>
												<a href="#">Phương thức vận chuyển</a>
											</li>
											<li>
												<a href="#">Phương thức thanh toán</a>
											</li>
										</ul>
									</div>
								</div>
								<!-- /footer widget -->

								<!-- footer subscribe -->
								<div class="col-md-3 col-sm-6 col-xs-6">
									<div class="footer">
										<h3 class="footer-header">liên hệ</h3>
										<ul class="list-links">
											<li>
												<a href="javascript:;">
													<i class="fa fa-map-marker">&nbsp;&nbsp;&nbsp;</i>227 Nguyễn Văn Cừ Quận 5 TP HCM
												</a>
											</li>
											<li>
												<a href="javascript:;">
													<i class="fa fa-envelope">&nbsp;&nbsp;</i>bookstore@gmail.com
												</a>
											</li>
											<li>
												<a href="javascript:;">
													<i class="fa fa-facebook-square">&nbsp;&nbsp;</i>facebook.com/bookstore
												</a>
											</li>
											<li>
												<a href="javascript:;">
													<i class="fa fa-phone-square">&nbsp;&nbsp;</i>19001000
												</a>
											</li>
										</ul>
									</div>
								</div>
								<!-- /footer subscribe -->
							</div>
							<!-- /row -->
							<hr>
							<!-- row -->
							<div class="row">
								<div class="col-md-8 col-md-offset-2 text-center">
									<!-- footer copyright -->
									<div class="footer-copyright">
										THE BEST ONLINE BOOK STORE FOR YOU - BOOKSTORE WITH LOVE
									</div>
									<!-- /footer copyright -->
								</div>
							</div>
							<!-- /row -->
						</div>`;
	$('#footer').append(htmlFooter);
	// ==========================================================================



	// =============== THÊM VÀO DROPDOWN CHO MENU DANH MỤC =================
	var responsiveNav = $('#responsive-nav'),
    catToggle = $('#responsive-nav .category-nav .category-header'),
    catList = $('#responsive-nav .category-nav .category-list'),
    menuToggle = $('#responsive-nav .menu-nav .menu-header'),
    menuList = $('#responsive-nav .menu-nav .menu-list');

	$('.dropdown.side-dropdown').hover(function(){
	    $(this).toggleClass('open');},
	    function(){
	    $(this).removeClass('open');
	})

	$('.dropdown.mega-dropdown').hover(function(){
	    $(this).toggleClass('open');},
	    function(){
	    $(this).removeClass('open');
	})

	catToggle.on('click', function() {
	    menuList.removeClass('open');
	    catList.toggleClass('open');
	});

	menuToggle.on('click', function() {
	    catList.removeClass('open');
	    menuList.toggleClass('open');
	});
	// ====================================================================



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
				str2 += "<h3 class='product-price'><a>"+ item[index].price + "đ </a></h3>";
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
													<a href='../index.html'><img src="`+ imgUrl + item[index].url + `" alt=''></a>
												</div>
												<div class="product-body">`
													+ str2 +
													`<div class="product-rating">`
														+ str3 +
													`</div>
													<h2 class="product-name"><a href="#">` + item[index].name + `</a></h2>
													<div class="product-btns">
														<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
														<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
														<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
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