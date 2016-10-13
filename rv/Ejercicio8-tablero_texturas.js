
function Torre()
{
	var Tb=0.8*5;//tamaño base
	var altura1=Tb/4;
	var baseForma= new THREE.CylinderGeometry(Tb, Tb, altura1,60 );//dia.sup, dia.inf, altura
	baseForma.translate(0,0,0);

	var altura2=altura1;
	var forma2 = new THREE.CylinderGeometry(Tb*3/4, Tb*3/4, altura2,60 );
	forma2.translate(0,altura2,0);

	var altura3=altura1;
	var forma3 = new THREE.CylinderGeometry(Tb/2, Tb*3/4, altura3, 60 );
	forma3.translate(0,altura2+altura3,0);

	var altura4=Tb*1.875;
	var forma4 = new THREE.CylinderGeometry(Tb/2, Tb/2, altura4, 60 );
	forma4.translate(0,Tb*1.25,0);

	var altura5=Tb/16;
	var forma5 = new THREE.CylinderGeometry(Tb*9/16, Tb/2, altura5,60 );
	forma5.translate(0,Tb*35/16,0);

	var altura6=altura5;
	var forma6 = new THREE.CylinderGeometry(Tb*9/16, Tb*9/16, altura6,60 );
	forma6.translate(0,Tb*9/4,0);

	var altura7=Tb/8;
	var forma7 = new THREE.CylinderGeometry(Tb*3/4, Tb*9/16, altura7,60 );
	forma7.translate(0,Tb*37/16,0);

	var altura8=Tb*5/16;
	var forma8 = new THREE.CylinderGeometry(Tb*3/4, Tb*3/4, altura8,60 );
	forma8.translate(0,Tb*5/2,0);

	var dm=Tb/8;//diametro miniCilindros
	var am=Tb/2;//altura mini

	var Y=Tb*45/16;
	var X=(Tb*3/4 - dm)*Math.sin(3.14/3);
	var Z=(Tb*3/4 - dm)*Math.cos(3.14/3);
	//Atras
	var formaA1 = new THREE.CylinderGeometry(dm, dm, am,60 );
	formaA1.translate(0,Y,-(Tb*3/4 - dm));
	//Afrente
	var formaA2 = new THREE.CylinderGeometry(dm, dm, am,60 );
	formaA2.translate(0,Y,(Tb*3/4 - dm));
	//AtrasI
	var formaA3 = new THREE.CylinderGeometry(dm, dm, am,60 );
	formaA3.translate(-X,Y,-Z);
	//AtrasD
	var formaA4 = new THREE.CylinderGeometry(dm, dm, am,60 );
	formaA4.translate(X,Y,-Z);
	//FrenteI
	var formaA5 = new THREE.CylinderGeometry(dm, dm, am,60 );
	formaA5.translate(-X,Y,Z);
	//FrenteD
	var formaA6 = new THREE.CylinderGeometry(dm, dm, am,60 );
	formaA6.translate(X,Y,Z);

	var baseMalla=new THREE.Mesh(baseForma);
	var forma2Malla=new THREE.Mesh(forma2);
	var forma3Malla=new THREE.Mesh(forma3);
	var forma4Malla=new THREE.Mesh(forma4);
	var forma5Malla=new THREE.Mesh(forma5);
	var forma6Malla=new THREE.Mesh(forma6);
	var forma7Malla=new THREE.Mesh(forma7);
	var forma8Malla=new THREE.Mesh(forma8);
	var formaA1Malla=new THREE.Mesh(formaA1);
	var formaA2Malla=new THREE.Mesh(formaA2);
	var formaA3Malla=new THREE.Mesh(formaA3);
	var formaA4Malla=new THREE.Mesh(formaA4);
	var formaA5Malla=new THREE.Mesh(formaA5);
	var formaA6Malla=new THREE.Mesh(formaA6);

	var torreForma=new THREE.Geometry();

	torreForma.merge(baseMalla.geometry, baseMalla.matrix);
	torreForma.merge(forma2Malla.geometry, forma2Malla.matrix);
	torreForma.merge(forma3Malla.geometry, forma3Malla.matrix);
	torreForma.merge(forma4Malla.geometry, forma4Malla.matrix);
	torreForma.merge(forma5Malla.geometry, forma5Malla.matrix);
	torreForma.merge(forma6Malla.geometry, forma6Malla.matrix);
	torreForma.merge(forma7Malla.geometry, forma7Malla.matrix);
	torreForma.merge(forma8Malla.geometry, forma8Malla.matrix);
	torreForma.merge(formaA1Malla.geometry,formaA1Malla.matrix);
	torreForma.merge(formaA2Malla.geometry,formaA2Malla.matrix);
	torreForma.merge(formaA3Malla.geometry,formaA3Malla.matrix);
	torreForma.merge(formaA4Malla.geometry,formaA4Malla.matrix);
	torreForma.merge(formaA5Malla.geometry,formaA5Malla.matrix);
	torreForma.merge(formaA6Malla.geometry,formaA6Malla.matrix);
	
        var material = new THREE.MeshNormalMaterial();
        this.malla = new THREE.Mesh(torreForma,material);
}

function Peon()
{
	var Tb=0.8*2;//tamaño base
	var altura1=Tb/4;
	var baseForma= new THREE.CylinderGeometry(Tb, Tb, altura1,60 );//dia.sup, dia.inf, altura
      	baseForma.translate(0,0,0);

	var altura2=altura1;
	var forma2 = new THREE.CylinderGeometry(Tb*3/4, Tb*3/4, altura2,60 );
	forma2.translate(0,altura2,0);

	var altura3=altura1;
	var forma3 = new THREE.CylinderGeometry(Tb/2, Tb*3/4, altura3, 60 );
	forma3.translate(0,altura2+altura3,0);

	var points = [];
      	for ( var i = 0; i < 10; i ++ ) 
      	{
	      	  var a= Math.sin( i * 0.2 ) * 10 + 5 ;
		  var b=( i - 5 ) * 2;
		  points.push( new THREE.Vector2( (Tb*3/80)*a, (Tb*1/16)*b ) );//new THREE.Vector2( 0.06*a, 0.1*b )
	}
	var forma4 = new THREE.LatheGeometry( points );
	forma4.rotateX(Math.PI);
	forma4.translate(0,Tb*1.125,0);

      	var forma5 = new THREE.TorusGeometry( Tb/4, Tb/8, Tb*3.125, 100 );//(radius, tube, radialSegments)
	forma5.rotateX(Math.PI/2);
	forma5.translate(0,Tb*1.65,0);

	var forma6 = new THREE.SphereGeometry( Tb*5/8, 20*Tb, 20*Tb );
	forma6.translate(0,Tb*2.3,0);

	var baseMalla=new THREE.Mesh(baseForma);
	var forma2Malla=new THREE.Mesh(forma2);
	var forma3Malla=new THREE.Mesh(forma3);
	var forma4Malla=new THREE.Mesh(forma4);
	var forma5Malla=new THREE.Mesh(forma5);
	var forma6Malla=new THREE.Mesh(forma6);

	var peonForma=new THREE.Geometry();

	peonForma.merge(baseMalla.geometry, baseMalla.matrix);
	peonForma.merge(forma2Malla.geometry, forma2Malla.matrix);
	peonForma.merge(forma3Malla.geometry, forma3Malla.matrix);
	peonForma.merge(forma4Malla.geometry, forma4Malla.matrix);
	peonForma.merge(forma5Malla.geometry, forma5Malla.matrix);
	peonForma.merge(forma6Malla.geometry, forma6Malla.matrix);
	
	var material = new THREE.MeshNormalMaterial();
        this.malla = new THREE.Mesh(peonForma,material);
}

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
	this.malla = new THREE.Mesh(alfilForma,cargadorTextura);
}

var CONSTRUCTOR = new Object();

        var torre1= new Torre();
        var torre2= new Torre();
	var torre3= new Torre();
        var torre4= new Torre();
	var peon1= new Peon();
        var peon2= new Peon();
	var peon3= new Peon();
        var peon4= new Peon();
	var alfil1= new Alfil();
        var alfil2= new Alfil();
	var alfil3= new Alfil();
        var alfil4= new Alfil();

CONSTRUCTOR.setup = function()
{
        torre1.malla.position.x = 10;
        torre1.malla.position.z = 10;	
	torre2.malla.position.x = 80;
        torre2.malla.position.z = 10;	
	torre3.malla.position.x = 10;
        torre3.malla.position.z = 80;	
	torre4.malla.position.x = 80;
        torre4.malla.position.z = 80;
	
	peon1.malla.position.x = 20;
        peon1.malla.position.z = 20;	
	peon2.malla.position.x = 70;
        peon2.malla.position.z = 20;
	peon3.malla.position.x = 20;
        peon3.malla.position.z = 70;
	peon4.malla.position.x = 70;
        peon4.malla.position.z = 70;
	
	alfil1.malla.position.x = 30;
        alfil1.malla.position.z = 10;	
	alfil2.malla.position.x = 60;
        alfil2.malla.position.z = 10;	
	alfil3.malla.position.x = 30;
        alfil3.malla.position.z = 80;	
	alfil4.malla.position.x = 60;
        alfil4.malla.position.z = 80;
	
	var campoVision=30;// grado
	var relacionAspecto=window.innerWidth/window.innerHeight;
	var planoCercano=1;
	var planoLejano=1000;

	CONSTRUCTOR.camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
	CONSTRUCTOR.camara.position.z = 200;
	CONSTRUCTOR.camara.position.y = 25;
	CONSTRUCTOR.camara.position.x = 50;
      
        CONSTRUCTOR.escena = new THREE.Scene();
	
        CONSTRUCTOR.escena.add(torre1.malla);
        CONSTRUCTOR.escena.add(torre2.malla);
        CONSTRUCTOR.escena.add(torre3.malla);
        CONSTRUCTOR.escena.add(torre4.malla);
	CONSTRUCTOR.escena.add(peon1.malla);
        CONSTRUCTOR.escena.add(peon2.malla);
        CONSTRUCTOR.escena.add(peon3.malla);
        CONSTRUCTOR.escena.add(peon4.malla);
	CONSTRUCTOR.escena.add(alfil1.malla);
        CONSTRUCTOR.escena.add(alfil2.malla);
        CONSTRUCTOR.escena.add(alfil3.malla);
        CONSTRUCTOR.escena.add(alfil4.malla);
	
	var lienzo = document.getElementById("tablero_texturas");
        CONSTRUCTOR.renderizador = new THREE.WebGLRenderer({canvas:lienzo, antialias:true});
        CONSTRUCTOR.renderizador.setSize(window.innerHeight*.85,window.innerHeight*.85);
}

CONSTRUCTOR.loop = function()
{
      requestAnimationFrame( CONSTRUCTOR.loop );
	if( progreso.alfil1 && progreso.alfil2 && progreso.alfil3 && progreso.alfil1 == 100)
		CONSTRUCTOR.setup();
	
      CONSTRUCTOR.renderizador.render( CONSTRUCTOR.escena, CONSTRUCTOR.camara );
}
function setup2()
{
	setupDone=true;
}

CONSTRUCTOR.setup();
CONSTRUCTOR.loop();
