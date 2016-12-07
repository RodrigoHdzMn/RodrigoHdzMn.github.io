var Tb=0.8*2;//tamaño base
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

	var material=new THREE.MeshNormalMaterial();
	var alfilMalla= new THREE.Mesh(alfilForma,material);
	
	alfilMalla.rotateX(Math.PI/5);

	var iluminacion= new THREE.PointLight(0xFFFFFF);
	iluminacion.position.x=20;
	iluminacion.position.y=50;
	iluminacion.position.z=-10;
	
	var base = new THREE.Mesh(new THREE.BoxGeometry(10,.1,10),new THREE.MeshLambertMaterial({color:0xFFFFFF}));
	base.rotateX(Math.PI/5);
	
	var escena=new THREE.Scene();
	escena.add(alfilMalla);
	escena.add(base);
	escena.add(iluminacion);

	var camara=new THREE.PerspectiveCamera();
	camara.position.z=17;
	
	renderizador=new THREE.WebGLRenderer();
	renderizador.setSize(window.innerHeight*.75,window.innerHeight*.75 );
	document.body.appendChild(renderizador.domElement);
	
	renderizador.shadowMap.Enabled=true;
	alfilMalla.castShadow=true;
	base.receiveShadow=true;
	iluminacion.castShadow=true;
	
	renderizador.render(escena,camara);
