var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;
camara.position.y = 1;


var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                    	window.innerHeight*.95);
			
document.body.appendChild (renderizador.domElement);

var forma = new THREE.CircleGeometry (1,64);//radio,num de triangulos
var material_1 = new THREE.MeshBasicMaterial({color: 0x0adc6d}); 
var circulo = new THREE.Mesh(forma, material_1);

var forma2 = new THREE.BoxGeometry (1,4);
var material_2 = new THREE.MeshBasicMaterial({color: 0x75461c}); 
var rectangulo = new THREE.Mesh(forma2, material_2);

escena.add(rectangulo);
escena.add(circulo);

renderizador.render(escena,camara);
