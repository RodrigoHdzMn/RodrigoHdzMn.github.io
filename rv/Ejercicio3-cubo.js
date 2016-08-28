
var estrella=new THREE.Geomtetry();
//Coordenadas de los vértices
forma.vertices.push(  new THREE.Vector3(1,1,1) );
forma.vertices.push(  new THREE.Vector3(1,1,-1) );
forma.vertices.push(  new THREE.Vector3(-1,1,-1) );
forma.vertices.push(  new THREE.Vector3(-1,1,1) );
forma.vertices.push(  new THREE.Vector3(-1,-1,1) );
forma.vertices.push(  new THREE.Vector3(1,-1,1) );
forma.vertices.push(  new THREE.Vector3(1,-1,-1) );
forma.vertices.push(  new THREE.Vector3(-1,-1,-1) );

//Contruyendo las caras con los vértices
forma.face.push(  new THREE.Face3() );
forma.face.push(  new THREE.Face3() );
forma.face.push(  new THREE.Face3() );
forma.face.push(  new THREE.Face3() );
