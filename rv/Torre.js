
var Tb=0.8*2;//tamaño base
	var altura1=Tb/4;
	var baseForma= new THREE.CylinderGeometry(Tb, Tb, altura1,60 );//dia.sup, dia.inf, altura
	baseForma.translate(0,0,0);
	
	var baseForma2= new THREE.TorusGeometry( 1, 0.4, 10, 100 );
	baseForma2.rotateX(Math.PI/2);

	var altura2=2*altura1;
	var forma2 = new THREE.CylinderGeometry(Tb/2, Tb, altura2,60 );
	forma2.translate(0,1.5,0);
	
	var forma3 = new THREE.TorusGeometry( Tb/4, Tb/8, Tb*3.125, 100 );//(radius, tube, radialSegments)
	forma3.rotateX(Math.PI/2);
	forma3.translate(0,Tb*1.65,0);
	
var points = [];
for ( var i = 4; i < 18; i ++ )
{
	var a= Math.cos( i * 0.2 ) * 5 + 10 ;
	var b=( i - 5 ) * 2;
	points.push( new THREE.Vector2( 0.1*a, 0.1*b ) );//new THREE.Vector2( 0.06*a, 0.1*b )
	
}
var forma4 = new THREE.LatheGeometry( points );

	//var altura4=Tb*1.875;
	forma4.translate(0,Tb*1.5,0);
	

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
	

	//var arriba1 = new THREE.RingGeometry(0.5, 0.8, 64,0,2 );
	//arriba1.translate(0.5,1.2,0);
	

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
	var base2Malla=new THREE.Mesh(baseForma2);
	var forma2Malla=new THREE.Mesh(forma2);
	var forma3Malla=new THREE.Mesh(forma3);
	var forma4Malla=new THREE.Mesh(forma4);
	var forma5Malla=new THREE.Mesh(forma5);
	var forma6Malla=new THREE.Mesh(forma6);
	var forma7Malla=new THREE.Mesh(forma7);
	var forma8Malla=new THREE.Mesh(forma8);
	//var arriba1Malla=new THREE.Mesh(arriba1);
	//arriba1Malla.rotateX(Math.PI/4);
	

	var formaA1Malla=new THREE.Mesh(formaA1);
	var formaA2Malla=new THREE.Mesh(formaA2);
	var formaA3Malla=new THREE.Mesh(formaA3);
	var formaA4Malla=new THREE.Mesh(formaA4);
	var formaA5Malla=new THREE.Mesh(formaA5);
	var formaA6Malla=new THREE.Mesh(formaA6);
	

	

	var torreForma=new THREE.Geometry();
	

	torreForma.merge(baseMalla.geometry, baseMalla.matrix);
	torreForma.merge(base2Malla.geometry, base2Malla.matrix);
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
	

	var material=new THREE.MeshNormalMaterial();
	var torreMalla= new THREE.Mesh(torreForma,material);
	

	torreMalla.rotateX(Math.PI/8);
	

	var iluminacion= new THREE.PointLight(0xFFFFFF);
	iluminacion.position.x=20;
	iluminacion.position.y=50;
	iluminacion.position.z=-10;
	

	//var LuzMagenta= new THREE.PointLight(0xff00ff);
	//LuzMagenta.position.x=-20;
	//LuzMagenta.position.y=50;
	//LuzMagenta.position.z=-10;
	

	var base = new THREE.Mesh(new THREE.BoxGeometry(10,.1,10),new THREE.MeshLambertMaterial({color:0xFFFFFF}));
	base.rotateX(Math.PI/8);
	

	var escena=new THREE.Scene();
	escena.add(torreMalla);
	escena.add(base);
	escena.add(iluminacion);
	//escena.add(LuzMagenta);
	

	var camara=new THREE.PerspectiveCamera();
	camara.position.z=15;
	

	renderizador=new THREE.WebGLRenderer();
	renderizador.setSize(window.innerHeight*.75,window.innerHeight*.75 );
	document.body.appendChild(renderizador.domElement);
	

	renderizador.shadowMap.Enabled=true;
	torreMalla.castShadow=true;
	base.receiveShadow=true;
	iluminacion.castShadow=true;
	//LuzMagenta.castShadow=true;
	

	renderizador.render(escena,camara);
