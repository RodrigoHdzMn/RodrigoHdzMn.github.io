
function init(p)
{
    var malla(new THREE.BoxGeometry(p,p,p) , new THREE.MeshNormalMaterial());
    
    escena=new THREE.Scene();
    escena.add(malla);
    
    camara=new THREE.PerpectiveCamera();
    renderizador=new THREE.WebGLRenderer();
    renderizador.setSize(100,700);
}

var main=function(p)
{
    renderizador.render(escena,camara)
}
