

var figura =new THREE.Shape();

figura.moveTo(10,10);
figura.lineTo(10,40);
figura.lineTo(40,40);
figura.lineTo(10,10);

var forma= new THREE.ShapeGeometry(figura);
var malla=new THREE.Mesh(forma);

vas escena= new THREE.Scene();
escena.add(malla);

var camara= new THREE.PerpectiveCamera();
camara.position.z=100;

var renderizador=new THREE.WebGLRender();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95,);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);



