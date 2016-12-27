window.onload=function(){//window添加onload事件
	var cztma=getClass("cztma");//获取元素
	var liebiaotu=getClass("liebiaotu");//获取元素

	for(var i=0;i<cztma.length;i++){//3个cztma添加移入事件
		cztma[i].name=i;//三个cztma添加一个相同的对象，存储各自下标
		cztma[i].onmouseover=function(){
			for(var j=0;j<cztma.length;j++){//把类名变成隐藏属性的那个，同时显示没有隐藏属性的那个
				liebiaotu[j].className="liebiaotu"
				cztma[j].className="cztma"
				//事件内部用下标 this.属性名

			}
			liebiaotu[this.name].className="liebiaotu liebiaotu-active"
			//给相对应的con和cztma添加类名
			cztma[this.name].className="cztma cztma-active"
			//this移入谁指谁
		}
	}

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