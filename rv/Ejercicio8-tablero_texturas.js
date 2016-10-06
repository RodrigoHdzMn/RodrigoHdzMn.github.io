var TEXTURA=new Object();
 material_cubo;
 forma_cubo;
TEXTURA.retrollamada = function(textura)
{
      material_cubo= new THREE.MeshBasicMaterial( {map:textura} );
      forma_cubo = new THREE.BoxGeometry( 10,.1,10);
     
}

TEXTURA.setup=function()
{
      TEXTURA.escena = new THREE.Scene();
      
      var campoVision=30;// grado
      var relacionAspecto=window.innerWidth/window.innerHeight;
      var planoCercano=1;
      var planoLejano=1000;
      
      TEXTURA.camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
      TEXTURA.camara.position.z = 200;
      TEXTURA.camara.position.y = 25;
      TEXTURA.camara.position.x = 50;
      
      var cargador = new THREE.TextureLoader();

      for(var i=1; i<=8; i++)
      {
            for(var j=1; j<=8; j++)
            {
	            if(j%2 ==0)
	            {
		            if(i%2 == 0)
		            cargador.load("Textura_marmol_negro.jpg",TEXTURA.retrollamada); 
		            else
		            cargador.load("Textura_marmol_blanco.jpg",TEXTURA.retrollamada);
	            }
	            else
	            {
		            if(i%2 == 0)
		            cargador.load("Textura_marmol_blanco.jpg",TEXTURA.retrollamada);
		      	    else
		            cargador.load("Textura_marmol_negro.jpg",TEXTURA.retrollamada);
	            }
	
	            TEXTURA.mallaCubo= new THREE.Mesh(forma_cubo,material_cubo);
		    TEXTURA.mallaCubo.position.x=10*i;
	            TEXTURA.mallaCubo.position.z=10*j;
	            TEXTURA.escena.add(TEXTURA.mallaCubo);
            }
      }
      
      var lienzo=document.getElementById("tablero_texturas");
      TEXTURA.renderizador=new THREE.WebGLRenderer({canvas:lienzo, antialias: true});
      TEXTURA.renderizador.setSize(600,600);
}

TEXTURA.main=function()
{
      TEXTURA.renderizador.render(TEXTURA.escena,TEXTURA.camara)
}

TEXTURA.setup();
TEXTURA.main();
