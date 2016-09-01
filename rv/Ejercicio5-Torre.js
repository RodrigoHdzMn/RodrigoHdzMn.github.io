var points = [];
for ( var i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
var geometry = new THREE.LatheGeometry( points );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var lathe = new THREE.Mesh( geometry, material );
scene.add( lathe );
