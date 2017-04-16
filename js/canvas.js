window.onload=function(){
	var canvas = document.getElementById('wave');
  	var ctx = canvas.getContext('2d');
  	canvas.width = 2200;
  	canvas.height =590;

	 window.requestAnimFrame = (function(){
	   return window.requestAnimationFrame ||
	    window.webkitRequestAnimationFrame ||
	       window.mozRequestAnimationFrame ||
	       function( callback ){
	        window.setTimeout(callback, 1000 / 60);
	       };
	  })();



	  var step = 0;
	 var lines = ["#45D983", "rgba(0,222,255, 0.2)"];
	  function loop(){
	   ctx.clearRect(0,0,canvas.width,canvas.height);
	   step++;
	   //画2个不同颜色的矩形
	   for(var j = lines.length - 1; j >= 0; j--) {
	     ctx.fillStyle = lines[j];
	     //每个矩形的角度都不同，每个之间相差45度
	     var angle = (step+j*45)*Math.PI/180;
	     var deltaHeight = Math.sin(angle) * 40;
	     var deltaHeightRight = Math.cos(angle) * 40;
	     
	     ctx.beginPath();
	     ctx.moveTo(0, canvas.height/2+deltaHeight);
	     ctx.bezierCurveTo(canvas.width /12, canvas.height/2+deltaHeight-1, canvas.width / 12,canvas.height/2+deltaHeightRight, canvas.width/6, canvas.height/2+deltaHeightRight);
	     ctx.bezierCurveTo(canvas.width*3/12, canvas.height/2+deltaHeight-1, canvas.width*3/12,canvas.height/2+deltaHeightRight, canvas.width/3, canvas.height/2+deltaHeightRight); 
	     ctx.bezierCurveTo(canvas.width*5/12, canvas.height/2+deltaHeight-1, canvas.width *5/12,canvas.height/2+deltaHeightRight, canvas.width/2, canvas.height/2+deltaHeightRight);
	     ctx.bezierCurveTo(canvas.width*7/12, canvas.height/2+deltaHeight-1, canvas.width*7/12,canvas.height/2+deltaHeightRight, canvas.width*2/3, canvas.height/2+deltaHeightRight);
	     ctx.bezierCurveTo(canvas.width*9/12, canvas.height/2+deltaHeight-1, canvas.width*9/12,canvas.height/2+deltaHeightRight, canvas.width*5/6, canvas.height/2+deltaHeightRight); 
	     ctx.bezierCurveTo(canvas.width*11/12, canvas.height/2+deltaHeight-1, canvas.width*11/12,canvas.height/2+deltaHeightRight, canvas.width, canvas.height/2+deltaHeightRight); 
	     // ctx.bezierCurveTo(canvas.width/8, canvas.height/2+deltaHeight+50, canvas.width*3/8,canvas.height/2+deltaHeightRight-50, canvas.width/2, canvas.height/2+deltaHeightRight); 
	     // ctx.bezierCurveTo(canvas.width*5/8, canvas.height/2+deltaHeight+50, canvas.width*7/8,canvas.height/2+deltaHeightRight-50, canvas.width, canvas.height/2+deltaHeightRight); 

	     ctx.lineTo(canvas.width, canvas.height);
	     ctx.lineTo(0, canvas.height);
	     ctx.lineTo(0, canvas.height/2+deltaHeight);
	     ctx.closePath();
	     ctx.fill();

	  }
	   requestAnimFrame(loop);
	 }

	  loop();
}