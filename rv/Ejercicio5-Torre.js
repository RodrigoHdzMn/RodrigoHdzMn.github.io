
var baseForma= new THREE.CylinderGeometry(.8, .8, 0.2,60 );
baseForma.translate(0,-1,0);

var forma2 = new THREE.CylinderGeometry(.6, .6, 0.2,60 );
forma2.translate(0,-0.8,0);

var forma3 = new THREE.CylinderGeometry(.4, .6, 0.2,60 );
forma3.translate(0,-0.6,0);

var forma4 = new THREE.CylinderGeometry(.4, .4, 1.5,60 );
//forma4.translate(0,-0.15,0);

var forma5 = new THREE.CylinderGeometry(.42, .4, 1.5,60 );

var baseMalla=new THREE.Mesh(baseForma);
var forma2Malla=new THREE.Mesh(forma2);
var forma3Malla=new THREE.Mesh(forma3);
var forma4Malla=new THREE.Mesh(forma4);
var forma5Malla=new THREE.Mesh(forma5);

var torreForma=new THREE.Geometry();

torreForma.merge(baseMalla.geometry, baseMalla.matrix);
torreForma.merge(forma2Malla.geometry, forma2Malla.matrix);
torreForma.merge(forma3Malla.geometry, forma3Malla.matrix);
torreForma.merge(forma4Malla.geometry, forma4Malla.matrix);
torreForma.merge(forma5Malla.geometry, forma5Malla.matrix);

var material=new THREE.MeshNormalMaterial();
var torreMalla= new THREE.Mesh(torreForma,material);

//torreMalla.rotateX(Math.PI/8);

var escena=new THREE.Scene();
escena.add(torreMalla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=5;

renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.75,window.innerHeight*.75 );
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
