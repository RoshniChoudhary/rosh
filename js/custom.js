$(document).ready(function(){
	$(".nav_menu").waypoint(function(direction){
		$(".dummy-text").addClass('animated zoomIn')
	},
	{
		 offset: '20px'
	});



	$(".new-arrivals").waypoint(function(direction){
		$(".card-1").addClass('animated fadeInLeft')
	},
	{
		 offset: '300px'
	});

		$(".new-arrivals").waypoint(function(direction){
		$(".card-2").addClass('animated zoomIn')
	},
	{
		 offset: '300px'
	});


		$(".new-arrivals").waypoint(function(direction){
		$(".card-3").addClass('animated fadeInRight')
	},
	{
		 offset: '300px'
	});




});