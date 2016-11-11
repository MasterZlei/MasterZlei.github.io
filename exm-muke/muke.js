window.onload=function () {
	function $(x) {
		return document.querySelector(x);
	}
	function $s(x) {
		return document.querySelectorAll(x);
	}


	// 顶部搜索框点击初始化
	var oInput =$('.search-input input');
	oInput.onclick=function() {
		oInput.value='';
	}
	// 顶部二维码
	var phone=$('.phone-wrap');
	var code=$s('.login ol li');
	code[0].onmouseover=function () {
		phone.style.display='block'
	}
	code[0].onmouseout=function () {
		phone.style.display='none'
	}
	// 底部微信二维码
	var weiXin=$('.weixin');
	var weiXinW=$('.weixin-wrap');
	weiXin.onmouseover=function () {
		weiXinW.style.display='block'
	}
	weiXin.onmouseout=function () {
		weiXinW.style.display='none'
	}

	// 顶部导航栏样式
	var item=$s('.nav-menu .item');
	var itemWrap=$s('.top-container');
	for (var i = 0; i < item.length; i++) {
		item[i].index=i;
		itemWrap[i].index=i;	
		item[i].onmouseover=function () {
			itemWrap[this.index].style.display='block'
		}
		item[i].onmouseout=function () {
			itemWrap[this.index].style.display='none'
		}
		itemWrap[i].onmouseover=function () {
			itemWrap[this.index].style.display='block'
		}
		itemWrap[i].onmouseout=function () {
			itemWrap[this.index].style.display='none'
		}
	}
	//顶部图片切换

	var arr=['top-bg1.jpg','top-bg2.jpg']
	var top=$('.top')
	var circle=$s('.circle>span')
	var num=0;
		// 定时器效果
	
	function fn(){
		timer=setInterval(function (){
			circle[num].className=''
			num++		
			if (num==arr.length) {num=0}
			top.style.background='url('+arr[num]+')';
			circle[num].className='opacity1';
		},3000)
	}
		// 点击效果
	var last=$('.last')
	var next=$('.next')
	fn()
	console.log(typeof(fn))
	top.onmouseover=function () {
		clearInterval(timer)
	}
	top.onmouseout=function () {
		fn()
	}
	last.onclick=function () {
		circle[num].className='';
		if (num==0) {
			top.style.background='url('+arr[arr.length-1]+')';
			circle[arr.length-1].className='opacity1';
			num=arr.length-1}
		else{top.style.background='url('+arr[num-1]+')'
			circle[num-1].className='opacity1';
			num--;
		}
	}
	next.onclick=function () {
		circle[num].className='';
		if (num==arr.length-1) {
			top.style.background='url('+arr[0]+')';
			circle[0].className='opacity1';
			num=0}
		else{top.style.background='url('+arr[num+1]+')'
			circle[num+1].className='opacity1';
			num++;
		}

	}
	for (var i = 0; i < arr.length; i++) {
		circle[i].index=i
		circle[i].onclick=function () {
			for (var i = 0; i < arr.length; i++) {
				circle[i].className=''
			}
			circle[this.index].className='opacity1';
			top.style.background='url('+arr[this.index]+')';
			num=this.index;
		}

	}
	
	
	








}