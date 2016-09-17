
var escena = new THREE.Scene();

var campoVision=45;// grado
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=1;
var planoLejano=1000;

var camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
camara.position.z = 200;
camara.position.y = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                    	window.innerHeight*.95);
			
document.body.appendChild (renderizador.domElement);

for(var i=1; i<=8; i++)
{
   for(var j=1; j<=8; j++)
   {
	var forma = new THREE.BoxGeometry( 10,.1,10);
	
	if(j%2 ==0)
	{
		if(i%2 == 0)
		var material = new THREE.MeshBasicMaterial( {color: 0xffffff}); 
		else
		var material = new THREE.MeshBasicMaterial( {color: 0x727272}); //0xcfcfcf
	}
	else
	{
		if(i%2 == 0)
		var material = new THREE.MeshBasicMaterial( {color: 0x727272}); //0xcfcfcf
		else
		var material = new THREE.MeshBasicMaterial( {color: 0xffffff}); //0xcfcfcf
	}
	
	var cubo = new THREE.Mesh(forma, material);
	cubo.position.x=10*i;
	cubo.position.z=10*j;
	escena.add(cubo);
   }
}

renderizador.render(escena,camara);
