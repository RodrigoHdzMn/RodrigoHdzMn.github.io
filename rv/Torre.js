
var Tb=0.8;//tamaño base
var altura1=Tb/4;
var baseForma= new THREE.CylinderGeometry(Tb, Tb, altura1,60 );//dia.inf, dia.sup, altura
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
forma6.translate(0,1.8,0);

var altura7=Tb/8;
var forma7 = new THREE.CylinderGeometry(Tb*3/4, Tb*9/16, altura7,60 );
forma7.translate(0,1.85,0);

var altura8=Tb*5/16;
var forma8 = new THREE.CylinderGeometry(Tb*3/4, Tb*3/4, altura8,60 );
forma8.translate(0,2.1,0);

//var arriba1 = new THREE.RingGeometry(0.5, 0.8, 64,0,2 );
//arriba1.translate(0.5,1.2,0);

var dm=Tb/8;//diametro miniCilindros
var am=Tb/2;//altura mini
//Atras
var formaA1 = new THREE.CylinderGeometry(dm, dm, am,60 );
formaA1.translate(0,1.3,-0.5);
//Afrente
var formaA2 = new THREE.CylinderGeometry(dm, dm, am,60 );
formaA2.translate(0,1.3,0.5);
//AtrasI
var formaA3 = new THREE.CylinderGeometry(dm, dm, am,60 );
formaA3.translate(-0.43,1.3,-0.25);
//AtrasD
var formaA4 = new THREE.CylinderGeometry(dm, dm, am,60 );
formaA4.translate(0.43,1.3,-0.25);
//FrenteI
var formaA5 = new THREE.CylinderGeometry(dm, dm, am,60 );
formaA5.translate(-0.43,1.3,0.25);
//FrenteD
var formaA6 = new THREE.CylinderGeometry(dm, dm, am,60 );
formaA6.translate(0.43,1.3,0.25);

var baseMalla=new THREE.Mesh(baseForma);
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

var escena=new THREE.Scene();
escena.add(torreMalla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=5;

renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.75,window.innerHeight*.75 );
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
