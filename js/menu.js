$(document).ready(main);//se ejecuta hasta que doto se hay cargado

var contador =1;
function main() {
	$('.menu_bar').click(function(){
		$('nav').toggle();
	});
}