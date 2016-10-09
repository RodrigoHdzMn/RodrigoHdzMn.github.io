var campoVision=30;// grado
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=1;
var planoLejano=1000;

var camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
camara.position.z = 200;
camara.position.y = 25;
camara.position.x = 50;


	var formaa = new THREE.SphereGeometry(4);
	var materiall=new THREE.MeshLambertMaterial({color:0x00CC00});
	var mallaa= new THREE.Mesh(formaa,materiall);
	mallaa.position.y=5;
	mallaa.position.x=45;
	mallaa.position.z=45

	
	var iluminacion= new THREE.PointLight(0xFFFFFF);
	iluminacion.position.x=10;
	iluminacion.position.y=20
	iluminacion.position.z=0;
	
	var base = new THREE.Mesh(new THREE.BoxGeometry(80,.1,80),new THREE.MeshLambertMaterial({color:0xFFFFFF}));
	base.position.y=0.4;
	base.position.x=45;
	base.position.z=45;

	var escena=new THREE.Scene();
	escena.add(base);
	escena.add(iluminacion);
        escena.add(mallaa);
	
	renderizador=new THREE.WebGLRenderer();
	renderizador.setSize( window.innerHeight*.85,window.innerHeight*.85);		
	document.body.appendChild (renderizador.domElement);
	
	renderizador.shadowMapEnabled=true;
	base.receiveShadow=true;
	iluminacion.castShadow=true;
	mallaa.castShadow=true;
	//LuzMagenta.castShadow=true;
	
	renderizador.render(escena,camara);
