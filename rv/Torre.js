
var escena=new THREE.Scene();
var points = [];
for ( var i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.cos( i * 0.3 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
var geometry = new THREE.LatheGeometry( points );
var material = new THREE.MeshNormalMaterial(  );
var lathe = new THREE.Mesh( geometry, material );
escena.add( lathe );

var camara=new THREE.PerspectiveCamera();
camara.position.z=50;

renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.75,window.innerHeight*.75 );
document.body.appendChild(renderizador.domElement);

renderizador.render(escena,camara);
