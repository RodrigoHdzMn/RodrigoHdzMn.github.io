
var baseForma= new THREE.CylinderGeometry(.02, .9, 1 );
var esferaForma= new THREE.SphereGeometry(.65);
esferaForma.translate(0,1,0);

var baseMalla=new THREE.Mesh(baseForma);
var esferaMalla=new THREE.Mesh(esferaForma);

var arbolForma=new THREE.Geometry();

arbolForma.merge(baseMalla.geometry, baseMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);

var material=new THREE.MeshNormalMaterial();
var arbolMalla= new THREE.Mesh(arbolForma,material);

var escena=new THREE.Scene();
escena.add(arbolMalla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=5;

renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95 );
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
