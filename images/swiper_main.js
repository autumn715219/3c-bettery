
$(function () { 

});



$(window).load(function(){


	
	/*獨家加碼贈PC*/
	var Area7_Swiper = new Swiper('.PD .box', {
        //小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
        pagination: '.PD .swiper-pagination',  
        paginationClickable: true, //觸擊切換
        //左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black
        nextButton: '.PD .swiper-button-next', 
        prevButton: '.PD .swiper-button-prev',
        //基本
        
		centeredSlides: false, //當前區塊居中
        loop: true, //無限循環
        //排版
        slidesPerView: 1, //顯示幾個
        slidesPerGroup: 1, //一次切換幾個
        spaceBetween: 0, //間距
		//自動撥放
        autoplay: 3000, //自動輪播間隔時間
        autoplayDisableOnInteraction: false, //觸擊後還是會再自動輪播

        //切換特效(淡化)
        effect: 'fade',     //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌)
        fade: {
            crossFade: true //打開自動淡出
        },

	});
	
	/*獨家加碼贈MB*/
	var Area8_Swiper = new Swiper('.Area8 .box', {
        //小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
        pagination: '.Area8 .swiper-pagination',  
        paginationClickable: true, //觸擊切換
        //左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black
        nextButton: '.Area8 .swiper-button-next', 
        prevButton: '.Area8 .swiper-button-prev',
        //基本
        
		centeredSlides: true, //當前區塊居中
        loop: true, //無限循環
        //排版
        slidesPerView: 1, //顯示幾個
        slidesPerGroup: 1, //一次切換幾個
        spaceBetween: 0, //間距
		//自動撥放
        autoplay: 5000, //自動輪播間隔時間
        autoplayDisableOnInteraction: false, //觸擊後還是會再自動輪播
	});
		
	
	
	
	
});
