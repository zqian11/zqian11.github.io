/*
*清除一个指定元素下的空白文本节点-----通过函数
*参数：
ele:要清除指定空白文本子节点的元素
*/
function clearNoneNode(ele){ //形参
	var thisChild=ele.childNodes; //元素的返回列表赋值给变量 thisChild
	for(var i=0;i<thisChild.length;i++){
		if(thisChild[i].nodeType==3 && !/\S/.test(thisChild[i].nodeValue)){
			ele.removeChild(thisChild[i]);
		}
	}
}


/*
*清除指定元素下的空白文本子节点-----通过原型对象的方法
*参数：无
this:指向要清除空白子节点的元素
*/
Element.prototype.cnn=function(){ //给元素的原型对象绑定一个cnn方法，目的是元素继承这个方法
	var thisChild=this.childNodes;//页面中的元素是谁，this就指向谁
	for(var i=0;i<thisChild.length;i++){  //
		if(thisChild[i].nodeType==3 && !/\S/.test(thisChild[i].nodeValue)){ //判断有没有非空字符
			this.removeChild(thisChild[i]);
		}
	}
}


/*
*清除页面中所有元素的空白文本节点
*参数：无
*/
function CNN(){
	var alldom=document.getElementsByTagName('*');//所有页面中的元素
	for(var i=0;i<alldom.length;i++){
		alldom[i].cnn();    //调用原型对象的方法 逐个清除里面的元素的空白节点
		// clearNoneNode(alldom[i]);//调用函数
	}
}
CNN();//清除页面中所有元素的空白文本节点


/*
*判断一个元素是否拥有指定的样式
*参数：
*cname:要判断的样式名称
*返回值：boolean
*有指定样式返回true；
*没有返回false
*/

Element.prototype.hasClass=function(cname){
	if(this.hasAttribute("class")){
		var reg=new RegExp(" "+cname+" ");
		var thisclass=" "+this.getAttribute("class")+" ";
		//前后加空格只需要判断一次
		if(reg.test(thisclass)){
			return true;
		}

	}
	return false;
}




/*
*给一个元素添加一个样式
*参数：
*_newclass:要添加的样式
*依赖：Element.hasClass()方法
*返回值：无
*/
Element.prototype.addClass=function (_newclass){
	if(!this.hasClass(_newclass)){
		this.setAttribute("class",this.getAttribute("class")+" "+_newclass);
	}
}

/*
*给一个元素删除一个样式
*参数：
*_delclass:要删除的样式
*依赖：Element.hasClass()方法
*返回值：无
*/
Element.prototype.removeClass=function (_delclass){
	if(this.hasClass(_delclass)){
		var arr=this.getAttribute("class").split(" ");
		for(var i=0;i<arr.length;i++){
			if(arr[i]==_delclass){
				arr.splice(i,1);
				//出现一个问题，如果两个相同的class挨着写，就只能删除一个
				i--;//解决以上问题
			}
		}
		var newclass=arr.join(" ");
		this.setAttribute("class",newclass);
	}
}






/*用正则给一个元素删除一个样式
*参数：
*_delclass:要删除的样式
*依赖：Element.hasClass()方法
*返回值：无
*例如:class="wrap bg01 bg02 bg01 bg01"
*         删除bg01
*         class=" wrap bg02 bg01 "原因是最后一个bg01前面的空格是删除倒数第二个的时候生成的，所以第一遍是找不完整的。
*/
Element.prototype.delClass=function (_delclass){
	if(this.hasClass(_delclass)){
		var thisClass=" "+this.getAttribute("class")+" ";
		var myreg=new RegExp(" "+_delclass+" ","igm");//igm不区分大小写、全局匹配、多行匹配
		while(myreg.test(thisClass)){//表示式为真就去执行
			thisClass=thisClass.replace(myreg," ");
		}
		this.setAttribute("class",thisClass.trim());
	}
}






/*
*通过classname获取页面元素的集合------通过封装函数
*参数：
classname:获取相同class的属性值
输出：具有相同class属性的元素的集合
返回值：数组的集合
*/
function getElementsByClassName(classname){
	var alldom=document.getElementsByTagName('*'); //获取页面中的所有标签
	var _arr=[];//用于存放找到的元素
	for(var i=0;i<alldom.length;i++){ //遍历
		if(alldom[i].hasAttribute("class")){ //先判断元素里是否有class属性
			var cn = alldom[i].getAttribute('class');//返回属性名的属性值
			var cnarr=cn.split(" ");//split()方法，分割成数组 存放的数组中
			for(var j=0;j<cnarr.length;j++){ //数组进行遍历 属性值的数组
				if( cnarr[j] == classname ){ //比较数组值是否和class值相同
					_arr.push(alldom[i]); //Array.push()方法 将元素放入_arr数组中
					break;//跳出当前循环体
				}
			}
		}
	}
	return  _arr; //返回数组
}


/*
*通过classname获取页面元素的集合----通过正则表达式
*参数：
classname:获取相同class的属性值
输出：具有相同class属性的元素的集合
返回值：数组的集合
*/
function getClass(classname){
	var alldom=document.getElementsByTagName('*');
	var _arr=[];//用于存放找到的元素

	for(var i=0;i<alldom.length;i++){
		if(alldom[i].hasAttribute("class")){
			var cn= " "+alldom[i].getAttribute("class")+" ";
			var myreg=new RegExp(" "+classname+" "); //正则表达式
			if(myreg.test(cn)){
				_arr.push(alldom[i]);
			}
		}
	}
	return _arr;
}



/*
*获取某一个元素下的指定的样式的集合
*参数：
classname:要查找的样式名称
返回值：数组的集合
*/
Element.prototype.getClass=function(_classname){
	var thischild=this.getElementsByTagName('*');
	var _arr=[];//用于存放找到的元素
	for(var i=0;i<thischild.length;i++){
		if(thischild[i].hasClass(_classname)){
			_arr.push(thischild[i]);
		}
	}
	return _arr;
}



/*
*删除(清除)元素本身---通过原型对象的方法
*参数：无
返回值：无
this:页面中的元素是谁，this就指向谁
*/
Element.prototype.remove=function(){ //给元素的原型对象绑定一个remove方法
	this.parentNode.removeChild(this); //页面中的元素是谁，this就指向谁
}



/*
*删除(清除)元素本身---通过【封装函数】
*参数：
ele:想要清除的元素
返回值：无
*/
function Remove(ele){ //形参
	ele.parentNode.removeChild(ele);//通过元素的父节点的removeChild(移除的元素)方法
}


/*通过onfocus(),onblur()方法实现placeholder效果
*input中placeholder效果的实现 -----原型对象  的holder方法
*参数：无
*返回值：无
*结构要求：<input type="text" value="请输入查找内容" class="myname">
*结构要求：元素一定要具有【value属性】
*/
Element.prototype.holder=function(){
	var thisvalue=this.value; //声明一个变量存放this.value
	this.onfocus = function(){ //获得焦点时触发的函数
		if(this.value==thisvalue){ //提示：通过this.value
			this.value="";
		}
	}
	this.onblur = function(){ //失去焦点时触发的函数
		if(this.value==""){
			this.value=thisvalue;
		}
	}
}


/*通过原型对象的方法------计算一个字符串的实际长度
*参数：无
*返回值：数值型  返回字符串的实际长度
*字符串的长度,全角占两位，半角占一位
*输出：字符串的实际长度
*/
String.prototype.len=function(){
	var len=0;//计算字符串占实际长度
	for(var i=0;i<this.length;i++){
		if(this.charCodeAt(i)>255){
			len=len+2;
		}
		else{
			len=len+1;
		}
	}
		return len;//返回值
}



/*通过【函数】的方法----计算一个字符串的实际长度
*参数：无
*返回值：数值型  返回字符串的实际长度
*字符串的长度,全角占两位，半角占一位
*输出：字符串的实际长度
*/
function len(_str){
	var len=0;//计算字符串占实际长度
	for(var i=0;i<this.length;i++){
		if(this.charCodeAt(i)>255){
			len=len+2;
		}
		else{
			len++;
		}
	}
		return len;//返回值
}



/*-----截取一个字符串的指定长度
*参数：len:要截取的长度
*返回值：截取后的字符串
*截取时：字符串的长度,全角占两位，半角占一位
*sum:字符串的长度
*i:为脚标
*/
String.prototype.substr=function(len){ //len数值类型的
	var num=0;//计算字符串占实际长度
	for(var i=0;i<this.length;i++){
		if(this.charCodeAt(i)>255){
			num=num+2;
		}
		else{
			num=num+1;//sum++
		}
		if(num>len){ //超出截取范围时(字符串长度>要截取的长度时)
			return this.slice(0,i); //截取字符串(return返回 表退出)
		}
	}
}


/*去除字符串前后的空白符
*返回值：去除前后空白符的新字符串
*/
String.prototype.trim=function(){
	return this.replace(/(^\s+|\s+$)/ig,"");
}

/*兼容所有浏览器，实现事件绑定
*参数：ele--要绑定事件的元素
*	etype--绑定的事件类型
*	func--事件处理函数
*返回值：无
*/
function addHandler(ele,etype,func){
	if(ele.addEventListener){
		ele.addEventListener(etype,func,false);
	}
	else{
		ele.attachEvent("on"+etype,func);
	}
}

/*兼容所有浏览器，实现移除事件绑定
*参数：ele--要绑定事件的元素
*	etype--绑定的事件类型
*	func--事件处理函数
*返回值：无
*/
function removeHandler(ele,etype,func){
	if(ele.removeEventListener){
		ele.removeEventListener(etype,func,false);
	}
	else{
		ele.detachEvent("on"+etype,func);
	}
}

/*
*通过元素的原型对象的方法来实现事件绑定
*参数：etype--绑定的事件类型
*	func--事件处理函数
*返回值：无
 */
Element.prototype.addHandler=function (etype,func){
	if(this.addEventListener){
		this.addEventListener(etype,func,false);
	}
	else{
		this.attachEvent("on"+etype,func);
	}
}


/*
*通过元素的原型对象的方法来移除事件绑定
*参数：etype--绑定的事件类型
*	func--事件处理函数
*返回值：无
 */
Element.prototype.removeHandler=function(etype,func){
	if(this.removeEventListener){
		this.removeEventListener(etype,func,false);
	}
	else{
		this.detachEvent("on"+etype,func);
	}
}

/*
*兼容所有浏览器，阻止冒泡
*参数：e--事件对象
*返回值：无
 */

function stopPropagation(e){
	if(e.stopPropagation){
		e.stopPropagation();
	}
	else{
		e.cancelBubble=true;
	}
}


/*
*事件的原型对象方法，阻止冒泡
*参数：无
*返回值：无
 */
Event.prototype.stopPop=function(){
	if(this.stopPropagation){
		this.stopPropagation();
	}
	else{
		this.cancelBubble=true;
	}
}

/*
*求出元素的索引值
*参数：无
*返回值：求出的索引值i
 */
Element.prototype.index=function(){
	var thisSib=this.parentNode.childNodes;
	for(var i=0;i<thisSib.length;i++){
		if(thisSib[i]==this){
			return i;
		}
	}
}


/*
*实现选项卡切换的效果
*参数：option
* option={
// 	tabul:$ul[1],//要切换的标签
// 	tabcon:$con[1],//要切换的内容
// 	etype:"click",//
// 	actclass:"act"
// }
*返回值：无
 */
Element.prototype.myTab=function(option){
//option是一个对象参数，可以为option添加任何属性，这样避免了漏传参数的情况，也避免了传参时顺序的不同
	if(option.etype==undefined){
		option.etype="mouseover";
	}
	if(option.actclass==undefined){
		option.actclass="act";
	}
	var $li=this.childNodes;
	var $conchild=option.tabcon.childNodes;

	this.addHandler(option.etype,function(e){
		var e=e||window.event;
		var target=e.target||e.srcElement;
		if(target.tagName=="LI"){
			showTab(target.index());
		}
		function showTab(_now){
			for(var i=0;i<$conchild.length;i++){
				if(i==_now){
					$conchild[_now].style.display="block";
					$li[_now].addClass(option.actclass);
				}
				else{
					$conchild[i].style.display="none";
					$li[i].removeClass(option.actclass);
				}
			}
		}
	});
}

/*
*实现焦点图切换的效果
*参数：option
* option={
// 	tabul:$ul[1],//要切换的标签
// 	tabcon:$con[1],//要切换的内容
// 	etype:"click",//
// 	actclass:"act"
// }
*alt:图片提示文字
*返回值：无
 */
Element.prototype.myFocus=function(option,alt){
	var oldindex=0;
	var outTime;
	if(option.etype==undefined){
		option.etype="mouseover";
	}
	if(option.actclass==undefined){
		option.actclass="act";
	}
	if(option.ftime==undefined){
		option.ftime=4000;
	}
	console.log(option.ftime);
	var timer=setInterval(autoplay,option.ftime);
	var $li=this.childNodes;
	var $conchild=option.tabcon.childNodes;
	alt.innHTML=$conchild[0].getElementsByTagName("img")[0].getAttribute("alt");
	this.addHandler(option.etype,function(e){
		var e=e||window.event;
		var target=e.target||e.srcElement;
		if(target.tagName=="LI"){
			outTime=setTimeout(function(){
				showchange(oldindex,target.index());
			},200);
			clearInterval(timer);
		}
	});
	this.addHandler("mouseout",function(e){
		var e=e||window.event;
		var target=e.target||e.srcElement;
		if(target.tagName=="LI"){
			clearTimeout(outTime);
			timer=setInterval(autoplay,option.ftime);
		}
	});
	function autoplay(){
		var newindex;
		if(oldindex<$conchild.length-1){
			newindex=oldindex+1;
		}
		else{
			newindex=0;
		}
		showchange(oldindex,newindex);
	}
	function showchange(_old,_new){
		if(_old!=_new){
			$conchild[_old].style.opacity="1";
			$conchild[_old].style.display="block";
			var t1=setInterval(function(){
				var oldOc=$conchild[_old].style.opacity;
				if(oldOc<0.1){
					clearInterval(t1);
					$conchild[_old].style.opacity="0";
					$conchild[_old].style.display="none";
				}
				else{
					$conchild[_old].style.opacity=$conchild[_old].style.opacity/2;
				}
			},50);
			$conchild[_new].style.opacity="0";
			$conchild[_new].style.display="block";

			var t2=setInterval(function(){
				var newOc=$conchild[_new].style.opacity;
				if(newOc>0.9){
					clearInterval(t2);
					$conchild[_new].style.opacity="1";
				}
				else{
					$conchild[_new].style.opacity=(1+Number($conchild[_new].style.opacity))/2;
				}
			},50);

			$li[_old].removeClass(option.actclass);
			$li[_new].addClass(option.actclass);
			alt.innerHTML=$conchild[_new].getElementsByTagName("img")[0].getAttribute("alt");
			oldindex=_new;
		}
	}
}