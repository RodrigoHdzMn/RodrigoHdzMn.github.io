var camara,escena,renderizador;
var torre1;

var malla1,malla2,malla3,grupo1,grupo2,grupo3;

//
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
//

init();
loop();

function init(){
  escena = new THREE.Scene();
  camara = new THREE.PerspectiveCamera();
  camara.position.z=190;
  camara.position.x=45;
  camara.position.y=-40;
  escena.rotateX(Math.PI*0.7);

  //Textura
    var textura1 = new THREE.TextureLoader().load('Textura_madera.jpg');
    var textura2 = new THREE.TextureLoader().load('Textura_madera_oscura.jpg');
    var textura3 = new THREE.TextureLoader().load('Textura_marmol_blanco.jpg');
    var textura4 = new THREE.TextureLoader().load('Textura_marmol_negro.jpg');
    var textura5 = new THREE.TextureLoader().load('Textura_madera_cafe.jpg');
    
    var marmolblanco = new THREE.MeshBasicMaterial({map:textura1});
    var marmolnegro = new THREE.MeshBasicMaterial({map:textura2});
    var ceramicablanca = new THREE.MeshBasicMaterial({map:textura3});
    var ceramicanegra = new THREE.MeshBasicMaterial({map:textura4});  
    var madera = new THREE.MeshBasicMaterial({map:textura5});
    
torre1=new THREE.Mesh(torreForma,marmolblanco);
    torre1.position.y=80;
    torre1.position.x=10;
    torre1.rotateX(-Math.PI/2);

//Tablero
 var cubo=new THREE.BoxGeometry(10,10,0.1);
 grupo1=new THREE.Group();
 grupo2=new THREE.Group();
   var k=0;
  for (var i=0;i<8;i++){
    for(var j=0;j<8;j++){
      if(k%2!==0){
        malla1=new THREE.Mesh(cubo,ceramicablanca);
        malla1.position.x=(j+1)*10;//Columnas
        malla1.position.y=(i+1)*10;//Filas
        malla1.matrixAutoUpdate=false;
        malla1.updateMatrix();
        malla1.receiveShadow=true;
        grupo1.add(malla1);
      }
      k++;
    }
  k++;
  }
  
  var k=0;
  for (var i=0;i<8;i++){
    for(var j=0;j<8;j++){
      if(k%2==0){
        malla2=new THREE.Mesh(cubo,ceramicanegra);
        malla2.position.x=(j+1)*10;//Columnas
        malla2.position.y=(i+1)*10;//Filas
        malla2.matrixAutoUpdate=false;
        malla2.updateMatrix();
        malla2.receiveShadow=true;
        grupo2.add(malla2);
      }
      k++;
    }
  k++;
  }

  grupo3=new THREE.Group();
  grupo4=new THREE.Group();
    for(var l=0;l<10;l++){//columnas
    for(var m=0;m<2;m++){//filas
    var malla3= new THREE.Mesh(cubo,madera);
    if(m==1){
     malla3.position.y=90;
    }
    malla3.position.x=(l*10);
    malla3.matrixAutoUpdate = false;
    malla3.updateMatrix();
    malla3.receiveShadow=true;
    grupo3.add(malla3);
    }
  }
  
    for (var n=1;n<9;n++){//Filas
    for (var o=0;o<2;o++){//Columnas
    var malla4=new THREE.Mesh(cubo,madera);
    if (o==1){
      malla4.position.x=90;
    }
    malla4.position.y=(n)*10
    malla4.matrixAutoUpdate = false;
    malla4.updateMatrix();
    malla4.receiveShadow=true;
    grupo4.add(malla4);
    }
  }
  
  escena.add(torre1,grupo1,grupo2,grupo3,grupo4);
  renderizador = new THREE.WebGLRenderer();
	
	var lienzo = document.getElementById("tablero_pieza_mov");
        renderizador = new THREE.WebGLRenderer({canvas:lienzo, antialias:true});
        renderizador.setSize(window.innerHeight*.85,window.innerHeight*.85);
  }
  
function loop() {
    window.onload=function(){document.onkeydown=desplazar};
    function desplazar(pieza)
    {
      var tecla = pieza.which;
          switch (tecla)
          {
              case 37 : //Izquierda
			  if(torre1.position.x===10)
				  torre1.translateX(0);//No hacer Nada
			  else		  
                  	          torre1.translateX(-10);
                  break;
              case 38 :  //Arriba
			   if(torre1.position.y===10)
				  torre1.translateZ(0);//No hacer Nada
			  else
                                  torre1.translateZ(-10);
                  break;
              case 39 :  //Derecha 
			   if(torre1.position.x===80)
				  torre1.translateX(0);//No hacer Nada
			  else
                                  torre1.translateX(10);
                  break;
              case 40 :  //Abajo
			   if(torre1.position.y===80)
				  torre1.translateZ(0);//No hacer Nada
			  else
                                  torre1.translateZ(10);
                  break;
          default :alert("Pulsar las flechas del teclado");
          }
    }
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
} 
