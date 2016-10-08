
var Tb=0.8*2;//tamaño base
	var altura1=Tb/4;
	var baseForma= new THREE.CylinderGeometry(Tb, Tb*1.25, altura1,60 );//dia.sup, dia.inf, altura
	baseForma.translate(0,0,0);
	
	var baseForma2= new THREE.TorusGeometry( 1, 0.8, 15, 100 );
	baseForma2.rotateX(Math.PI/2);
	baseForma2.translate(0,0.72,0);

	var forma3 = new THREE.TorusGeometry( 1.4, 0.2, 15, 100 );
	forma3.rotateX(Math.PI/2);
	forma3.translate(0,1.3,0);
	
var points = [];
for ( var i = 4; i < 20; i ++ )
{
	var a= Math.cos( i * 0.2 ) * 5 + 10 ;
	var b=( i - 5 ) * 2;
	points.push( new THREE.Vector2( 0.1*a, 0.1*b ) );//new THREE.Vector2( 0.06*a, 0.1*b )
	
}
var forma4 = new THREE.LatheGeometry( points ,64);
	forma4.translate(0,1.7,0);
	

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
	var forma3Malla=new THREE.Mesh(forma3);
	var forma4Malla=new THREE.Mesh(forma4);

	var formaA1Malla=new THREE.Mesh(formaA1);
	var formaA2Malla=new THREE.Mesh(formaA2);
	var formaA3Malla=new THREE.Mesh(formaA3);
	var formaA4Malla=new THREE.Mesh(formaA4);
	var formaA5Malla=new THREE.Mesh(formaA5);
	var formaA6Malla=new THREE.Mesh(formaA6);
	

	
	var torreForma=new THREE.Geometry();
	

	torreForma.merge(baseMalla.geometry, baseMalla.matrix);
	torreForma.merge(base2Malla.geometry, base2Malla.matrix);
	torreForma.merge(forma3Malla.geometry, forma3Malla.matrix);
	torreForma.merge(forma4Malla.geometry, forma4Malla.matrix);
	
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
	camara.position.z=13;
	

	renderizador=new THREE.WebGLRenderer();
	renderizador.setSize(window.innerHeight*.75,window.innerHeight*.75 );
	document.body.appendChild(renderizador.domElement);
	

	renderizador.shadowMap.Enabled=true;
	torreMalla.castShadow=true;
	base.receiveShadow=true;
	iluminacion.castShadow=true;
	//LuzMagenta.castShadow=true;
	

	renderizador.render(escena,camara);
