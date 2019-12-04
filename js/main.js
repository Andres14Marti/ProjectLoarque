let boton = document.getElementById("icono");/*varaible tipo let para el icono*/ 
let enlaces = document.getElementById("enlaces");/*variable let para los enlaces*/
let contador = 0;


/*cuando hagan click en el boton hamburguesa*/ 
boton.addEventListener("click",function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos');
		contador=1;
		/*si el contador vale 0 que me cambie al enlace 2 que esta en css*/
    }else{
		/*caso contrario remueve enlace dos y pasa a uno*/
        enlaces.classList.remove('dos');//
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
});

/*cuando la ventana cambie de tamaño*/ 
window.addEventListener('resize', function(){
    if(screen.width > 1100){ // si la panatalla es mayor a 1100 px
		contador=0; // contador es 0 para que se oculte
		// se agrega lo siguiente para cambiar la funcion y se oculte el menu
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');

    }
});



/* lo sigueinte es para que no se oculte mientras no se le de click al menu hamburguesa */
window.addEventListener('click',function(e){ //lee el evento click dentro del menu hamburguesa
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('.links-header'); // elige el selectro del menu dentro del header
        if(e.target == span){
            contador=0;
        }
    }
});

/*funcion para boton hacia arriba*/

window.onscroll = function(){
	if(document.documentElement.scrollTop>200){
		document.querySelector('.go-top-container').classList.add('show')
	}
	else{
		document.querySelector('.go-top-container').classList.remove('show')
	}
}

document.querySelector('.go-top-container')
.addEventListener('click',() =>{
	window.scrollTo({
		top:0,
		behavior: 'smooth'
	});
});

	/*************** Efecto de las Tarjetas en DIMENSIONES ***************/

	var altoTarjeta = "25px";
	var nuevoAlto = "135px";

	$(".contenidod .tarjetasd ul .samaritana").click(function() /* Click sobre samaritana */
	{
		if( $(this).css( "height" ) == altoTarjeta ) /* si no esta abierta */
		{
			/* abre la tarjeta */
			$(this).css({"height": nuevoAlto,"transition": "0.25s ease-in-out height"});

			if(screen.width >= 1024)
			{
				/* pone la imagen de fondo para escritorio*/
				$(".contenidod .imagent").css({
					"background-image": "url(img/samaritana.jpg)",
					"background-size": "cover",
					"background-repeat": "no-repeat",
					"background-position": "center",
					"max-width": "400px",
					"width": "400px",
					"min-height": "380px",
					"transition": "0.5s linear background-image"
				});
			}
			else
			{
				/* pone la imagen de fondo */
				$(".contenidod .imagent").css({
					"background-image": "url(img/samaritana.jpg)",
					"background-size": "cover",
					"background-repeat": "no-repeat",
					"background-position": "center",
					"width": "330px",
					"min-height": "330px",
					"transition": "0.5s linear background-image"
				});
			}

			/* cierra todas las demas */
			$(".contenidod .tarjetasd ul .pascual").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
			$(".contenidod .tarjetasd ul .comunidades").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
			$(".contenidod .tarjetasd ul .misionera").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});			
		}
	});	

	$(".contenidod .tarjetasd ul .pascual").click(function() /* click sobre pascual */
	{
		if( $(this).css( "height" ) == altoTarjeta ) /* si no esta abierta */
		{
			/* abre la tarjeta */
			$(this).css({"height": nuevoAlto,"transition": "0.25s ease-in-out height"});

			if(screen.width >= 1024)
			{
				/* pone la imagen de fondo para escritorio*/
				$(".contenidod .imagent").css({
					"background-image": "url(img/pascual.jpg)",
					"background-size": "cover",
					"background-repeat": "no-repeat",
					"background-position": "center",
					"max-width": "400px",
					"width": "400px",
					"min-height": "380px",
					"transition": "0.5s linear background-image"
				});
			}
			else
			{
				/* pone la imagen de fondo */
				$(".contenidod .imagent").css({
					"background-image": "url(img/pascual.jpg)",
					"background-size": "cover",
					"background-repeat": "no-repeat",
					"background-position": "center",
					"width": "330px",
					"min-height": "330px",
					"transition": "0.5s linear background-image"
				});
			}

			/* cierra todas las demas */
			$(".contenidod .tarjetasd ul .samaritana").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
			$(".contenidod .tarjetasd ul .comunidades").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
			$(".contenidod .tarjetasd ul .misionera").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});			
		}
	});
	
	$(".contenidod .tarjetasd ul .comunidades").click(function() /* click sobre comunidades */
	{
		if( $(this).css( "height" ) == altoTarjeta ) /* si no esta abierta */
		{
			/* abre la tarjeta */
			$(this).css({"height": nuevoAlto,"transition": "0.25s ease-in-out height"});

			if(screen.width >= 1024)
			{
				/* pone la imagen de fondo para escritorio*/
				$(".contenidod .imagent").css({
					"background-image": "url(img/comunidades.jpg)",
					"background-size": "cover",
					"background-repeat": "no-repeat",
					"background-position": "center",
					"max-width": "400px",
					"width": "400px",
					"min-height": "380px",
					"transition": "0.5s linear background-image"
				});
			}
			else
			{
				/* pone la imagen de fondo */
				$(".contenidod .imagent").css({
					"background-image": "url(img/comunidades.jpg)",
					"background-size": "cover",
					"background-repeat": "no-repeat",
					"background-position": "center",
					"width": "330px",
					"min-height": "330px",
					"transition": "0.5s linear background-image"
				});
			}

			/* cierra todas las demas */
			$(".contenidod .tarjetasd ul .samaritana").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
			$(".contenidod .tarjetasd ul .pascual").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
			$(".contenidod .tarjetasd ul .misionera").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});			
		}
	});
	
	$(".contenidod .tarjetasd ul .misionera").click(function() /* click sobre misionera */
	{
		if( $(this).css( "height" ) == altoTarjeta ) /* si no esta abierta */
		{
			/* abre la tarjeta */
			$(this).css({"height": nuevoAlto,"transition": "0.25s ease-in-out height"});

			if(screen.width >= 1024)
			{
				/* pone la imagen de fondo para escritorio*/
				$(".contenidod .imagent").css({
					"background-image": "url(img/misionera.jpg)",
					"background-size": "cover",
					"background-repeat": "no-repeat",
					"background-position": "center",
					"max-width": "400px",
					"width": "400px",
					"min-height": "380px",
					"transition": "0.5s linear background-image"
				});
			}
			else
			{
				/* pone la imagen de fondo */
				$(".contenidod .imagent").css({
					"background-image": "url(img/misionera.jpg)",
					"background-size": "cover",
					"background-repeat": "no-repeat",
					"background-position": "center",
					"width": "330px",
					"min-height": "330px",
					"transition": "0.5s linear background-image"
				});
			}

			/* cierra todas las demas */
			$(".contenidod .tarjetasd ul .samaritana").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
			$(".contenidod .tarjetasd ul .pascual").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});
			$(".contenidod .tarjetasd ul .comunidades").css({"height": "25px","transition": "0.25s ease-in-out height", "overflow": "hidden"});			
		}
	});	
