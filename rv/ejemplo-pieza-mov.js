
function Pieza()
{
    THREE.Object3D.call(this);
    
    this.piernaIzq = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
    this.piernaDer = new THEEE.Mesh(new THREE.BoxGeometry(1,5,1));
    var cuerpo = new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
    this.add(piernaDer, piernaIzq, cuerpo);
    
    this.piernaIzq.position.z = -2;
    this.piernaIzq.position.y = -2.5;
    this.piernaDer.position.z = 2;
    this.piernaDer.position.y = -2.5;
    cuerpo.position.z=2.5;
}

var pieza;
var escena;
var renderizador;

Pieza.prototype = new THREE.Object3D;

function setup()
{
      pieza = new Pieza();
      
      escena = new THREE.Scene();
    
      var camara= new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
      
      camara.position.z=5;
      
      var lienzo=document.getElementById("ejemplo-pieza-mov");
      renderizador=new THREE.WebGLRenderer({canvas:lienzo, antialias: true});
      renderizador.setSize(600,600);
}

function loop()
{
    pieza.rotateY = 0.1;
    renderizador.render(TEXTURA.escena,TEXTURA.camara)
}
