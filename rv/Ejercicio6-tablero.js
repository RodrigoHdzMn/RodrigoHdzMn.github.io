
var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 200;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                    	window.innerHeight*.95);
			
document.body.appendChild (renderizador.domElement);

var forma = new THREE.BoxGeometry( 10,10,2);
var material = new THREE.MeshBasicMaterial(0xffffff); 
var cubo = new THREE.Mesh(forma, material);

cubo.rotateX(-Math.PI/8);


escena.add(cubo);

renderizador.render(escena,camara);
