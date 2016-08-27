var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 10;
//camara.position.y = 1;


var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.75,
                    	window.innerHeight*.75);
			
document.body.appendChild (renderizador.domElement);

var forma2 = new THREE.BoxGeometry (1,4);
var material_2 = new THREE.MeshBasicMaterial({color: 0x75461c}); 
var rectangulo = new THREE.Mesh(forma2, material_2);
forma2.translate(0,-0.5,0);
escena.add(rectangulo);


var forma = new THREE.SphereGeometry( 1.5, 32, 32 );
var material_1 = new THREE.MeshBasicMaterial({color: 0x0adc6d}); 
var circulo = new THREE.Mesh(forma, material_1);
forma.translate(0,1.5,0);
escena.add(circulo);

renderizador.render(escena,camara);
