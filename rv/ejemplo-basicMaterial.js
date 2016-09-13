
var forma = new THREE.SphereGeometry(1);
var material=new THREE.MeshBasicMaterial({color:0x00ff00});
var malla= new THREE.Mesh(forma,material);

var escena= new THREE.Scene();
escena.add(malla);

var camara= new THREE.PerpectiveCamera();
camara.position.z=5;

var lienzo = document.getElementById("basicMaterial");
var renderizador=new THREE.WebGLRender({canvas:lienzo, antialias: true});

renderizador.setSize(600,600);
renderizador.render(escena,camara);
