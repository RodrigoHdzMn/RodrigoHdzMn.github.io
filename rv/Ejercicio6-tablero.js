
var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 200;
//camara.position.y = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                    	window.innerHeight*.95);
			
document.body.appendChild (renderizador.domElement);

var forma = new THREE.BoxGeometry( 10,1,10);
var material = new THREE.MeshBasicMaterial(0xffffff); 
var cubo = new THREE.Mesh(forma, material);



var forma2 = new THREE.BoxGeometry( 10,10,2);
var material2 = new THREE.MeshBasicMaterial(0xcfcfcf); 
var cubo2 = new THREE.Mesh(forma2, material2);
cubo2.position.y=10;
cubo2.position.x=10;
//cubo.rotateX(-Math.PI/8);


escena.add(cubo);
escena.add(cubo2);

renderizador.render(escena,camara);
