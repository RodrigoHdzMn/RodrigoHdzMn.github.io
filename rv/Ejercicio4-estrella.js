

var figura =new THREE.Shape();

figura.moveTo(20,10);
figura.lineTo(20,10);
figura.lineTo(50,70);
figura.lineTo(80,50);
figura.lineTo(60,35);
figura.lineTo(10,70);


var estrella= new THREE.ShapeGeometry(figura);
var malla=new THREE.Mesh(estrella);

var escena= new THREE.Scene();
escena.add(malla);

var camara= new THREE.PerspectiveCamera();
camara.position.z=250;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.75,window.innerHeight*.75);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
