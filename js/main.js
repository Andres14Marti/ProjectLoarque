let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click",function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos');
        contador=1;
    }else{
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
})

window.addEventListener('resize', function(){
    if(screen.width > 1100){
        contador=0;
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');

    }
})

window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('.links-header');
        if(e.target == span){
            contador=0;
        }
    }
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
