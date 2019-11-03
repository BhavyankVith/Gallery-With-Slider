$(document).ready(function(){

	flag=0;
	$("#i1").click(function(){
		
		$("#bigimg").fadeIn();
		$("#bigimg img").attr('src','i1.jpg');
	flag=1;
	});

	$("#i2").click(function(){
		
		$("#bigimg").fadeIn();
		$("#bigimg img").attr('src','i2.jpg');
	flag=2;
	});

	$("#i3").click(function(){
		
		$("#bigimg").fadeIn();
		$("#bigimg img").attr('src','i3.jpg');
	flag=3;

	});
	$("#i4").click(function(){
		
		$("#bigimg").fadeIn();
		$("#bigimg img").attr('src','i4.jpg');
	flag=4;
	});
	$("#i5").click(function(){
		
		$("#bigimg").fadeIn();
		$("#bigimg img").attr('src','i5.jpg');
	flag=5;
	});
	$("#i6").click(function(){
		
		$("#bigimg").fadeIn();
		$("#bigimg img").attr('src','i6.jpg');
	flag=6;
	});

	$("#close").click(function(){
		
		$("#bigimg").fadeOut();
	});
	$("#next").click(function(){
		if(flag==1)
		{
			$("#bigimg img").attr('src','i2.jpg');
			flag=2;
		}
		else if(flag==2)
		{
			$("#bigimg img").attr('src','i3.jpg');
			flag=3;
		}
		else if(flag==3)
		{
			$("#bigimg img").attr('src','i4.jpg');
			flag=4;
		}
		else if(flag==4)
		{
			$("#bigimg img").attr('src','i5.jpg');
			flag=5;
		}
		else if(flag==5)
		{
			$("#bigimg img").attr('src','i6.jpg');
			flag=6;
		}
		else if(flag==6)
		{
			$("#bigimg img").attr('src','i1.jpg');
			flag=1;
		}
	});
	$("#pre").click(function(){
		if(flag==1)
		{
			$("#bigimg img").attr('src','i6.jpg');
			flag=6;
		}
		else if(flag==2)
		{
			$("#bigimg img").attr('src','i1.jpg');
			flag=1;
		}
		else if(flag==3)
		{
			$("#bigimg img").attr('src','i2.jpg');
			flag=2;
		}
		else if(flag==4)
		{
			$("#bigimg img").attr('src','i3.jpg');
			flag=3;
		}
		else if(flag==5)
		{
			$("#bigimg img").attr('src','i4.jpg');
			flag=4;
		}
		else if(flag==6)
		{
			$("#bigimg img").attr('src','i5.jpg');
			flag=5;
		}
	});


});