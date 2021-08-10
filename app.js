/////////////////////////////////////////////////////////////////////////////////
/////////////                Variables globales                       ///////////
/////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////
/////////////                    jquery                           ///////////////
/////////////////////////////////////////////////////////////////////////////////

///////////// style effects ////////////////////////
$("body").css({"backgroundColor" : "#33488E"});
$(".header_text").css({"color" : "#D2DBD0"});
$("nav").css({"backgroundColor" : "#00488E", "border-radius" : "25px", "box-shadow":"9px 9px 5px black"});
$(".card").css({"border-radius" : "25px", "box-shadow":"9px 9px 5px black"});


//////// movimiento del boton ////////////
$(".btn_").mousedown(function() {
	$(this).css({"box-shadow":"1px 1px 0px black", "left":"76%", "top":"0.3rem"});
})
$(".btn_").mouseup(function() {
	console.log("funcion")
	$(this).css({"box-shadow":"5px 5px 5px black", "left":"75%", "top":"0rem"});
})


//////// opciones de cambio proyectos-clientes  //////////////////////


$("#svg_btn").click(function() {
	if ($(".option_table").css("display") === "none") {
		$(".option_table").css({"display": "block", "position":"relative"});
	}else{
		$(".option_table").css({"display": "none"});
	}
});


console.log($(".option_table").html());

$(".option_table").click(function() {
	if(($(this)).html() == "Proyectos"){
		($(this)).text("Cliente");
		($(".current_table")).text("Proyectos");
		$(this).css({"display": "none"});
		console.log("Proyectos");
	}else{
		($(this)).text("Proyectos");
		($(".current_table")).text("Cliente");
		$(this).css({"display": "none"});
		console.log("clientes");
	}
})

////////////////////    Agregar cliente-proyecto nuevo    /////////////////////

//  crea la pantalla negra 
$(".btn_").click(function() {
	$("body").prepend("<div class='blackScreen'></div>");
	$(".blackScreen").css({"z-index": "10","position":"absolute","width":"100%","height":"100%","opacity":"0.5","background-color": "black","opacity": "0.5"});
	console.log($(".blackScreen"));
	$(".blackScreen").append("<div class='card justify-content-center align-items-center'>lorfsafsacsadasgasvas</div>");
})





/*if ($(".option_table").css("display") === "none") {
	$("#svg_btn").click(function() {
	$(".option_table").css({"display": "block", "position":"relative"})
})
}else{$("#svg_btn").click(function() {
	$(".option_table").css({"display": "none"})
})}


padding: 2px;
			background-color: gray;
			border-style: solid;
			border-width: 2px;
			border-radius: 15px;


position: relative;
			top: 50px;
			display: none;
			padding: 2px;
			background-color: white;*/