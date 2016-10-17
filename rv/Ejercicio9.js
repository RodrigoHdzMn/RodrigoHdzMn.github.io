
var grupo= new THREE.Group();

function Tablero()
{
	var materialTexturaNegra =" ";
	var materialTexturaBlanca =" ";
	
	var cargadorTextura= new THREE.TextureLoader();
	cargadorTextura.load( materialTexturaNegra,
	        function(texturaNegra)
		{
			var forma = new THREE.BoxGeometry( 10,.1,10);
			var material= new THREE.MeshBasicMaterial( {map:textura} );
			var malla=new THREE.Mesh(forma, material);
			for(var i=1; i<=8; i++)
			{
				for(var j=1; j<=8; j++)
				{
					if(j%2 ==0)
					{
						if(i%2 ==0)
						{
							malla.position.x=i;
							malla.position.z=j;
							grupo.add(malla);
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
							malla.position.x=i;
							malla.position.z=j;
							grupo.add(malla);
						}
					}//Fin primer IF
				}//Fin For J
			}//Fin for i	
		});
		
	cargadorTextura.load( materialTexturaBlanca,
	        function(texturaBlanca)
		{
			var forma = new THREE.BoxGeometry( 10,.1,10);
			var material= new THREE.MeshBasicMaterial( {map:textura} );
			var malla=new THREE.Mesh(Forma, material);
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
							malla.position.x=i;
							malla.position.z=j;
							grupo.add(malla);
						}
					}
					else
					{
						if(i%2 ==0)
						{
							malla.position.x=i;
							malla.position.z=j;
							grupo.add(malla);
						}
						else
						{
						}
					}//Fin primer IF
				}//Fin For J
			}//Fin for i
		});
}
//	cont=cont+1;   console.log( 'i-j:  '+ i + '  '+ j );
var setup=function()
{
        escena = new THREE.Scene();
        var tablero= new Tablero();
	
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
