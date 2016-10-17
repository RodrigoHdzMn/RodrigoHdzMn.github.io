
var grupo= new THREE.Group();

//	cont=cont+1;   console.log( 'i-j:  '+ i + '  '+ j );
var setup=function()
{
        escena = new THREE.Scene();
        //////////////////////////
	var cargadorTextura= new Array();
	cont =0;
for(i=1; i<=8; i++)
{
   for(j=1; j<=8; j++)
   {
	var forma = new THREE.BoxGeometry( 10,.1,10);
	
	if(j%2 ==0)
	{
		if(i%2 == 0)
		{
			var posX=10*i;
			var posZ=10*j;
			cargadorTextura[cont] = new THREE.TextureLoader();
			cargadorTextura.load("Textura_marmol_negro.jpg",
					    function(textura)
					     {
					     	//var forma = new THREE.BoxGeometry( 10,.1,10);
					     	var material= new THREE.MeshBasicMaterial( {map:textura} );
						var malla=new THREE.Mesh(forma, material);
						malla.position.x=posX;
						malla.position.z=posZ;
						escena.add(malla);
					     },		
		// Function called when download progresses
		function ( xhr ) 
		{
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
		},
		// Function called when download errors
		function ( xhr ) 
		{
		console.log( 'An error happened' );
		}
					    );
		}
		else
		{
		        var material = new THREE.MeshBasicMaterial( {color: 0x727272}); //0xcfcfcf
			var cubo = new THREE.Mesh(forma, material);
			cubo.position.x=10*i;
			cubo.position.z=10*j;
			grupo.add(cubo);
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
		}
		else
		{
			var material = new THREE.MeshBasicMaterial( {color: 0xffffff}); //0xcfcfcf
			var cubo = new THREE.Mesh(forma, material);
			cubo.position.x=10*i;
			cubo.position.z=10*j;
			grupo.add(cubo);
		}
	}
	cont=cont+1;
   }
}

	///////////////////////////////
	
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

	/*
	var materialTexturaNegra ="Textura_marmol_negro.jpg";
	var materialTexturaBlanca ="Textura_marmol_blanco.jpg";
	
	var cargador1Textura= new THREE.TextureLoader();
	cargador1Textura.load( materialTexturaNegra,
	        function(texturaNegra)
		{
			for(var i=1; i<=8; i++)
			{
				for(var j=1; j<=8; j++)
				{
					if(j%2 ==0)
					{
						if(i%2 ==0)
						{
							var forma = new THREE.BoxGeometry( 10,.1,10);
							var material= new THREE.MeshBasicMaterial( {map:texturaNegra} );
							var malla=new THREE.Mesh(forma, material);
							malla.position.x=i;
							malla.position.z=j;
							grupo.add(malla);
							console.log( 'i-j:  '+ i + '  '+ j );
						}
						else
						{
						}
					}
					else
					{
						if(i%2 ==0)
						{
						}
						else
						{
							var forma = new THREE.BoxGeometry( 10,.1,10);
							var material= new THREE.MeshBasicMaterial( {map:texturaNegra} );
							var malla=new THREE.Mesh(forma, material);
							malla.position.x=i;
							malla.position.z=j;
							grupo.add(malla);
							console.log( 'i-j:  '+ i + '  '+ j );
						}
					}//Fin primer IF
				}//Fin For J
			}//Fin for i	
		});
	var cargador2Textura= new THREE.TextureLoader();	
	cargador2Textura.load( materialTexturaBlanca,
	        function(texturaBlanca)
		{
			for(var i=1; i<=8; i++)
			{
				for(var j=1; j<=8; j++)
				{
					if(j%2 ==0)
					{
						if(i%2 ==0)
						{
						}
						else
						{
							var forma = new THREE.BoxGeometry( 10,.1,10);
							var material= new THREE.MeshBasicMaterial( {map:texturaBlanca} );
							var malla=new THREE.Mesh(forma, material);
							malla.position.x=i;
							malla.position.z=j;
							escena.add(malla);
							console.log( 'i-j:  '+ i + '  '+ j );
						}
					}
					else
					{
						if(i%2 ==0)
						{
							var forma = new THREE.BoxGeometry( 10,.1,10);
							var material= new THREE.MeshBasicMaterial( {map:texturaBlanca} );
							var malla=new THREE.Mesh(forma, material);
							malla.position.x=i;
							malla.position.z=j;
							escena.add(malla);
							console.log( 'i-j:  '+ i + '  '+ j );
						}
						else
						{
						}
					}//Fin primer IF
				}//Fin For J
			}//Fin for i
		});*/
