window.onload=function(){//window添加onload事件
	var aaxc=getClass("aaxc");//获取元素
	var yintaibai=getClass("yintaibai");//获取元素

	for(var i=0;i<aaxc.length;i++){//3个aaxc添加移入事件
		aaxc[i].name=i;//三个aaxc添加一个相同的对象，存储各自下标
		aaxc[i].onmouseover=function(){
			for(var j=0;j<aaxc.length;j++){//把类名变成隐藏属性的那个，同时显示没有隐藏属性的那个
				yintaibai[j].className="yintaibai"
				aaxc[j].className="aaxc"
				//事件内部用下标 this.属性名

			}
			yintaibai[this.name].className="yintaibai yintaibai-active"
			//给相对应的con和aaxc添加类名
			aaxc[this.name].className="aaxc aaxc-active"
			//this移入谁指谁
		};
	}
}