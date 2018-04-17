$(function(){

    // Link ảnh, tên sách, giá , giá cũ, rate (sao), tình trạng (new), sale, nhà xuất bản, loại sách, view, số lượng bán
   var cate = "Khác";
 
    // Thêm tên nhà xuất bản vào breadcrumb
    $("#breadcrumb .container .breadcrumb").append("<li class='active'>"+cate+"</li>");
 
    $.each(item,function(index){
        if (item[index].category===cate){
            var divStr = "";
            divStr += "\
                <div class='col-md-4 col-sm-6 col-xs-6'>\
                 <div class='product product-single'>\
                     <div class='product-thumb'>\
                         <div class='product-label'>\
         ";
 
         // Thêm vào tình trạng nếu có
         if(item[index].status!==""){
             divStr+="\
                             <span>"+item[index].status+"</span>\
             ";
         }
 
         // Thêm vào sale nếu có
         if(item[index].sale!==0){
             divStr+="\
                             <span class='sale'>-"+item[index].sale+"%</span>\
             ";
         }
 
         // Thêm vào nút QuickView
         divStr+="\
                            </div>\
                         <button class='main-btn quick-view'><i class='fa fa-search-plus'></i> View</button>\
                         <img src='"+imgUrl+item[index].url+"' alt=''>\
                     </div>\
                     <div class='product-body'>\
         ";
 
         
         // Nếu có giảm giá thì hiển thị giá mới và giá cũ, không giảm giá thì chỉ hiển thị giá
         var oldPrice = item[index].price.toLocaleString('de-DE');
         var newPrice = (item[index].price * (100-item[index].sale)/100).toLocaleString('de-DE');
         if(item[index].sale!==0){
             divStr+="\
                         <h3 class='product-price'><a>"+newPrice+"đ </a><del class='product-old-price'>"+oldPrice+"đ</del></h3>\
             ";
         } else {
             divStr+="\
                         <h3 class='product-price'><a>"+item[index].price+"đ </a></h3>\
             ";
         }
 
         // Thêm vào rating (ngôi sao)
         divStr+="\
                            <div class='product-rating'>\
         ";
 
         // Chạy vòng lặp tạo sao
         var i;
         for (i=0; i<5; i++) {
             if (i<item[index].star) {
                 divStr+="\
                            <i class='fa fa-star'></i>\
                 ";
             } else {
                 divStr+="\
                            <i class='fa fa-star-o empty'></i>\
                 ";
             }
         }
 
         // Thêm vào tên của sách, các nút phía dưới và đóng lại thẻ <div>
         divStr+="\
                     </div>\
                      <h2 class='product-name'><a href='#''>"+item[index].name+"</a></h2>\
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
         $(".section .container .row #main #store .row").append(divStr);
     }
    });
 });
 
 
 