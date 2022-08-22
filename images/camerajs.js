/*
 * 
 * Ghvzon
 * 銀行資料匯入 bankjs-v1.0
 *
 * 1.總覽,銀行排序,活動排序,篩選門檻
 * 2.詳情,銀行排序,活動排序
 * 
 */

//組出總覽HTML
function list_append($con,brand,card_no) {

	//上傳圖片路徑
	var src = $('#artjs').attr('src');
	var imgEcm  = src.substring(0,src.indexOf("images\/"));
	var imgEcm_t = '?t=' + new Date().getTime();
    //組出卡片內容
	if( cameralist[card_no] ){
		var cardHTML = '';
		var no     = cameralist[card_no].no;		//
		var name   = cameralist[card_no].name;	//
		var series  = cameralist[card_no].series;	//
		var url  = cameralist[card_no].url;	//
		var img = cameralist[card_no].img;
		var battery = cameralist[card_no].battery;
		var charger = cameralist[card_no].charger;
		var grip = cameralist[card_no].grip;
		cardHTML =   '		<li class="card_wrap" data-lv="'+ series +'">'
					+'			<div class="card_bar">'
					+'				<div class="logo"><img src="images/'+ img + no +'.png" alt=""></div>'
					+'				<div class="name">'+ name +'</div>'
					+'			</div>'
					+'			<div class="con">'
					+'				<div class="card_img"><a href="https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code='+ url +'"><img src="'+ img +'" alt=""></a></div>'
					+'				<div class="card_txt">'
        
                    //電池
					cardHTML +=' <p><small>電池</small>'
					if( battery ){ for( var b_i=0 ;b_i < battery.length; b_i++) {
						var battery_name = battery[b_i][0];	//狀態
						var battery_url = battery[b_i][1];	//時間
						cardHTML +='<a href="https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code='+ battery_url +'">'+ battery_name +'+</a>'
					}};
					cardHTML +=' </p>'

                    //充電器
					if( charger ) {cardHTML +='<p><small>充電器</small>'};					
					if( charger ){ for( var c_i=0 ;c_i < charger.length; c_i++) {
						var charger_name = charger[c_i][0];	//狀態
						var charger_url = charger[c_i][1];	//時間
                        //console.log(charger_name);
						cardHTML +='<a href="https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code='+ charger_url +'">'+ charger_name +'</a>'
					}};
					if( charger ) {cardHTML +=' </p>'};					


                    //垂直把手
					if( grip ) {cardHTML +=' <p><small>垂直把手</small>'};					
                    if( grip ){ for( var g_i=0 ;g_i < grip.length; g_i++) {
						var grip_name = grip[g_i][0];	//狀態
						var grip_url = grip[g_i][1];	//時間                        
						cardHTML +='<a href="https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code='+ grip_url +'">'+ grip_name +'</a>'
					}};
					if( grip ) {cardHTML +='</p>'};					

        			
          cardHTML +='				</div>'
					+'			</div>'
					+'		</li>'
		$con.find('#'+ brand).find('ul').append(cardHTML)
	};
	
};	


/*總覽*/
$(function(){
	//依品牌匯入
	var $con = $('#Area_List');
	var brand = ['sony','NIKON']; //要匯入的品牌
    for (var i=0; i<brand.length; i++){
        $con.find('#'+ brand[i] ).each(function(){
            for(var j=0 ; j< listSort[brand[i]].length; j++) {
                var card_no = listSort[brand[i]][j];
                if(typeof(card_no) != 'undefined') {
                    list_append($con,brand[i],card_no);
                };
            };		
        });
    };
});

//篩選
function searchlv(brand,val){
	$('#'+ brand +' [data-lv]').each(function(i, e) {
		var lv = $(this).attr('data-lv');
		if( lv.indexOf(val) >= 0 ){
			$(this).show();
		}else{
			$(this).hide();
		}
		if( val == 'ALL'){ 
			$(this).show(); 
		}
	})
}

$(function(){
	$('.Area_searchlv li').eq(0).addClass('cate-hover');
	$('.Area_searchlv').delegate('li','click',function(){
		var $con = $(this);
		$con.addClass('cate-hover').siblings().removeClass('cate-hover');
	});
});

