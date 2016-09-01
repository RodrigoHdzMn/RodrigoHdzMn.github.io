
var baseForma= new THREE.CylinderGeometry(.4, .4, 0.3 );
var esferaForma= new THREE.SphereGeometry(.65);
esferaForma.translate(0,1,0);

var baseMalla=new THREE.Mesh(baseForma);
var esferaMalla=new THREE.Mesh(esferaForma);

var torreForma=new THREE.Geometry();

torreForma.merge(baseMalla.geometry, baseMalla.matrix);
torreForma.merge(esferaMalla.geometry, esferaMalla.matrix);

var material=new THREE.MeshNormalMaterial();
var torreMalla= new THREE.Mesh(torreForma,material);

torreMalla.rotateX(Math.PI/8);

var escena=new THREE.Scene();
escena.add(torreMalla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=5;

renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95 );
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
