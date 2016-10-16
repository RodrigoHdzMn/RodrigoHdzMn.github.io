
var grupo= new THREE.Group();

	
	//var tablero= new Array();
	//var cont=0;
for(var i=1; i<=8; i++)
{
   for(var j=1; j<=8; j++)
   {
	var forma = new THREE.BoxGeometry( 10,.1,10);	
	if(j%2 ==0)
	{
		if(i%2 == 0)
		{
			var cargadorTextura = new THREE.TextureLoader();
			cargadorTextura.load("Textura_marmol_blanco.jpg",
					    function(textura)
					     {
					     	var forma2 = new THREE.BoxGeometry( 10,.1,10);
					     	var material= new THREE.MeshBasicMaterial( {map:textura} );
						var malla=new THREE.Mesh(forma2, material);
						malla.position.x=10*i;
						malla.position.z=10*j;
						console.log( 'i-j:  '+ i + '  '+ j );
						grupo.add(malla);
					     }
					    );
		}
		else
		{
		        var cargadorTextura = new THREE.TextureLoader();
			cargadorTextura.load("Textura_marmol_negro.jpg",
					    function(textura,j,i)
					     {
					     	var forma3 = new THREE.BoxGeometry( 10,.1,10);
					     	var material= new THREE.MeshBasicMaterial( {map:textura} );
						var malla=new THREE.Mesh(forma3, material);
						malla.position.x=10*i;
						malla.position.z=10*j;
						console.log( 'i-j:  '+ i + '  '+ j );
						grupo.add(malla);
					     }
					    );
		}
	}
	else
	{
		if(i%2 == 0)
		{
			var material = new THREE.MeshBasicMaterial( {color: 0x727272}); //0xcfcfcf
			var cubo = new THREE.Mesh(forma, material);
			cubo.position.x=10*i;
			cubo.position.z=10*j;
			grupo.add(cubo);
			console.log( 'i-j:  '+ i + '  '+ j );
		}
		else
		{
			var material = new THREE.MeshBasicMaterial( {color: 0xffffff}); //0xcfcfcf
			var cubo = new THREE.Mesh(forma, material);
			cubo.position.x=10*i;
			cubo.position.z=10*j;
			grupo.add(cubo);
			console.log( 'i-j:  '+ i + '  '+ j );
		}
	}
//	cont=cont+1;
   }
}

var setup=function()
{
        escena = new THREE.Scene();
      
        var campoVision=30;// grado
	var relacionAspecto=window.innerWidth/window.innerHeight;
	var planoCercano=1;
	var planoLejano=1000;

	camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
	camara.position.z = 200;
	camara.position.y = 25;
	camara.position.x = 50;
	
      escena.add(grupo);
      var lienzo=document.getElementById("tablero_texturas");
      renderizador=new THREE.WebGLRenderer({canvas:lienzo, antialias: true});
      renderizador.setSize(600,600);
}

var loop=function()
{
      requestAnimationFrame(loop);

      renderizador.render(escena,camara)
}

var escena, camara, renderizador;

setup();
loop();
