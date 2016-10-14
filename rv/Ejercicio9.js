function Alfil()
{
	var Tb=0.8*4.5;//tamaño base
        var altura1=Tb/4;
        var baseForma= new THREE.CylinderGeometry(Tb, Tb*1.25, altura1,60 );//dia.sup, dia.inf, altura
        baseForma.translate(0,0,0);
	
        var baseForma2= new THREE.TorusGeometry( Tb*5/8, Tb/2, Tb*75/8, Tb*62.5 );
        baseForma2.rotateX(Math.PI/2);
        baseForma2.translate(0,Tb*9/20,0);

        var forma3 = new THREE.TorusGeometry( Tb*7/8, Tb/8, Tb*75/8, Tb*62.5 );
        forma3.rotateX(Math.PI/2);
        forma3.translate(0,Tb*13/16,0);
	
        var points = [];
	for ( var i = 4; i < 20; i ++ )
	{
		  var a= Math.cos( i * 0.2 ) * 5 + 10 ;
		  var b=( i - 5 ) * 2;
		  points.push( new THREE.Vector2( (Tb/16)*a, (Tb/16)*b ) );
	}
	var forma4 = new THREE.LatheGeometry( points ,64);
	forma4.translate(0,Tb*17/16,0);

	var forma5 = new THREE.TorusGeometry( Tb*3/8, Tb/8, Tb*15/4, Tb*62.5 );
	forma5.rotateX(Math.PI/2);
        forma5.translate(0,Tb*47/16,0);

	var forma6 = new THREE.TorusGeometry( Tb/4, Tb/8, Tb*12.5, Tb*62.5 );
	forma6.rotateX(Math.PI/2);
	forma6.translate(0,Tb*49/16,0);

	var forma7 = new THREE.TorusGeometry( Tb/4, Tb*13/160, Tb*12.5, Tb*62.5 );
	forma7.rotateX(Math.PI/2);
        forma7.translate(0,Tb*13/4,0);

	var points2 = [];
	for ( var i = -4; i < 7; i ++ )
	{
		  var a= Math.cos( i * 0.4 ) * 6 + 5.5 ;
		  var b=( i - 5 ) * 2;
		   points2.push( new THREE.Vector2( (Tb*3/80)*a, (Tb*3/80)*b ) );
	}
	var forma8 = new THREE.LatheGeometry( points2 ,64);
	forma8.translate(0,Tb*63/16,0);

	var forma9 = new THREE.SphereGeometry( Tb/8, Tb*20, Tb*20 );
	forma9.translate(0,Tb*65/16,0);

  	var baseMalla=new THREE.Mesh(baseForma);
	var base2Malla=new THREE.Mesh(baseForma2);
	var forma3Malla=new THREE.Mesh(forma3);
	var forma4Malla=new THREE.Mesh(forma4);
	var forma5Malla=new THREE.Mesh(forma5);
	var forma6Malla=new THREE.Mesh(forma6);
	var forma7Malla=new THREE.Mesh(forma7);
	var forma8Malla=new THREE.Mesh(forma8);
	var forma9Malla=new THREE.Mesh(forma9);

	var alfilForma=new THREE.Geometry();
	
	alfilForma.merge(baseMalla.geometry, baseMalla.matrix);
	alfilForma.merge(base2Malla.geometry, base2Malla.matrix);
	alfilForma.merge(forma3Malla.geometry, forma3Malla.matrix);
	alfilForma.merge(forma4Malla.geometry, forma4Malla.matrix);
	alfilForma.merge(forma5Malla.geometry, forma5Malla.matrix);
     	alfilForma.merge(forma6Malla.geometry, forma6Malla.matrix);
	alfilForma.merge(forma7Malla.geometry, forma7Malla.matrix);
	alfilForma.merge(forma8Malla.geometry, forma8Malla.matrix);
	alfilForma.merge(forma9Malla.geometry, forma9Malla.matrix);
	
	//var material = new THREE.MeshNormalMaterial();
       // this.malla = new THREE.Mesh(alfilForma,material);
	var materialAlfil;
	var progreso = 0;
	var cargadorTextura = new THREE.TextureLoader();
	cargadorTextura.load( 
		"Textura_marmol_negro.jpg",
	        function(textura)
		{
			materialAlfil = new THREE.MeshBasicMaterial({map:textura});
		},		
		// Function called when download progresses
	function ( xhr ) 
		{
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
			progreso=(xhr.loaded / xhr.total * 100) ;
		},
	// Function called when download errors
	function ( xhr ) 
		{
		console.log( 'An error happened' );
		}
	);
	this.progreso = progreso;
	this.malla = new THREE.Mesh(alfilForma,materialAlfil);
}

var TEXTURA=new Object();

TEXTURA.retrollamada = function(textura)
{
      var material= new THREE.MeshBasicMaterial( {map:textura} );
      TEXTURA.malla= new THREE.Mesh(new THREE.SphereGeometry(1), material);
      TEXTURA.escena.add(TEXTURA.malla);
}

TEXTURA.setup=function()
{
      TEXTURA.escena = new THREE.Scene();
      
      var cargador = new THREE.TextureLoader();
      cargador.load("Textura_marmol_negro.jpg",TEXTURA.retrollamada);
      
      TEXTURA.camara= new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
      
      TEXTURA.camara.position.z=5;
      
      var lienzo=document.getElementById("tablero_texturas");
      TEXTURA.renderizador=new THREE.WebGLRenderer({canvas:lienzo, antialias: true});
      TEXTURA.renderizador.setSize(600,600);
}

TEXTURA.loop=function()
{
      requestAnimationFrame(TEXTURA.loop);
      if(TEXTURA.malla !== undefined)
      {
            TEXTURA.malla.rotateX( 0.01 );
            TEXTURA.malla.rotateY( 0.01 );
      }
      TEXTURA.renderizador.render(TEXTURA.escena,TEXTURA.camara)
}

TEXTURA.setup();
TEXTURA.loop();