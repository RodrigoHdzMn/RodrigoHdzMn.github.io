var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;
camara.position.y = 20;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                    	window.innerHeight*.95);
			
document.body.appendChild (renderizador.domElement);

var forma = new THREE.CircleGeometry (1,64);//radio,num de triangulos
var material = new THREE.MeshNormalMaterial(); 
var circulo = new THREE.Mesh(forma, material);

//cubo.rotateX(-Math.PI/4); 
//circulo.rotateY(Math.PI/4);
escena.add(circulo);

renderizador.render(escena,camara);
