
var forma = new THREE.SphereGeometry(1);
var material=new THREE.MeshLambertMaterial({color:0x00cc00});
var malla= new THREE.Mesh(forma,material);

var escena= new THREE.Scene();
escena.add(malla);

var camara= new THREE.PerspectiveCamera();
camara.position.z=5;

var lienzo = document.getElementById("lambertMaterial");
var renderizador=new THREE.WebGLRenderer({canvas:lienzo, antialias: true});

renderizador.setSize(600,600);
renderizador.render(escena,camara);
