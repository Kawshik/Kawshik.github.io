// if(console.log("Hello"),console.log(screen.width),screen.width<480&&(document.getElementById("logo").src="../assets/images/menu-icon.png"),480<screen.width&&(anime({targets:".hero-img",translateX:[{value:250,delay:0},{value:0,duration:700,delay:2500}],scale:[{value:0,duration:2e3},{value:1,duration:2e3}],opacity:[{value:0,duration:2e3},{value:1,duration:2e3}],duration:800}),anime({targets:".hero-detail",scaleX:[{value:0},{value:1,duration:500,delay:2500}],opacity:[{value:0,duration:500},{value:1,duration:500}]}),anime({targets:".navbar",scaleY:[{value:0},{value:1,duration:500,delay:2700}]})),screen.width<480){var flag=0;function navbar_toggle(){flag=0==flag?(document.getElementById("navbar").style.height="100%",anime({targets:".navbar-links",scaleY:[{value:0,duration:0},{value:1,duration:1e3}]}),document.getElementById("logo").src="../assets/images/close-icon.png",1):(document.getElementById("navbar").style.height="10%",anime({targets:".navbar-links",scaleY:[{value:1,duration:0},{value:0,duration:100}],easing:"cubicBezier(0.015, 0.465, 0.750, 1.010)"}),document.getElementById("logo").src="../assets/images/menu-icon.png",0)}document.getElementById("logo").onclick=function(){navbar_toggle()},document.getElementById("nav_link_home").onclick=function(){navbar_toggle()},document.getElementById("nav_link_about").onclick=function(){navbar_toggle()},document.getElementById("nav_link_work").onclick=function(){navbar_toggle()},document.getElementById("nav_link_contact").onclick=function(){navbar_toggle()}}var current_id=0;function projectDisplayModal(e){document.getElementById(e).style.display="block",current_id=e}document.getElementById("close-btn").onclick=function(){document.getElementById(current_id).style.display="none"},window.onload=function(){console.log("page loaded"),setTimeout(function(){document.getElementById("loading").style.display="none"},500)};
//Welcome Message
console.log("Hello");
console.log(screen.width);

if(screen.width<480){
	document.getElementById('logo').src="../assets/images/menu-icon.png";
}

//Landing page starting animation
if(screen.width>480){

	anime({
	  targets: '.hero-img',
	  translateX:[
	  	{value:250, delay: 0},
	  	{value:0,duration:700,delay:2500}
	  ],
	  scale:[
	  	{value: 0, duration: 2000},
	  	{value: 1, duration: 2000}
	  ],
	  opacity:[
	  	{value: 0, duration: 2000},
	  	{value: 1, duration: 2000}
	  ],
	  duration: 800
	});

	anime({
		targets: '.hero-detail',
		scaleX:[
			{value: 0,},
			{value: 1, duration: 500, delay:2500}
		],
		opacity:[
		  	{value: 0, duration: 500},
		  	{value: 1, duration: 500}
	  	]

	});

	anime({
		targets: '.navbar',
		scaleY:[
			{value: 0,},
			{value: 1, duration: 500, delay:2700}
		],

	});
}


//On click dropdown menu animation
if(screen.width<480){

	var flag = 0;
	function navbar_toggle() {
			if(flag==0){
				document.getElementById('navbar').style.height ="100%";
				anime({
					targets: '.navbar-links',
					scaleY:[
						{value: 0, duration:0},
						{value: 1, duration: 1000}
					],
				});	

				document.getElementById('logo').src="../assets/images/close-icon.png";
				// document.getElementById('navbar-brand').style.height="100%";
				flag = 1;

			} else {
				// document.getElementById('navbar-brand').style.height="10%";
				document.getElementById('navbar').style.height ="10%";
				anime({
					targets: '.navbar-links',
					scaleY:[
						{value: 1, duration:0},
						{value: 0, duration: 100},
					],
					easing:'cubicBezier(0.015, 0.465, 0.750, 1.010)'

				});			

				document.getElementById('logo').src="../assets/images/menu-icon.png";
				// document.getElementById('navbar-brand').style.height="0%";
				flag = 0;
			}
	};

	document.getElementById('logo').onclick = function function_name() {
		navbar_toggle();
	}
	document.getElementById('nav_link_home').onclick = function function_name() {
		navbar_toggle();
	}
	document.getElementById('nav_link_about').onclick = function function_name() {
		navbar_toggle();
	}
	document.getElementById('nav_link_work').onclick = function function_name() {
		navbar_toggle();
	}
	document.getElementById('nav_link_contact').onclick = function function_name() {
		navbar_toggle();
	} 
}

//Modals
// var current_id=0;
function projectModalShow(id) {
	// console.log(id);
	document.getElementById(id).style.display="block";
	// current_id = id;
}


function projectModalClose(id) {
	document.getElementById(id).style.display="none";
}

window.onload = function() {
	// $('#loading').hide();
	console.log("page loaded");
	setTimeout(function(){

		document.getElementById('loading').style.display = "none";
	}, 500);
	// document.getElementById('loading').style.display = "none";
};