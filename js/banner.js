$(function(){
		// var imgboxs=$(".wangrui")[0];
		var a=$("a",$(".wangrui")[0]);
		var list=$("li",$(".list")[0]);
		var lunbo=$(".lunbo")[0];
		var leftd=$(".rit")[0];
		var rightd=$(".lef")[0];
		var bg=["url(img/ni.jpg)","url(img/4a.jpg)","url(img/ma.jpg)","url(img/cao.jpg)"]
		var num=0;
		    // var t=setInterval(function(){
			// num++;
			// if(num>=a.length){
			// 	num=0;
			// }
			// for(var i=0;i<a.length;i++){
			// 	a[i].style.opacity=0;
			// 	list[i].className="cosl";
			// }
			// animate(a[num],{opacity:1},10);
			// list[num].className="cosl cosl-active";
			// lunbo.style.backgroundImage=bg[num];
		    // },3000)
         function lb(type){
        	type=type||"right";
        	if(type=="right"){
        		num++;
        		if(num>=a.length){
        			num=0;
        		}
        	}else{
        		num--;
        		if(num<=-1){
        			num=a.length-1;
        		}
        	}
        	for(var i=0;i<a.length;i++){
				a[i].style.opacity=0;
				list[i].className="cosl";
			}
			animate(a[num],{opacity:1},500);
			list[num].className="cosl cosl-active";
			lunbo.style.backgroundImage=bg[num];
        }
        var t=setInterval(lb,2000);
        lunbo.onmouseover=function(){
        	clearInterval(t)
        	leftd.style.display="block";
        	rightd.style.display="block";
        }
        lunbo.onmouseout=function(){
        	t=setInterval(lb,2000);
        	leftd.style.display="none";
        	rightd.style.display="none";
        }
        leftd.onclick=function(){
        	lb("left")
        }
        rightd.onclick=function(){
        	lb("right")
        }
        
		for(var i=0;i<list.length;i++){
			list[i].aa=i;
			list[i].onmouseover=function(){
				for(var j=0;j<a.length;j++){
					a[j].style.opacity=0;
					list[j].className="cosl";
				}
				// a[this.aa].style.opacity=1;
			    animate(a[this.aa],{opacity:1},500);
				this.className="cosl cosl-active";
			    lunbo.style.backgroundImage=bg[this.aa];
				num=this.aa;

			}
		}



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
    var box=$(".liebiaotu_1");
    var lefts=$(".lefts");
    var tops=$(".tops");
    var bottoms=$(".bottoms");
    var rights=$(".rights");
    for(var i=0;i<box.length;i++){
	box[i].aa=i;
	box[i].onmouseover=function(){
		var w=getStyle(this,"width");
		var h=getStyle(this,"height");
		animate(tops[this.aa],{width:w+2});
		animate(lefts[this.aa],{height:h+2});
		animate(rights[this.aa],{height:h+2});
		animate(bottoms[this.aa],{width:w+2});
	}
	box[i].onmouseout=function(){
		animate(tops[this.aa],{width:0});
		animate(lefts[this.aa],{height:0});
		animate(rights[this.aa],{height:0});
		animate(bottoms[this.aa],{width:0});
	}
 }
    var he=$(".shishangzw_right_a1");
    var lefta=$(".lefta");
    var topa=$(".topa");
    var bottoma=$(".bottoma");
    var righta=$(".righta");
    for(var i=0;i<he.length;i++){
	he[i].bb=i;
	he[i].onmouseover=function(){
		var ww=getStyle(this,"width");
		var hh=getStyle(this,"height");
		animate(topa[this.bb],{width:ww+2});
		animate(lefta[this.bb],{height:hh+2});
		animate(righta[this.bb],{height:hh+2});
		animate(bottoma[this.bb],{width:ww+2});
	}
	he[i].onmouseout=function(){
		animate(topa[this.bb],{width:0});
		animate(lefta[this.bb],{height:0});
		animate(righta[this.bb],{height:0});
		animate(bottoma[this.bb],{width:0});
	}
 }

   function luvletter(index){

    var box1=$(".box1")[index];
	var tp=$("a",box1);
	var lunboo=$(".lunboo")[index];
	var dian=$("li",lunboo);
	var leftn=$(".leftd")[index]
	var rightn=$(".rightd")[index]
	for (var i = 1; i < tp.length; i++) {
		tp[i].style.left="390px";
		
	};
	var now=0;
	var next=0
	function move(type){
		type=type||"right";
		if(type=="right"){
			next++;
			if(next>=tp.length){
				next=0
			}
		}else{
			next--;
			if(next<=-1){
				next=tp.length-1 
			}
		}
		
		tp[next].style.left="390px"
		animate(tp[now],{left:-390})
		animate(tp[next],{left:0})
		dian[now].className=""
		dian[next].className="lunboo_xz"
		now=next
	}
	box1.onmouseover=function(){
		leftn.style.display="block"
		rightn.style.display="block";
	}
	box1.onmouseout=function(){
		leftn.style.display="none"
		rightn.style.display="none"
	}
	for (var i = 0; i < dian.length; i++) {
		dian[i].aa=i;
		dian[i].onclick=function(){
			next=this.aa;
			tp[next].style.left="390px";
			animate(tp[now],{left:-390})
			animate(tp[next],{left:0})
			dian[now].className=""
			dian[next].className="lunboo_xz"
			now=next
		}
	};
	leftn.onclick=function(){
		move("left")
	}
	rightn.onclick=function(){
		move("right")
	}

   }
   for(var p=0;p<6;p++){
   	luvletter(p);
   }



  
   function phinox(index){

    var tupianbo=$(".shishangzw_left_mia")[index];
	var ts=$(".tupianbox",tupianbo);
	var leftyop=$(".shishangzw_left_b1")[index]
	var rightyop=$(".shishangzw_left_b3")[index]
	for (var i = 1; i < ts.length; i++) {
		ts[i].style.left="160px";
		
	};
	var now=0;
	var next=0
	function move(type){
		type=type||"right";
		if(type=="right"){
			next++;
			if(next>=ts.length){
				next=0
			}
		}else{
			next--;
			if(next<=0){
				next=ts.length
			}
		}
		
		ts[now].style.left="0px";
		
		animate(ts[now],{left:-160})
		animate(ts[next],{left:0})
		ts[next].style.left="160px";
		now=next
	}
	leftyop.onclick=function(){
		move("right")
	}
	rightyop.onclick=function(){
		move("right")
	}
 }
  for(var s=0;s<9;s++){
   	phinox(s);
   }


  var noo=0;
  var sanlei=$(".yintaibh")[0];
  var jump=$(".youcetiao")[0];
  var floor=$(".shishang");
  var li=$("a",jump);
  var zuanshitu=$(".zuanshitu");
  var pss=$("p");
  document.documentElement.scrollTop=1;      
  var obj=document.documentElement.scrollTop?document.documentElement:document.body;                                       //判断浏览器类型并获取值
  window.onscroll=function(){               
    
    if(obj.scrollTop>=sanlei.offsetTop){      
      jump.style.display="block";
    }else{
      jump.style.display="none ";
    }

        for (var i = 0; i < floor.length; i++) {
          if(obj.scrollTop+120>=floor[i].offsetTop){
            noo=i;
            for (var j = 0; j < li.length; j++) {
              li[j].style.background="";
              pss[j].style.display="none";
              
            };
          li[i].style.background="rgba(255,0,0,0.6)";
           pss[i].style.display="block";
            }
        
      if(obj.scrollTop+120<=floor[i].offsetTop){
                li[i].style.background="";
                pss[i].style.display="none";
              }
        };
        

  }

  for (var i = 0; i < li.length; i++) {
    li[i].cc=i;     
    li[i].onclick=function(){
            animate(obj,{scrollTop:floor[this.cc].offsetTop},200);
    }
    li[i].onmouseover=function(){
      li[this.cc].style.background="rgba(255,0,0,0.6)";
      pss[this.cc].style.display="block";
    }
    li[i].onmouseout=function(){
      if(this.cc!=noo){
        li[this.cc].style.background="";
        pss[this.cc].style.display="none";
      }
      li[li.length-1].onclick=function(){
      animate(obj,{scrollTop:0},200);
    }
      
    }
  };

})
    