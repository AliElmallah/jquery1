// start section sliderBOx
$(".labl").click(function(){
   $(".links").animate( {left:"0px" },1000);
   $(".labl").animate( {left:"200px" },1000);

})
$(".closebtn").click(function(){
    $(".links").animate( {left:"-200px" },1000);
    $(".labl").animate( {left:"0px" },1000);
 
 })
 // end section sliderBox

//start counter
function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("29 April 2017 ");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$(".days").html(days + "<span>Days</span>");
			$(".hours").html(hours + "<span>Hours</span>");
			$(".minite").html(minutes + "<span>Minutes</span>");
			$(".secends").html(seconds + "<span>Seconds</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);
//end counter

//Start section2
$(".paragraphs h2").click(function(){
	$(this).next().slideToggle(1000);
	$(".paragraphs p").not(($(this).next())).slideUp(1000);
})


//End section2


// $(window).scroll(function(){
//     let windowOffset = $(window).scrollTop();
//     let offsetItems = $(".paragsec").offset().top;
//   let docHeight =   $(window).height();
 
//   console.log('---------------------------');
//   if(windowOffset > (offsetItems - (docHeight/2)) ){
  
//     $(".labl").css("color","black");
//   }else{
//     $(".labl").css("color","white");
//   }
//   })

$("#textArea").keyup(function(){
	let max = 100;
	let typeing = $(this).val().length;
	let count = max - typeing;
	if(count > 0){
		$(".userAlert").html(`${count} Characyer Reamining`)
	}else if(count==0){
		$(".userAlert").html(`<h4 class="d-inline">your available character finished</h4> Characyer Reamining`)
	}
	
})

