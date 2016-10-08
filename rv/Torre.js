
var escena=new THREE.Scene();
var points = [];
for ( var i = 3; i < 18; i ++ )
{
	var a= Math.cos( i * 0.2 ) * 5 + 10 ;
	var b=( i - 5 ) * 2;
	points.push( new THREE.Vector2( 0.75*a, 0.75*b ) );//new THREE.Vector2( 0.06*a, 0.1*b )
	//puntos.push( new THREE.Vector2(Math.sin(i*0.2)*15+50, (i-5)*2) );
}
var geometry = new THREE.LatheGeometry( points );
var material = new THREE.MeshNormalMaterial(  );
var lathe = new THREE.Mesh( geometry, material );
lathe.rotateX(Math.PI/6);
escena.add( lathe );

var camara=new THREE.PerspectiveCamera();
camara.position.z=50;

renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.75,window.innerHeight*.75 );
document.body.appendChild(renderizador.domElement);

renderizador.render(escena,camara);
