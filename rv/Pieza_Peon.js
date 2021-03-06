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
	
  	var peonMalla= new THREE.Mesh(peonForma,material);
	peonMalla.rotateX(Math.PI/8);

	var iluminacion= new THREE.PointLight(0xFFFFFF);
	iluminacion.position.x=20;
	iluminacion.position.y=50;
	iluminacion.position.z=-10;
	
	var base = new THREE.Mesh(new THREE.BoxGeometry(10,.1,10),new THREE.MeshLambertMaterial({color:0xFFFFFF}));
	base.rotateX(Math.PI/8);	

	var escena=new THREE.Scene();
	escena.add(peonMalla);
	escena.add(base);
	escena.add(iluminacion);
	
	var camara=new THREE.PerspectiveCamera();
	camara.position.z=15;	

	renderizador=new THREE.WebGLRenderer();
	renderizador.setSize(window.innerHeight*.75,window.innerHeight*.75 );
	document.body.appendChild(renderizador.domElement);

	renderizador.shadowMap.Enabled=true;
	peonMalla.castShadow=true;
	base.receiveShadow=true;
	iluminacion.castShadow=true;
	
	renderizador.render(escena,camara);
