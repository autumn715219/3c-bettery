
$(function () { 

});



$(window).load(function(){


	
	/*�W�a�[�X��PC*/
	var Area7_Swiper = new Swiper('.PD .box', {
        //�p���I-���Iswiper-pagination-white, ���Iswiper-pagination-black
        pagination: '.PD .swiper-pagination',  
        paginationClickable: true, //Ĳ������
        //���k����-�զ�b�Yswiper-button-white, �¦�b�Yswiper-button-black
        nextButton: '.PD .swiper-button-next', 
        prevButton: '.PD .swiper-button-prev',
        //��
        
		centeredSlides: false, //��e�϶��~��
        loop: true, //�L���`��
        //�ƪ�
        slidesPerView: 1, //��ܴX��
        slidesPerGroup: 1, //�@�������X��
        spaceBetween: 0, //���Z
		//�۰ʼ���
        autoplay: 3000, //�۰ʽ������j�ɶ�
        autoplayDisableOnInteraction: false, //Ĳ�����٬O�|�A�۰ʽ���

        //�����S��(�H��)
        effect: 'fade',     //�����S�� fade(�H��) cube(�ߤ���) coverflow(3D) flip(½�P)
        fade: {
            crossFade: true //���}�۰ʲH�X
        },

	});
	
	/*�W�a�[�X��MB*/
	var Area8_Swiper = new Swiper('.Area8 .box', {
        //�p���I-���Iswiper-pagination-white, ���Iswiper-pagination-black
        pagination: '.Area8 .swiper-pagination',  
        paginationClickable: true, //Ĳ������
        //���k����-�զ�b�Yswiper-button-white, �¦�b�Yswiper-button-black
        nextButton: '.Area8 .swiper-button-next', 
        prevButton: '.Area8 .swiper-button-prev',
        //��
        
		centeredSlides: true, //��e�϶��~��
        loop: true, //�L���`��
        //�ƪ�
        slidesPerView: 1, //��ܴX��
        slidesPerGroup: 1, //�@�������X��
        spaceBetween: 0, //���Z
		//�۰ʼ���
        autoplay: 5000, //�۰ʽ������j�ɶ�
        autoplayDisableOnInteraction: false, //Ĳ�����٬O�|�A�۰ʽ���
	});
		
	
	
	
	
});
