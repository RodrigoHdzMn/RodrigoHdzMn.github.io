var points = [];
for ( var i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.02 ) * 1 + 0.5, ( i - 0.5 ) * 0.02 ) );
}
var geometry = new THREE.LatheGeometry( points,60 );
var material = new THREE.MeshNormalMaterial(  );
var lathe = new THREE.Mesh( geometry, material );

var escena=new THREE.Scene();
escena.add(lathe);

var camara=new THREE.PerspectiveCamera();
camara.position.z=5;

renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95 );
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
