
//清除页面中的空白节点
CNN();
function clearNode(ele){
	var allchild=ele.childNodes;
	for(var i=0;i<allchild.length;i++){
		if(allchild[i].nodeType==3&&/\S/.test(allchild[i].nodeValue)==false){
			ele.removeChild(allchild[i]);
		}
	}
}
function CNN(){
	var _allNode=document.getElementsByTagName("*");
	for(var i=0;i<_allNode.length;i++){
		if(_allNode[i].hasChildNodes()){
			clearNode(_allNode[i]);
		}
	}
}
/****功能：通过class名获取元素集合****/
/****参数：class的属性值****/
/****调用方法：document.getElemengsByClassName("mydiv")****/
/****返回值：具有相同样式名的元素的集合，数组格式****/


Document.prototype.getElementsByClassName=function(att){
	var _all=document.getElementsByTagName("*");
	var arr=[];
	for(var i=0;i<_all.length;i++){
		if(_all[i].hasAttribute("class")){
			var str=_all[i].getAttribute("class");
			var b=str.split(" ");
			for(var j=0;j<b.length;j++){
				if(b[j]==att){
					arr.push(_all[i]);
				}
			}
		}
	}
	return arr;
}
/****功能：通过class名获取元素集合****/
/****参数：class的属性值****/
/****调用方法：element.getElemengsByClass("mydiv")****/
/****返回值：具有相同样式名的元素的集合，数组格式****/
Element.prototype.getElementsByClass=function(att){
	var _all=this.getElementsByTagName("*");
	var arr=[];
	for(var i=0;i<_all.length;i++){
		if(_all[i].hasAttribute("class")){
			var str=_all[i].getAttribute("class");
			var b=str.split(" ");
			for(var j=0;j<b.length;j++){
				if(b[j]==att){
					arr.push(_all[i]);
				}
			}
		}
	}
	return arr;
}

/****功能：判断一个元素是否拥有指定样式****/
/****参数：class的属性值****/
/****调用方法：element.hasClass("mydiv")****/
/****返回值：true或false****/
Element.prototype.hasClass=function(att){
	if(this.hasAttribute("class")){
		var str=this.getAttribute("class");
		var arr=str.split(" ");
		for(var i=0;i<arr.length;i++){
			if(arr[i]==att){
				return true;
			}
		}
	}
	return false;
}

/****功能：给一个元素添加某一个指定样式****/
/****参数：class的属性值****/
/****依赖：hasClass()****/
/****调用方法：element.addClass("mydiv")****/
/****返回值：无****/
Element.prototype.addClass=function(att){
	if(this.hasAttribute("class")){
		if(this.hasClass(att)==false){
			var str=this.getAttribute("class");
			str=str+" "+att;
			this.setAttribute("class",str);
		}
	}else{
		this.setAttribute("class",att);
	}
}

/****功能：给一个元素删除某一个指定样式****/
/****参数：class的属性值****/
/****依赖：hasClass()****/
/****调用方法：element.removeClass("mydiv")****/
/****返回值：无****/
Element.prototype.removeClass=function(att){
	if(this.hasAttribute("class")){
		if(this.hasClass(att)==true){
			var str=this.getAttribute("class");
			var arr=str.split(" ");
			for(var i=0;i<arr.length;i++){
				if(arr[i]==att){
					arr.splice(i,1);
					i--;
					
				}
			}
			var str2=arr.join(" ");
		}
	}
	this.setAttribute("class",str2);
}

/****功能：计算字符串字节长度****/
/****参数：无****/
/****调用方法：str.len()****/
/****返回值：字节长度****/
String.prototype.len=function() {
	var len=0;
	for(var i=0;i<this.length;i++){
		if(this.charCodeAt(i)>255){
			len=len+2;
		}
		else{
			len=len+1;
		}
	}
	return len;
}