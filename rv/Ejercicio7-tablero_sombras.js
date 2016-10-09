
var formaa = new THREE.SphereGeometry(1);
var materiall=new THREE.MeshLambertMaterial({color:0x00cc00});
var mallaa= new THREE.Mesh(formaa,materiall);
mallaa.position.y=2;
	
	var iluminacion= new THREE.PointLight(0xFFFFFF);
	iluminacion.position.x=10;
	iluminacion.position.y=20
	iluminacion.position.z=0;
	
	var base = new THREE.Mesh(new THREE.BoxGeometry(10,.1,10),new THREE.MeshLambertMaterial({color:0xFF00FF}));
	//base.rotateX(Math.PI/8);//
	
	var escena=new THREE.Scene();
	escena.add(base);
	escena.add(iluminacion);
	//escena.add(LuzMagenta);
        escena.add(mallaa);
	
	var camara=new THREE.PerspectiveCamera();
	camara.position.z=15;
	camara.position.y=5;

	renderizador=new THREE.WebGLRenderer();
	renderizador.setSize(window.innerHeight*.75,window.innerHeight*.75 );
	document.body.appendChild(renderizador.domElement);
	
	renderizador.shadowMapEnabled=true;
	torreMalla.castShadow=true;	
	base.receiveShadow=true;
	iluminacion.castShadow=true;
	mallaa.castShadow=true;
	//LuzMagenta.castShadow=true;
	
	renderizador.render(escena,camara);
