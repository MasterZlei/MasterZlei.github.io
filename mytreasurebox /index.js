function $(x){
	return document.querySelector(x)
}
function $s(x){
	return document.querySelectorAll(x)
}
var item=$s('.openedBox li')
var data=data;
var openedBox=data.openedBox;
var htmlOpen='';


// 已开宝箱的动态
for (var i = 0; i < openedBox.length; i++) {
	if (openedBox[i].type==1) {
		htmlOpen+='<li class="redBag">'+
				'<h3>'+openedBox[i].title+'</h3>'+
				'<span>￥<i>'+openedBox[i].num+'</i></span></li>'
	}else if(openedBox[i].type==2){
		htmlOpen+='<li class="flow">'+
				'<h3>'+openedBox[i].title+'</h3>'+
				'<span><i>'+openedBox[i].num+'</i>MB</span></li>'	
	}
	else if(openedBox[i].type==3){
		htmlOpen+='<li class="lottery">'+
				'<h3>'+openedBox[i].title+'</h3></li>'	
	}
}

var noneNum=4-openedBox.length
// console.log(noneNum)
for (var j = 0; j < noneNum; j++) {
	htmlOpen+='<li class="noBox">未获得</li>'
}
$('.openedBox>ol').innerHTML=htmlOpen

// 未开宝箱的动态
var closeBox=data.closedBox
var htmlClose='<li>';
for (var i = 0; i < closeBox.length; i++) {
	htmlClose+='<div class="boxStyle">'+
					'<img src='+'"'+closeBox[i].img+'"'+'>'+
					'<div class="boxNum">x<i>'+closeBox[i].num+'</i></div>'+
				'</div>'
	if (i+1==closeBox.length) {
		htmlClose+='</li>'}
	else if((i+1)%3==0 && i!=closeBox.length){
		htmlClose+='</li><li>'
	}
}
$('.closedBox>ol').innerHTML=htmlClose








// 触摸点的动态
var circle=$('.circle')
var closeOlLi=$s('.closedBox>ol>li')
var htmlCircle=''
// console.log(closeOlLi)
for (var i = 0; i < closeOlLi.length; i++) {
	if (closeOlLi.length!=1) {
		htmlCircle+='<span></span>'
	}
}

$('.closedBox .circle').innerHTML=htmlCircle


var circleSpan=$s('.circle span')
// console.log(circleSpan.length)
if (circleSpan.length!=1 && circleSpan.length!=0) {
	circleSpan[0].style.background='#534c4c'
}





// 未开宝箱的上下翻页
var next=$('.next')
var prev=$('.prev')
var closeOl=$('.closedBox ol')
var ml='0px'
closeOl.style.marginLeft=ml
var obtn=0;
next.onmouseover=function () {
	next.style.background='rgba(0,0,0,.5)'
}
next.onmouseout=function () {
	next.style.background=''
}
prev.onmouseover=function () {
	prev.style.background='rgba(0,0,0,.5)'
}
prev.onmouseout=function () {
	prev.style.background=''
}
if (circleSpan.length<2) {
	next.style.display='none'
	prev.style.display='none'
}
else{
	prev.style.display='none'
}
// 未开宝箱小点的js
for (var i = 0; i < circleSpan.length; i++) {
	circleSpan[i].index=i;
	circleSpan[i].onmouseover=function(){
		// console.log(this.index)
		ml=(-562)*this.index+'px'
		closeOl.style.marginLeft=ml
		obtn=this.index
		// 初始上下页按键
		next.style.display='block'
		prev.style.display='block'
		for (var j = 0; j < circleSpan.length; j++) {
			circleSpan[j].style.background=''
		}
		circleSpan[this.index].style.background='#534c4c'
		if (obtn==closeOlLi.length-1) {
			next.style.display='none'
		}else if (obtn==0) {
			prev.style.display='none'
		}
	}

}
next.onclick=function () {
	prev.style.display='block'
	obtn++
	circleSpan[obtn].style.background='#534c4c'
	circleSpan[obtn-1].style.background=''
	ml=parseInt(closeOl.style.marginLeft)+(-562)+'px'
	closeOl.style.marginLeft=ml
	if (obtn==closeOlLi.length-1) {
		next.style.display='none'
	}		
}
prev.onclick=function () {
	next.style.display='block'
	obtn--
	ml=parseInt(closeOl.style.marginLeft)+562+'px'
	closeOl.style.marginLeft=ml			
	circleSpan[obtn].style.background='#534c4c'
	circleSpan[obtn+1].style.background=''
	if (obtn==0) {
		prev.style.display='none'
	}
}

// 未开宝箱数量
var closedBoxNum=$('.closedBox h2 i')
var boxStyleNum=$s('.closedBox ol .boxStyle')
closedBoxNum.innerHTML=boxStyleNum.length




// 合作方动态
var partner=data.partner
var htmlPartner=''
for (var i = 0; i < partner.length; i++) {
	htmlPartner+='<li><img src='+'"'+partner[i].imgBg+'"'+'><img src='+'"'+partner[i].img+'"'+'><p>'+partner[i].p+'</p></li>'
}

$('.partner ol').innerHTML=htmlPartner

//点击开宝箱
var boxStyle= $s('.boxStyle');
var boxStyleImg=$s('.boxStyle img')
var boxStyleI=$s('.boxStyle i')
for (var i = 0; i < boxStyle.length; i++) {
	boxStyle[i].index=i;
	boxStyle[i].onclick=function () {
		// console.log(boxStyleI[this.index].innerHTML)
		// console.log(boxStyleI[this.index].innerHTML-1)
		var iHTML=boxStyleI[this.index].innerHTML-1
		boxStyleI[this.index].innerHTML=iHTML
		// console.log(closeBox[this.index].imgEX)
		boxStyleImg[this.index].src=closeBox[this.index].imgEX
		var tI=this.index
		setTimeout(function () {
			// console.log(tI)
			boxStyleImg[tI].src=closeBox[tI].img
		},1000)

	}
}




