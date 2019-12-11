	/*-------------script d pagina nuestra parroquia-----------------------*/
	document.addEventListener("DOMContentLoaded", page_onload);

	function page_onload(e)
	{
		//Todos loe elementos img que tengan el atributo data-src
		var images = document.querySelectorAll("img[data-src]");
		var imagesLoaded = 0;
	
		for(var i=0; i<images.length; i++)
		{
			/* Saber cuando ya cargaron las imagenes para empezar a mover */
			images[i].addEventListener("load", function(e){
				imagesLoaded++;
				
				if(imagesLoaded == images.length)
				{
					init_slider(images);
				}
			}); /*function(e) directamente en el evento se llama Funcion anonima*/
	
			images[i].src = images[i].dataset.src; //data-src  dataset.src
		}
	}
	
	var slides = 0;
	var sliderTrack = null;
	var timeMilliSeconds = 4000; //4 seg.
	var timeLapsRef = null;
	
	var dots = document.getElementsByClassName("dot");
	
	function init_slider(images)
	{
		//La cantidad de slides que hay (imagenes). +1 porque la primera ya esta cargada
		slides = images.length + 1;
	
		//llama a todos los que tengan clase sliderTrack y el [0] toma solo el primero
		sliderTrack = document.getElementsByClassName("sliderTrack")[0];
	
		//Obtengo el ancho del dispositivo para siempre tener una imagen pegada a la otra
		sliderTrack.style.width = (100 * slides) + "vw";
	
		//SWIPE
		//Se coloca aqui porque es el SliderTrack el que se mueve. Cuando ocurren los eventos
		//los manda a las respectivas funciones
		sliderTrack.addEventListener("mousedown", MouseDown);
		sliderTrack.addEventListener("mousemove", MouseMove);
		sliderTrack.addEventListener("mouseup", MouseUp);
	
	
		//Ir al Slide del Punto que se clickeo
		Ir();
	
		//Empezarse a mover. setTimeout() es un temporizador que cuenta desde x numero hasta 0
		//y ahi empieza a ejecutar lo que se le manda
		timeLapsRef = setTimeout(slideTick, timeMilliSeconds);
	}
	
	var currentSlide = 0; //Primer Slide Indice 0
	var direction = 1;
	
	function slideTick() 
	{
		//Mover
		//currentSlide += 1;
		//currentSlide += direction;
	
		//Hace lo inverso a lo que estaba
		if( (currentSlide === slides - 1 && direction === 1) || (currentSlide === 0 && direction === -1) )
		{
			//currentSlide = 0;
	
			//Que cambie de direccion
			direction = direction * -1;
		}
	
		currentSlide += direction;
	
		moveTo(currentSlide);
	}
	
	function moveTo(to)
	{
		//Se mueve cada 100vw a la izquierda
		sliderTrack.style.left = (-100 * to) + "vw";
	
		//Poner Color Punto. Le envio el currentSlide
		colorDot(to);
	
		//Se repite el ciclo cada vez LO CAMBIE, ESTABA DESPUES DEL LLAMADO DE moveTo en slideTick
		//PERO LO PUSE AQUI PARA QUE CONTINUARA DESPUES DE DAR CLICK A UN PUNTO
		timeLapsRef = setTimeout(slideTick, timeMilliSeconds);
	}
	
	function colorDot(to)
	{
		//Recorre la cantidad de puntos que es la misma cantidad de slides
		for(let i=0; i<dots.length; i++)
		{
			//Si el punto coincide con el slide lo pinta, sino lo despinta
			if(i == to)
			{
				dots[i].style.backgroundColor = "#333";
				dots[i].style.transition = "0.90s ease-in-out background-color";
			}
			else
			{
				dots[i].style.backgroundColor = "transparent";
				dots[i].style.transition = "0.90s ease-in-out background-color";
			}
		}
	}
	
	
	function Ir()
	{
		//Recorre la cantidad de puntos que es la misma cantidad de slides
		for(let i=0; i<dots.length; i++)
		{
			//Se evalua si se da click en un punto y dependiendo de su posicion se lleva al slide
			dots[i].addEventListener("click", function onclick(){
				clearTimeout(timeLapsRef);
				moveTo(i);
			});
		}
	}
	
	
	
	
	//Presionar y Mover se llama Swipe y para detectarlo se necesitan 3 eventos:
	//Cuando se presiona el mouse
	//Cuando se mueve
	//Cuando se levanta
	
	//MOVER DE IZQ A DER ES SOLO EN EL EJE X
	var swipeX1, swipeX2;
	
	function MouseDown(e)
	{
		//Registro donde empezo
	
		//Revisa si el target donde se presiono es el slider
		if(e.currentTarget.className == "sliderTrack")
		{
			swipeX1 = e.clientX; //Ubicacion del Mouse en X en ese momento
			//clearInterval(timeLapsRef); //Se detiene la animacion
	
			//Ya encontro el elemento y se detiene este evento
			e.stopPropagation();
			e.preventDefault(); 
		}
	}
	
	function MouseMove(e)
	{
		//Registro movimiento
	
		swipeX2 = e.clientX;
	}
	
	function MouseUp(e)
	{
		//Registro donde termino
	
		var delta = swipeX1 - swipeX2 //Distancia recorrida en X (Positiva o Negativa)
	
		//Si la distancia es mayor a 50 pixeles se quiere avanzar, por lo que la
		//direcion es positiva
		if(delta > 50)
		{
			direction = 1;
		}
	
		//Si la distancia es menor a -50 pixeles se quiere regresar, por lo que la
		//direcion es negativa
		if(delta < -50)
		{
			direction = -1;
		}
	}
	
	/*-------------script d pagina nuestra parroquia-----------------------*/
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

