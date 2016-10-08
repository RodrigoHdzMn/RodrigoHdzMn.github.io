
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

	var forma5 = new THREE.TorusGeometry( 0.6, 0.2, 8, 100 );
	forma5.rotateX(Math.PI/2);
	forma5.translate(0,4.7,0);

	var baseMalla=new THREE.Mesh(baseForma);
	var base2Malla=new THREE.Mesh(baseForma2);
	var forma3Malla=new THREE.Mesh(forma3);
	var forma4Malla=new THREE.Mesh(forma4);
	var forma5Malla=new THREE.Mesh(forma5);
	
	var torreForma=new THREE.Geometry();
	

	torreForma.merge(baseMalla.geometry, baseMalla.matrix);
	torreForma.merge(base2Malla.geometry, base2Malla.matrix);
	torreForma.merge(forma3Malla.geometry, forma3Malla.matrix);
	torreForma.merge(forma4Malla.geometry, forma4Malla.matrix);
	torreForma.merge(forma5Malla.geometry, forma5Malla.matrix);
	
	var material=new THREE.MeshNormalMaterial();
	var torreMalla= new THREE.Mesh(torreForma,material);
	

	torreMalla.rotateX(Math.PI/4);
	

	var iluminacion= new THREE.PointLight(0xFFFFFF);
	iluminacion.position.x=20;
	iluminacion.position.y=50;
	iluminacion.position.z=-10;
	
	var base = new THREE.Mesh(new THREE.BoxGeometry(10,.1,10),new THREE.MeshLambertMaterial({color:0xFFFFFF}));
	base.rotateX(Math.PI/4);
	
	var escena=new THREE.Scene();
	escena.add(torreMalla);
	escena.add(base);
	escena.add(iluminacion);

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
