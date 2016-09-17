
var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 200;
//camara.position.y = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                    	window.innerHeight*.95);
			
document.body.appendChild (renderizador.domElement);

for(var i=1; i<=8; i++)
{
	var forma = new THREE.BoxGeometry( 10,10,1);
	var material = new THREE.MeshBasicMaterial( {color: 0xffffff}); 
	var cubo = new THREE.Mesh(forma, material);
	cubo.position.x=10*i;
	escena.add(cubo);
}


renderizador.render(escena,camara);
