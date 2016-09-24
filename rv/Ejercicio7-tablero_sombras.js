
var escena = new THREE.Scene();

var LuzMagenta= new THREE.PointLight(0xff00ff);
LuzMagenta.position.y=40;
LuzMagenta.position.z=40;

var LuzCyan= new THREE.PointLight(0x00ffff);
LuzCyan.position.x=80;
LuzCyan.position.y=40;
LuzCyan.position.z=40;

var LuzYellow= new THREE.PointLight(0xffff00);
LuzYellow.position.x=40;
LuzYellow.position.y=40;

var campoVision=30;// grado
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=1;
var planoLejano=1000;

var camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
camara.position.z = 200;
camara.position.y = 20;
camara.position.x = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.85,
                    	window.innerHeight*.85);
			
document.body.appendChild (renderizador.domElement);

//var Tablero = new THREE.Geometry();

for(var i=1; i<=8; i++)
{
   for(var j=1; j<=8; j++)
   {
	var forma = new THREE.BoxGeometry( 10,.1,10);
	
	if(j%2 ==0)
	{
		if(i%2 == 0)
		var material = new THREE.MeshLambertMaterial( {color: 0xffffff}); 
		else
		var material = new THREE.MeshLambertMaterial( {color: 0x727272}); //0xcfcfcf
	}
	else
	{
		if(i%2 == 0)
		var material = new THREE.MeshLambertMaterial( {color: 0x727272}); //0xcfcfcf
		else
		var material = new THREE.MeshLambertMaterial( {color: 0xffffff}); //0xcfcfcf
	}
	
	var cubo = new THREE.Mesh(forma, material);
	cubo.position.x=10*i;
	cubo.position.z=10*j;
	escena.add(cubo);
	//var Tablero = new THREE.Geometry();
	//Tablero.merge(cubo.geometry, cubo.matrix);

   }
}

//var TableroMalla= new THREE.Mesh(Tablero);

//Inicio Torre
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

//var opaco25=new THREE.Material( {opacity:0.25} );
var materialNum1=new THREE.MeshLambertMaterial( {color: 0xffe100} );
var materialNum2=new THREE.MeshLambertMaterial( {color: 0x000ef5},{opacity:0.25});

//var materialOp25=new THREE.MultiMaterial(opaco25,materialNum2);

var torreMalla1= new THREE.Mesh(torreForma,materialNum1);
torreMalla1.position.x=10;
torreMalla1.position.z=10;
var torreMalla2= new THREE.Mesh(torreForma,materialNum1);
torreMalla2.position.x=80;
torreMalla2.position.z=10;
var torreMalla3= new THREE.Mesh(torreForma,materialNum2);
torreMalla3.position.x=10;
torreMalla3.position.z=80;
var torreMalla4= new THREE.Mesh(torreForma,materialNum2);
torreMalla4.position.x=80;
torreMalla4.position.z=80;

escena.add(torreMalla1);
escena.add(torreMalla2);
escena.add(torreMalla3);
escena.add(torreMalla4);
//Fin Torre

//escena.add(TableroMalla);
escena.add(LuzMagenta)
escena.add(LuzCyan)
escena.add(LuzYellow)
renderizador.shadowMap.Enabled=true;
torreMalla1.castShadow=true;
torreMalla2.castShadow=true;
torreMalla3.castShadow=true;
torreMalla4.castShadow=true;
//Tablero.receiveShadow=true;
LuzYellow.castShadow=true;

renderizador.render(escena,camara);
