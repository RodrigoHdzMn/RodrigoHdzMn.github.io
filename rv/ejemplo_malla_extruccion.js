
//MALLAS POR EXTRUCCION

var figura=new THREE.Shape();

figura.moveTo(10,10);
figura.lineTo(10,40);
figura.lineTo(40,40);
figura.lineTo(10,10);

var forma= new THREE.ExtrudeGeometry(figura,{amount:10});
//amoun->literal de objeto 

var material=new THREE.MeshNormalMaterial();
var malla=new THREE.Mesh(forma,material);
malla.rotateX(Math.PI/4);



