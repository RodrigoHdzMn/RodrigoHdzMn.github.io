

var figura =new THREE.Shape();

figura.moveTo(10,10);
figura.lineTo(20,10);
figura.lineTo(60,35);
figura.lineTo(100,10);
figura.lineTo(80,50);
figura.lineTo(110,70);

var estrella= new THREE.ShapeGeometry(figura);
var malla=new THREE.Mesh(estrella);

var escena= new THREE.Scene();
escena.add(malla);

var camara= new THREE.PerspectiveCamera();
camara.position.z=200;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
