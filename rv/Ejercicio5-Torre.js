
var baseForma= new THREE.CylinderGeometry(.8, .8, 0.2,60 );//dia.inf, dia.sup, altura
baseForma.translate(0,-1,0);

var forma2 = new THREE.CylinderGeometry(.6, .6, 0.2,60 );
forma2.translate(0,-0.8,0);

var forma3 = new THREE.CylinderGeometry(.4, .6, 0.2,60 );
forma3.translate(0,-0.6,0);

var forma4 = new THREE.CylinderGeometry(.4, .4, 1.5,60 );
//forma4.translate(0,-0.15,0);

var forma5 = new THREE.CylinderGeometry(.45, .4, 0.05,60 );
forma5.translate(0,0.75,0);

var forma6 = new THREE.CylinderGeometry(.45, .45, 0.05,60 );
forma6.translate(0,0.8,0);

var forma7 = new THREE.CylinderGeometry(.6, .45, 0.1,60 );
forma7.translate(0,0.87,0);

var forma8 = new THREE.CylinderGeometry(.6, .6, 0.25,60 );
forma8.translate(0,1.04,0);

//var arriba1 = new THREE.RingGeometry(0.5, 0.8, 64,0,2 );
//arriba1.translate(0.5,1.2,0);

//Atras
var formaA1 = new THREE.CylinderGeometry(.1, .1, 0.4,60 );
formaA1.translate(0,1.3,-0.5);
//Afrente
var formaA2 = new THREE.CylinderGeometry(.1, .1, 0.4,60 );
formaA2.translate(0,1.3,0.5);
//AtrasI
var formaA3 = new THREE.CylinderGeometry(.1, .1, 0.4,60 );
formaA3.translate(-0.25,1.3,-0.43);
//AtrasD
var formaA4 = new THREE.CylinderGeometry(.1, .1, 0.4,60 );
formaA4.translate(0.25,1.3,-0.43);
//FrenteI
var formaA5 = new THREE.CylinderGeometry(.1, .1, 0.4,60 );
formaA5.translate(-0.43,1.3,0.25);
//FrenteD
var formaA6 = new THREE.CylinderGeometry(.1, .1, 0.4,60 );
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

torreMalla.rotateX(Math.PI/4);

var escena=new THREE.Scene();
escena.add(torreMalla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=5;

renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.75,window.innerHeight*.75 );
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
