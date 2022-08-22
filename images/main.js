
/* mouseover */
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}




/* 回版頭 */
jQuery(function(){
	jQuery("#gotop").click(function(){
		jQuery("html,body").stop(true,false).animate({scrollTop:0},700); //設定回頁面頂端
		return false;	
	});
    jQuery(window).scroll(function() {
        if ( jQuery(this).scrollTop() >300){ //設定大於300px才顯示浮層
            jQuery('#gotop').stop(true,true).fadeIn("fast");
        } else {
            jQuery('#gotop').stop(true,true).fadeOut("fast");
        }
    });
});

/* 滑動的GOTO */
function goTop(val) {
	if($(window).width() > 767 ){
		var gotop_i = 150;
	} else {
		var gotop_i = 100;
	}
	jQuery('html,body').animate({scrollTop: jQuery(val).offset().top - gotop_i },700);
}

/*開關PC黏人精*/
$(function(){
	var $fixed_Area = $('.fixed_Area');
	//預設進場
	setTimeout( function(){ $fixed_Area.toggleClass('fixed_Area_hide') } ,1500)
	//點擊切換
	$fixed_Area.find('.js-fixed_Area_hide').click(function(){
		$fixed_Area.toggleClass('fixed_Area_hide');
	})
});



/*TimeSwitch指定時間開關物件
  -----------------------------------------------
  啟動器: data-TimeSwitch_start="2018/2/12 00:00:00" data-TimeSwitch_end="2018/2/20 23:59:59" data-TimeSwitch_Myswitch="0"
  說明:
  data-TimeSwitch_start		開始時間
  data-TimeSwitch_end		結束時間
  data-TimeSwitch_Myswitch	動作 0刪除、1打開
  -----------------------------------------------*/
$(function() {
	$("[data-TimeSwitch_start]").each(function() {
		var TimeSwitch = new Date();
		var TimeSwitchmonth  = TimeSwitch.getMonth()+1; //月
		var TimeSwitchday    = TimeSwitch.getDate(); //日
		var TimeSwitchhour   = TimeSwitch.getHours();  //時
		var TimeSwitchminute = TimeSwitch.getMinutes();  //分
		var TimeSwitchsecond = TimeSwitch.getSeconds();  //秒
		var TimeSwitchweek   = TimeSwitch.getDay(); //星期0~6 
		if( TimeSwitchmonth < 10 ){TimeSwitchmonth = '0' + TimeSwitchmonth;}  
		if( TimeSwitchday   < 10 ){TimeSwitchday   = '0' + TimeSwitchday;}  
		//範圍時間
		var Mydate_start = new Date( $(this).attr('data-TimeSwitch_start') );
		var Mydate_end   = new Date( $(this).attr('data-TimeSwitch_end') );
		var Myswitch     = $(this).attr('data-TimeSwitch_Myswitch') ;
		//Myswitch = 0 隱藏
		if ( Myswitch == 0){
				if ( Mydate_start <= TimeSwitch && TimeSwitch <= Mydate_end ) {
						$(this).remove();  //Myswitch:0, 時間內,刪除
				} else {
						$(this).show();  //Myswitch:0, 時間外,打開
				}
		}
		//Myswitch = 1 打開
		if ( Myswitch == 1){
				if ( Mydate_start <= TimeSwitch && TimeSwitch <= Mydate_end ) {
						$(this).show();   //Myswitch:1, 時間內,打開
				} else {
						$(this).remove();   //Myswitch:1, 時間外,刪除
				}
		}
	});
});



$(function(){
	
	/*頁籤開關動作*/
	var $tabPanel = $('.menu'),
		$tabs = $tabPanel.find('.labelbox'),
		$tab = $tabs.find('li'),
		$tabContent = $('.content'),
		$content = $tabContent.find('> .page');
		$tab.eq(0).addClass('selected');
		$content.eq(0).show();
		$tab.click(function(){
			var $tabIndex = $(this).index();
			$(this).addClass('selected').siblings().removeClass('selected');
			$content.eq($tabIndex).show().siblings().hide();
		});	

	

	
});
	


