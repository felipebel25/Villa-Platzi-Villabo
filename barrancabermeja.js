
var barrancabermeja = document.getElementById("anapoima");
var papel = barrancabermeja.getContext("2d");

var xBurra = 250;
var yBurra = 250;

var fondo = 
{
    url: "./Images/fondo.png",
    cargaOK: false
}
var vaca = 
{
    url: "./Images/vaca.png",
    cargaOK: false
}
var cerdo = 
{
   
    url: "./Images/cerdo.png",
    cargaOK: false
}
var pollo = 
{
	url:"./Images/pollo.png",
	cargaOK: false
}
var marimonda = 
{
	url:"./Images/Marimondas.png",
	cargaOK: false
}
var burra =
{
	url:"./Images/burra.png",
	cargaOK: false

}

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdos);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollos);

marimonda.objeto = new Image();
marimonda.objeto.src = marimonda.url;
marimonda.objeto.addEventListener("load", cargarMarimonda);

burra.objeto =new Image();
burra.objeto.src = burra.url;
burra.objeto.addEventListener("load", cargarBurra);

	var cantidad = aleatorio(0,7);

function dibujar()
{

	for(var  m = 0; m<cantidad; m++){}


		
	if(fondo.cargaOK == true)
	{
		papel.drawImage(fondo.objeto,0,0);
	}

	
	if(vaca.cargaOK)
	{
	    var cantidadVacas = aleatorio(2,2);
		for(var  v = 0; v < cantidadVacas; v++)
	 		
	  {				
		
		var x =aleatorio(0,10);
		var y = aleatorio(0,21);
		x_v = x * 40;
		y_v = y * 20;
		x_vFin = x_v;
		y_vFin = y_v;
		papel.drawImage(vaca.objeto,x_v,y_v);
		

	  }
	  
	}

	
	if(cerdo.cargaOK) 
	 {
		var cantidadCerdo = aleatorio(2,2);
		for(var  d = 0; d  <  cantidadCerdo; d++)
	
		{
		
			var x = aleatorio(0, 10);
			var y = aleatorio(0, 21);
			x = x*40;
			y = y*20;
			xCerdo = x;
			yCerdo= y;
					
			papel.drawImage(cerdo.objeto,xCerdo,yCerdo);
			
			
		}
	     
     }
	
	if(pollo.cargaOK)
	{	
		var cantidadPollos = aleatorio(2,2);	
		for(var  k = 0; k < cantidadPollos; k++){

			var pollopopo = cantidadPollos;
			var x = aleatorio(0, 10);
			var y = aleatorio(0, 21);
			x = x*40;
			y = y*20;
			xPollo = x;
			yPollo = y; 
			xPolloFin = xPollo;
			yPolloFin = yPollo;		
			papel.drawImage(pollo.objeto,xPollo,yPollo);

	  }
	 }	
	
	if(marimonda.cargaOK)
	{ 
		var cantidadMarimonda = aleatorio(2,2);
		for(var  c = 0; c < cantidadMarimonda; c++)
	 {
	 		var popoHumano = cantidadMarimonda;
	 		var x = aleatorio(0, 10);
			var y = aleatorio(0, 21);
			x = x*40;
			y = y*20;
			xMarimonda = x;
			yMarimonda = y; 
			xMarimondaFin = xMarimonda;
			yMarimondaFin = yMarimonda;		
			papel.drawImage(marimonda.objeto,xMarimonda,yMarimonda);
	  }
			

	
	

		var cantidades = {
		vacas: v,
		cerdo: d,
		pollo: k,
		marimonda: c
		};	
		console.log(cantidades);
	
		var toro = {
			x_v,
			y_v

		};
		console.log("p vaca" , x_vFin ,y_vFin);

		var porky = {
			xCerdo,
			yCerdo
		};
		console.log("p cerdo", xCerdo,yCerdo);
	
		var broster = {
			xPolloFin,
			yPolloFin
		};
		console.log("p pollo", xPollo, yPollo);

		var mondas = {
			xMarimonda,
			yMarimonda
		};
		console.log("p marimonda", xMarimondaFin, yMarimondaFin);


	} 
	

	}
	

function aleatorio(min,maxi){
	var resultado;
	resultado = Math.floor(Math.random()*(maxi - min + 1)) + min;
	return resultado;
}

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}
function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
  
}
function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}
function cargarPollos()
{
	pollo.cargaOK = true;
	dibujar();
	
}
function cargarMarimonda()
{
	marimonda.cargaOK = true;
	dibujar();
}

function cargarBurra()
{
	burra.cargaOK = true;
	dibujar();
}


var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

console.log(teclas);


document.addEventListener("keyup", dibujarporTeclado);


function dibuja_burro(evento)
{	var cantidadburra = 1;
	if(burra.cargaOK)
	{ 
	papel.drawImage(fondo.objeto,0,0);
	papel.drawImage(vaca.objeto,x_vFin,y_vFin);
	papel.drawImage(cerdo.objeto,xCerdo,yCerdo);
	papel.drawImage(pollo.objeto,xPolloFin,yPolloFin);
	papel.drawImage(marimonda.objeto,xMarimondaFin,yMarimondaFin);
	papel.drawImage(burra.objeto,xBurra,yBurra);
	
	}


}


function dibujarporTeclado(evento)
{
	var movimiento = 30;

	var teclas = {
  	LEFT: 37,
 	UP: 38,
  	RIGHT: 39,
 	DOWN: 40
	};

	switch(evento.keyCode)
	{
		case teclas.UP:
		console.log("ARRIBA");	
		yBurra = yBurra - movimiento;
		dibuja_burro(xBurra,yBurra);
			
		break;
		
		case teclas.DOWN:
		console.log("DOWN");	
		yBurra = movimiento + yBurra;
		dibuja_burro(xBurra,yBurra);
		
		break;

		case teclas.LEFT:
		console.log("IZQUIERDA");
		xBurra = xBurra - movimiento;
		dibuja_burro(xBurra,yBurra);	
		break

		case teclas.RIGHT:
		console.log("DERECHA");	
		xBurra = xBurra + movimiento;
		dibuja_burro(xBurra,yBurra);
		
		break;
		
		default:

	}


	
}

function burraarriba()
{
	var movimiento = 22;
	yBurra = yBurra - movimiento;
	dibuja_burro(xBurra,yBurra);

}

function burraabajo()
{
	var movimiento = 22;
	yBurra = yBurra + movimiento;
	dibuja_burro(xBurra,yBurra);

}

function burraizquierda()
{
	var movimiento = 22;
	xBurra = xBurra - movimiento;
	dibuja_burro(xBurra,yBurra);

}
function burraderecha()
{
	var movimiento = 22;
	xBurra = xBurra - movimiento;
	dibuja_burro(xBurra,yBurra);
	
}