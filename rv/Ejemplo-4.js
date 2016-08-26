var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;


var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                    	window.innerHeight*.95);
			
document.body.appendChild (renderizador.domElement);

var forma = new THREE.CircleGeometry (1,64);//radio,num de triangulos
var material = new THREE.MeshNormalMaterial(); 
var circulo = new THREE.Mesh(forma, material);
escena.add(circulo);

var forma2 = new THREE.BoxGeometry (1,4);
var rectangulo = new THREE.Mesh(forma, material);
escena.add(rectangulo);
//cubo.rotateX(-Math.PI/4); 
//circulo.rotateY(Math.PI/4);



renderizador.render(escena,camara);
