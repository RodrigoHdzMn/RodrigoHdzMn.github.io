function Agent(x=0, y=0)
{
      THREE.Object3D.call(this);
      this.position.x =x;
      this.position.y =y;     
}

Agent.prototype = new THREE.Object3D();

Agent.prototype.sense= function(environment) {}
Agent.prototype.plan= function(environment) {}
Agent.prototype.act= function(environment) {}

function Environment()
{
      THREE.Scene.call(this);
}

Environment.prototype = new THREE.Scene();


function Wall(size,x,y)
{
      THREE.Mesh.call( this, 
                       new THREE.BoxGeometry(size,size,size),  
                       new THREE.MeshNormalMaterial() );
      this.size = size;
      this.position.x = x;
      this.position.y = y;
}

Wall.prototype = new THREE.Mesh();

Environment.prototype.setMap =  function(map)
{
      var _offst = Math.floor(map.length/2);
      
      for( var i=0; i<map.length; i++ )
      for( var j=0; j<map.length; j++ )
      {
            if( map[i][j] === 'x' )
            this.add( new Wall( 1, j - _offset, -(i - _offset) ));
            else if( map[i][j] === 'r' )
            this.add( new Robot( 1, j - _offset, -(i - _offset) ) );
      }
}

function setup()
{
      var mapa = new Array();
      mapa[0] = "XXXXXXXXXXXXXXXXXXXXXXXXX";
      mapa[1] = "X               r       X";
      mapa[2] = "X                       X";
      mapa[3] = "X                       X";
      mapa[4] = "X                       X";
      mapa[5] = "X                       X";
      mapa[6] = "X                       X";
      mapa[7] = "X                       X";
      mapa[8] = "X                       X";
      mapa[9] = "X                       X";
      mapa[10] = "XXXXXXXXXXXX     XXXXXXXX";
      mapa[11] = "X                       X";
      mapa[12] = "X                       X";
      mapa[13] = "X                       X";
      mapa[14] = "X                       X";
      mapa[15] =  X                       X";
      mapa[16] = "X                       X";
      mapa[17] = "X                       X";
      mapa[18] = "X                       X";
      mapa[19] = "XXXXXXXXXXXX     XXXXXXXX";
      mapa[20] = "X                       X";
      mapa[21] = "X                       X";
      mapa[22] = "X                       X";
      mapa[23] = "X                       X";
      mapa[24] = "XXXXXXXXXXXXXXXXXXXXXXXXXX";
      
      environment = new Environment();
      
      environment.setMap(mapa);
      
      camera = new THREE.PerpectiveCamera();
      camera.position.z = 30;
      
      renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth*.95 , window.innerHeight*.95);
      document.body.appendChild( renderer.domElement );
      
      environment.add( camera );
}

function loop()
{
      requestAnimationFrame( loop );
      
      environment.sense();
      environment.plan();
      environment.act();
      renderer.render( environment,camara );
}

var environment, camera, renderer;
setup();
loop();
