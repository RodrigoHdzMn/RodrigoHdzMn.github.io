
var baseForma= new THREE.CylinderGeometry(.6, .6, 0.3,60 );
baseForma.translate(0,-1,0);

var forma2 = new THREE.CylinderGeometry(.4, .4, 0.3,60 );
forma2.translate(0,-0.7,0);

var forma3 = new THREE.CylinderGeometry(.2, .4, 0.2,60 );
forma3.translate(0,-0.4,0);

var baseMalla=new THREE.Mesh(baseForma);
var forma2Malla=new THREE.Mesh(forma2);
var forma3Malla=new THREE.Mesh(forma3);

var torreForma=new THREE.Geometry();

torreForma.merge(baseMalla.geometry, baseMalla.matrix);
torreForma.merge(forma2Malla.geometry, forma2Malla.matrix);
torreForma.merge(forma3Malla.geometry, forma3Malla.matrix);

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
