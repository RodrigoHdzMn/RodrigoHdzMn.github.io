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

Environment.prototype.sense = function()
{
      for (var i=0; i<this.children.length; i++)
      {
            if(this.children[i].sense != undefined)
                this.children[i].sense(this);
      }
}

Environment.prototype.plan = function()
{
      for (var i=0; i<this.children.length; i++)
      {
            if(this.children[i].plan != undefined)
                this.children[i].plan(this);
      }
}

Environment.prototype.act = function()
{
      for (var i=0; i<this.children.length; i++)
      {
            if(this.children[i].act != undefined)
                this.children[i].act(this);
      }
}

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
      var _offset = Math.floor(map.length/2);
      
      for( var i=0; i<map.length; i++ )
      for( var j=0; j<map.length; j++ )
      {
            if( map[i][j] === 'x' )
            this.add( new Wall( 1, j - _offset, -(i - _offset) ));
            else if( map[i][j] === 'r' )
            this.add( new Robot( 1, j - _offset, -(i - _offset) ) );
      }
}

function Sensor(position,direction)
{
      THREE.Raycaster.call( this, position, direction );
      this.colision =  false;
}
Sensor.prototype = new THREE.Raycaster();

function Robot(size, x, y)
{
      Agent.call(this, x, y);
      
      this.sensor = new Sensor();
      this.actuator = new THREE.Mesh(
                          new THREE.BoxGeometry(size,size,size),
                          new THREE.MeshBasicMaterial( {color:'#aa0000'} ) );
      this.actuator.commands = [];
      this.add(this.actuator);
}
Robot.prototype = new Agent();

Robot.prototype.sense = function(environment)
{
      this.sensor.set( this.position,
                       new THREE.Vector3( Math.cos(this.rotation.z), Math.sin(this.rotation.z), 0) );
      var obstaculo = this.sensor.intersectObjects(environment.children, true);
      
      if( (obstaculo.length > 0 && (obstaculo[0].distance <= 0.5)) )
         this.sensor.colision = true;
         else
         this.sensor.colision = false;
}

Robot.prototype.plan = function(environment)
{
      this.actuator.commands = [];
      
      if( this.sensor.colision == true )
            this.actuator.commands.push('rotateCCW');
      else
            this.actuator.commands.push('goStraight');
}

Robot.prototype.act(environment)
{
      var command = this.actuador.commands.pop();
      
      if(command === undefined)
            console.log('Undefined command');
      else if ( command in this.operations )
            this.operations[command] (this);
      else
            console.log('Unknow command');
}

Robot.prototype.operations = {};

Robot.prototype.operations.goStraight = function(robot, distance)
{
      if(distance === undefined)
            distance = .05;
      robot.position.x += distance*Math.cos(robot.rotation.z);
      robot.position.y += distance*Math.sin(robot.rotation.z);
}

Robot.prototype.operations.rotateCW = function(robot,angle)
{
      if (angle === undefined)
            angle = -Math.PI/2;
      robot.rotation.z += angle;
}

Robot.prototype.operations.rotateCCW = function(robot,angle)
{
      if (angle === undefined)
            angle = Math.PI/2;
      robot.rotation.z += angle;
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
      mapa[15] = "X                       X";
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
