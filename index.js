functon drap(id){
	var obj = document.getElementById(id);
	var disX = 0;
	var disY = 0;
	obj.onmousedown = function(){
		console.log(window.pageXOffset);
	}
}
