/*********************************************/
//1.解决类名的兼容问题
function getClass(classname,father){
	father=father||document;
	//判断浏览器
	if(father.getElementsByClassName){//现有的标签
	   return father.getElementsByClassName(classname);//输出现有的浏览器
	}else{
		var all=father.getElementsByTagName("*");//所有的标签
		var newarr=[];
		for(var i=0;i<all.length;i++){//遍历 判断
			if(checkRep(classname,all[i].className)){//标签.className==classname
			newarr.push(all[i]);//条件满足 保留标签添加arr[i]所对应的下标
			}
		};

          return newarr;//返回新数组
	}
}
function checkRep(val,string){//把inner two获取
	var arr=string.split(" ");//把这个字符串用分隔符分开
	for(var i in arr){  //遍历取出来的字符串
		if(arr[i]==val){//如果和classname相等
			return true;//返回真
		}
	}
     return false;//返回假
}



	function getStyle(obj,attr){
	if(obj.currentStyle){
		return parseInt(obj.currentStyle[attr]);
	}else{
		return parseInt(getComputedStyle(obj,null)[attr]);

	}
}

function $(selector,father){
	father=father||document;
	if(typeof selector=="string"){
		selector=selector.replace(/^\s*|\s*$/g,"")//去除字符串前后空格
		if(selector.charAt(0)=="."){//判断类名
			return getClass(selector.substring(1),father);
		}
		else if(selector.charAt(0)=="#"){//判断ID
			return document.getElementById(selector.substring(1));
		}
		else if(/^[a-z][1-6 a-z]*/g.test(selector)){//判断标签
			return father.getElementsByTagName(selector);
		}
	}else if(typeof selector=="function"){
		window.onload=function(){//是selector的第一个形参
			selector();
		}
	}
}