/*
 * 
 * Ghvzon
 * 銀行資料匯入 bankjs-v1.0
 *
 * 1.總覽,銀行排序,活動排序,篩選門檻
 * 2.詳情,銀行排序,活動排序
 * 
 */
 




//品牌列表及排序
var listSort = {
	  sony:[
        'sony_7RM3', 
        'sony_9', 
        'sony_RX10M4',
        'sony_RX10M3',
    ],
    NIKON:[
        'NIKON_A100',
        'NIKON_W100',
        'NIKON_A900',
    ],
    CANON:[
        'EOS-1Ds Mark III',
        'EOS-1D Mark IV',   
        'EOS-1DX',
        'EOS-1DX Mark II',
    ],
    DJI:[
        'Mavic 2',
        'Mavic air',
        'Mavic Pro',
        'Spark',
        'Tello',
        'P3/P4',
        'Ronin-S三軸',
        'ACTION',
    ],
    GoPro:[
        'GoPro_FUSION',
        'GoPro_KARMA',
        'GoPro_HERO 7',
        'GoPro_HERO 6',
        'GoPro_HERO 5',
        'GoPro_HERO 4',
        'GoPro_HERO 3',
        'GoPro_HERO',       
    ],
    Fujifilm:[
        'Fujifilm_X100F',
        'Fujifilm_X-A3',
        'Fujifilm_XP-120',
        'Fujifilm_XP-130',
        'Fujifilm_XT-20', 
    ],  
}; 	





//相機總覽
var cameralist = {
    
/*sony */
sony_9:{  //品牌_型號
	no: 'sony', //品牌
	url: '#',   //相機品號
	name:'9',   //型號
	series:'其他', //系列
	img:'https://img3.momoshop.com.tw/goodsimg/0005/406/921/5406921_R.jpg?t=1569347465', //圖片連結
	battery:[	
			['NP-FZ100','5259034'], //電池型號,品號
	],
	charger:[
			['BC-QZ1','5953486'], //充電器型號,品號
			['NPA-MQZ1K',''],
	],
	grip:[
			['VG-C3EM','4836478'], //垂直把手型號,品號
	],
},
　	
sony_7RM3:{
	no: 'sony',
	url: '5602996',
	name:'7RM3', 
	series:'其他',
	img: 'images/sony_7RM3.jpg',
	battery:[	
			['NP-FZ100', '5259034'],
	],
	charger:[
			['BC-QZ1',   '5953486'],
			['NPA-MQZ1K',''],
	],
	grip:[
			['VG-C3EM',   '4836478'],
	],
},
	
sony_RX10M4:{
	no: 'sony',
	url: '#',
	name:'RX10M4', 
	series:'RX10系列',
	img:'https://img4.momoshop.com.tw/goodsimg/0005/124/271/5124271_R.jpg?t=1548329932',
	battery:[	
			['xxx', 'xxx'],
			['xxx', 'xxx'],
			['xxx', 'xxx'],
			['xxx', 'xxx'],
	],
},
   
sony_RX10M3:{
	no: 'sony',
	url: '6688569',
	name:'RX10M3', 
	series:'RX10系列',
	img:'https://img4.momoshop.com.tw/goodsimg/0006/688/569/6688569_R.jpg?t=1566031616',
	battery:[	
			['xxXXXx', 'xxx'],
			['xxx', 'xxx'],
			['xxx', 'xxx'],
			['xxx', 'xxx'],
	],
},    
        
    
    
    
	
/*NIKON*/
NIKON_A100:{
	no: 'NIKON',
	url: '3852102',
	name:'A100', 
	series:'test',
	img:'https://img4.momoshop.com.tw/goodsimg/0003/852/102/3852102_R.jpg?t=1503020907',
	battery:[	
			['EN-EL19', '6587330'],
	],
	charger:[
			['MH-66', ''],
	],
	/*grip:[
			['', ''],
	],*/
},
    
NIKON_W100:{
	no: 'NIKON',
	url: '#',
	name:'W100', 
	series:'test',
	img:'images/NIKON_W100.jpg',
	battery:[	
			['xxx', 'xxx'],
	],
	charger:[
			['xxx', 'xxx'],
			['xxx', 'xxx'],
			['xxx', 'xxx'],
			['xxx', 'xxx'],
			['xxx', 'xxx'],
	],
	/*grip:[
			['xxx', 'xxx'],
	],*/
},	
    
/*CANON*/	
    
    
    
    
    
    
    
    
    
};









