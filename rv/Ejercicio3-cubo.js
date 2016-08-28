
var forma=new THREE.Geometry();
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
//forma.faces.push(  new THREE.Face3(0,1,2) );
//forma.faces.push(  new THREE.Face3(0,2,3) );
//forma.faces.push(  new THREE.Face3(0,3,4) );
//forma.faces.push(  new THREE.Face3(0,4,5) );
//forma.faces.push(  new THREE.Face3(0,5,6) );
//forma.faces.push(  new THREE.Face3(0,6,1) );
forma.faces.push(  new THREE.Face3(1,7,2) );
//forma.faces.push(  new THREE.Face3(1,7,6) );
//forma.faces.push(  new THREE.Face3(7,4,2) );
//forma.faces.push(  new THREE.Face3(7,5,6) );
//forma.faces.push(  new THREE.Face3(2,3,4) );
//forma.faces.push(  new THREE.Face3(4,2,7) );

//Se solicita el computo de la esfera de menor tamaño que acota al objeto
forma.computeBoundingSphere();
//Tipo de material al usar, se computan las normales de las caras 
forma.computeFaceNormals();

var material= new THREE.MeshNormalMaterial();

var malla=new THREE.Mesh(forma,material);
malla.rotateX(Math.PI/4);
malla.rotateY(Math.PI/4);

var escena = new THREE.Scene();
escena.add(malla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=5;


var renderizador= new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.75, window.innerHeight*.75);
document.body.appendChild( renderizador.domElement);
renderizador.render(escena,camara);