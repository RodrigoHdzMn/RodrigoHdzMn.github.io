//Aquí se generan las Geometrías para todas las fichas del tablero de Ajedrez

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////   REY   /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var base = new THREE.CylinderGeometry(5,5,3,50);
  var material = new THREE.MeshNormalMaterial();

  var columna1 = new THREE.CylinderGeometry(3.5,4,2,50);
  columna1.translate(0,2.5,0);

  var toroide1 = new THREE.TorusGeometry(3.5,.5,50,50);
  toroide1.rotateX(Math.PI/2);
  toroide1.translate(0,3.5,0);

  var columna2 = new THREE.CylinderGeometry(2,3.5,14,50);
  columna2.translate(0,10.5,0);

  var btecho = new THREE.CylinderGeometry(2,3.2,2,50);
  btecho.translate(0,16.5,0);

  var toroide2 = new THREE.TorusGeometry(2,.35,50,50);
  toroide2.rotateX(Math.PI/2);
  toroide2.translate(0,17.6,0);

  var toroide3 = new THREE.TorusGeometry(1.75,.35,50,50);
  toroide3.rotateX(Math.PI/2);
  toroide3.translate(0,17.8,0);

  var corona1 = new THREE.CylinderGeometry(2,1.5,3,50);
  corona1.translate(0,19,0);

  var corona2 = new THREE.CylinderGeometry(1,2,.5,50);
  corona2.translate(0,20.75,0);

  //Cruz
  var forma=new THREE.Shape();

  forma.moveTo(-1,1);
  forma.lineTo(-10,3);
  forma.lineTo(-10,-3);
  forma.lineTo(-1,-1);
  forma.lineTo(-3,-10);
  forma.lineTo(3,-10);
  forma.lineTo(1,-1);
  forma.lineTo(10,-3);
  forma.lineTo(10,3);
  forma.lineTo(1,1);
  forma.lineTo(3,10);
  forma.lineTo(-3,10);
  forma.lineTo(-1,1);

  var cruz= new THREE.ExtrudeGeometry(forma,{amount:2});
  cruz.scale(.12,.12,.12);
  cruz.translate(0,22.2,0);

  //Mallas
  var mbase = new THREE.Mesh(base);
  var mcolumna1 = new THREE.Mesh(columna1);
  var mtoroide1 = new THREE.Mesh(toroide1);
  var mcolumna2 = new THREE.Mesh(columna2);
  var mbtecho = new THREE.Mesh(btecho);
  var mtoroide2 = new THREE.Mesh(toroide2);
  var mtoroide3 = new THREE.Mesh(toroide3);
  var mcorona1 = new THREE.Mesh(corona1);
  var mcorona2 = new THREE.Mesh(corona2);
  var mcruz = new THREE.Mesh(cruz)

  //Cuerpo completo

  var reyfinal = new THREE.Geometry();
  reyfinal.merge(mbase.geometry,mbase.matrix);
  reyfinal.merge(mcolumna1.geometry,mcolumna1.matrix);

  var mreyfinal = new THREE.Mesh(reyfinal);

  var reyfinal2 = new THREE.Geometry();
  reyfinal2.merge(mreyfinal.geometry,mreyfinal.matrix);
  reyfinal2.merge(mcolumna1.geometry,mcolumna1.matrix);

  var mreyfinal2 = new THREE.Mesh(reyfinal2);

  var reyfinal3 = new THREE.Geometry();
  reyfinal3.merge(mreyfinal2.geometry,mreyfinal2.matrix);
  reyfinal3.merge(mtoroide1.geometry,mtoroide1.matrix);

  var mreyfinal3 = new THREE.Mesh(reyfinal3);

  var reyfinal4 = new THREE.Geometry();
  reyfinal4.merge(mreyfinal3.geometry,mreyfinal3.matrix);
  reyfinal4.merge(mcolumna2.geometry,mcolumna2.matrix);

  var mreyfinal4 = new THREE.Mesh(reyfinal4);

  var reyfinal5 = new THREE.Geometry();
  reyfinal5.merge(mreyfinal4.geometry,mreyfinal4.matrix);
  reyfinal5.merge(mbtecho.geometry,mbtecho.matrix);

  var mreyfinal5 = new THREE.Mesh(reyfinal5);

  var reyfinal6 = new THREE.Geometry();
  reyfinal6.merge(mreyfinal5.geometry,mreyfinal5.matrix);
  reyfinal6.merge(mtoroide2.geometry,mtoroide2.matrix);

  var mreyfinal6 = new THREE.Mesh(reyfinal6);

  var reyfinal7 = new THREE.Geometry();
  reyfinal7.merge(mreyfinal6.geometry,mreyfinal6.matrix);
  reyfinal7.merge(mtoroide3.geometry,mtoroide3.matrix);

  var mreyfinal7 = new THREE.Mesh(reyfinal7);

  var reyfinal8 = new THREE.Geometry();
  reyfinal8.merge(mreyfinal7.geometry,mreyfinal7.matrix);
  reyfinal8.merge(mcorona1.geometry,mcorona1.matrix);

  var mreyfinal8 = new THREE.Mesh(reyfinal8);

  var reyfinal9 = new THREE.Geometry();
  reyfinal9.merge(mreyfinal8.geometry,mreyfinal8.matrix);
  reyfinal9.merge(mcorona2.geometry,mcorona2.matrix);

  var mreyfinal9 = new THREE.Mesh(reyfinal9);

  var king= new THREE.Geometry();
  king.merge(mreyfinal9.geometry,mreyfinal9.matrix);
  king.merge(mcruz.geometry,mcruz.matrix);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////   REINA   ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var base = new THREE.CylinderGeometry(5,5,3,50);
  var material = new THREE.MeshNormalMaterial();

  var columna1 = new THREE.CylinderGeometry(3.5,4,2,50);
  columna1.translate(0,2.5,0);

  var toroide1 = new THREE.TorusGeometry(3.5,.5,50,50);
  toroide1.rotateX(Math.PI/2);
  toroide1.translate(0,3.5,0);

  var columna2 = new THREE.CylinderGeometry(1.75,3.5,14,50);
  columna2.translate(0,10.5,0);

  var btecho = new THREE.CylinderGeometry(2,3,2,50);
  btecho.translate(0,16.5,0);

  var toroide2 = new THREE.TorusGeometry(2,.35,50,50);
  toroide2.rotateX(Math.PI/2);
  toroide2.translate(0,17.6,0);

  var toroide3 = new THREE.TorusGeometry(1.75,.35,50,50);
  toroide3.rotateX(Math.PI/2);
  toroide3.translate(0,17.8,0);

  var corona1 = new THREE.CylinderGeometry(2,1.5,3,50);
  corona1.translate(0,19,0);

  var corona2 = new THREE.SphereGeometry(1.8,50,50);
  corona2.translate(0,19.5,0);

  var bola = new THREE.SphereGeometry(.5,50,50);
  bola.translate(0,21.5,0);
  //Mallas
  var mbase = new THREE.Mesh(base);
  var mcolumna1 = new THREE.Mesh(columna1);
  var mtoroide1 = new THREE.Mesh(toroide1);
  var mcolumna2 = new THREE.Mesh(columna2);
  var mbtecho = new THREE.Mesh(btecho);
  var mtoroide2 = new THREE.Mesh(toroide2);
  var mtoroide3 = new THREE.Mesh(toroide3);
  var mcorona1 = new THREE.Mesh(corona1);
  var mcorona2 = new THREE.Mesh(corona2);
  var mbola = new THREE.Mesh(bola);

//Cuerpo completo

  var reinafinal = new THREE.Geometry();
  reinafinal.merge(mbase.geometry,mbase.matrix);
  reinafinal.merge(mcolumna1.geometry,mcolumna1.matrix);

  var mreinafinal = new THREE.Mesh(reinafinal);

  var reinafinal2 = new THREE.Geometry();
  reinafinal2.merge(mreinafinal.geometry,mreinafinal.matrix);
  reinafinal2.merge(mcolumna1.geometry,mcolumna1.matrix);

  var mreinafinal2 = new THREE.Mesh(reinafinal2);

  var reinafinal3 = new THREE.Geometry();
  reinafinal3.merge(mreinafinal2.geometry,mreinafinal2.matrix);
  reinafinal3.merge(mtoroide1.geometry,mtoroide1.matrix);

  var mreinafinal3 = new THREE.Mesh(reinafinal3);

  var reinafinal4 = new THREE.Geometry();
  reinafinal4.merge(mreinafinal3.geometry,mreinafinal3.matrix);
  reinafinal4.merge(mcolumna2.geometry,mcolumna2.matrix);

  var mreinafinal4 = new THREE.Mesh(reinafinal4);

  var reinafinal5 = new THREE.Geometry();
  reinafinal5.merge(mreinafinal4.geometry,mreinafinal4.matrix);
  reinafinal5.merge(mbtecho.geometry,mbtecho.matrix);

  var mreinafinal5 = new THREE.Mesh(reinafinal5);

  var reinafinal6 = new THREE.Geometry();
  reinafinal6.merge(mreinafinal5.geometry,mreinafinal5.matrix);
  reinafinal6.merge(mtoroide2.geometry,mtoroide2.matrix);

  var mreinafinal6 = new THREE.Mesh(reinafinal6);

  var reinafinal7 = new THREE.Geometry();
  reinafinal7.merge(mreinafinal6.geometry,mreinafinal6.matrix);
  reinafinal7.merge(mtoroide3.geometry,mtoroide3.matrix);

  var mreinafinal7 = new THREE.Mesh(reinafinal7);

  var reinafinal8 = new THREE.Geometry();
  reinafinal8.merge(mreinafinal7.geometry,mreinafinal7.matrix);
  reinafinal8.merge(mcorona1.geometry,mcorona1.matrix);

  var mreinafinal8 = new THREE.Mesh(reinafinal8);

  var reinafinal9 = new THREE.Geometry();
  reinafinal9.merge(mreinafinal8.geometry,mreinafinal8.matrix);
  reinafinal9.merge(mcorona2.geometry,mcorona2.matrix);

  var mreinafinal9 = new THREE.Mesh(reinafinal9);

  var queen = new THREE.Geometry();
  queen.merge(mreinafinal9.geometry,mreinafinal9.matrix);
  queen.merge(mbola.geometry,mbola.matrix);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////   CABALLO   ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  var base = new THREE.CylinderGeometry(5,5,3,50);
  var material = new THREE.MeshNormalMaterial();

  var columna1 = new THREE.CylinderGeometry(3.5,4,2,50);
  columna1.translate(0,2.5,0);

  var toroide1 = new THREE.TorusGeometry(3.5,.5,50,50);
  toroide1.rotateX(Math.PI/2);
  toroide1.translate(0,3.5,0);

  var forma=new THREE.Shape();

  forma.moveTo(-10,0);
  forma.lineTo(-4,6);
  forma.lineTo(-4,9);
  forma.lineTo(-1,6);
  forma.lineTo(1,7);
  forma.lineTo(5,7);
  forma.lineTo(8,3);
  forma.lineTo(10,-1);
  forma.lineTo(10,-4);
  forma.lineTo(4,-9);
  forma.lineTo(-5,-9);
  forma.lineTo(-6,-6);
  forma.lineTo(-2,-2);
  forma.lineTo(0,2);
  forma.lineTo(-2,1);
  forma.lineTo(-4,0);
  forma.lineTo(-5,-2);
  forma.lineTo(-6,-3);
  forma.lineTo(-7,-3);
  forma.lineTo(-10,0);

  var caballo= new THREE.ExtrudeGeometry(forma,{amount:1.5},{bevelSegments:4});
  caballo.scale(.4,.4,.4);
  caballo.translate(0,9,0);

  //Mallas
  var mbase = new THREE.Mesh(base);
  var mcolumna1 = new THREE.Mesh(columna1);
  var mtoroide1 = new THREE.Mesh(toroide1);
  var mcaballo = new THREE.Mesh(caballo);

  //Cuerpo completo

  var caballofinal = new THREE.Geometry();
  caballofinal.merge(mbase.geometry,mbase.matrix);
  caballofinal.merge(mcolumna1.geometry,mcolumna1.matrix);

  var mcaballofinal = new THREE.Mesh(caballofinal);

  var caballofinal2 = new THREE.Geometry();
  caballofinal2.merge(mcaballofinal.geometry,mcaballofinal.matrix);
  caballofinal2.merge(mcolumna1.geometry,mcolumna1.matrix);

  var mcaballofinal2 = new THREE.Mesh(caballofinal2);

  var caballofinal3 = new THREE.Geometry();
  caballofinal3.merge(mcaballofinal2.geometry,mcaballofinal2.matrix);
  caballofinal3.merge(mtoroide1.geometry,mtoroide1.matrix);

  var mcaballofinal3 = new THREE.Mesh(caballofinal3);

  var caballofinal4 = new THREE.Geometry();
  caballofinal4.merge(mcaballofinal3.geometry,mcaballofinal3.matrix);
  caballofinal4.merge(mcaballo.geometry,mcaballo.matrix);

  var knight = caballofinal4.clone();
  knight.rotateY(Math.PI);
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////    PEON    ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  var base = new THREE.CylinderGeometry(5,5,3,50);
  var material = new THREE.MeshNormalMaterial();

  var columna1 = new THREE.CylinderGeometry(3.5,4,2,50);
  columna1.translate(0,2.5,0);

  var toroide1 = new THREE.TorusGeometry(3.5,.5,50,50);
  toroide1.rotateX(Math.PI/2);
  toroide1.translate(0,3.5,0);

  var columna2 = new THREE.CylinderGeometry(2,3.5,4,50);
  columna2.translate(0,5.5,0);

  var btecho = new THREE.CylinderGeometry(1.5,2.5,2,50);
  btecho.translate(0,8.5,0);

  var bola = new THREE.SphereGeometry(2.5,50,50);
  bola.translate(0,10.5,0)

  //Mallas
  var mbase = new THREE.Mesh(base);
  var mcolumna1 = new THREE.Mesh(columna1);
  var mtoroide1 = new THREE.Mesh(toroide1);
  var mcolumna2 = new THREE.Mesh(columna2);
  var mbtecho = new THREE.Mesh(btecho);
  var mbola = new THREE.Mesh(bola);

  //Cuerpo completo

  var peonfinal = new THREE.Geometry();
  peonfinal.merge(mbase.geometry,mbase.matrix);
  peonfinal.merge(mcolumna1.geometry,mcolumna1.matrix);

  var mpeonfinal = new THREE.Mesh(peonfinal);

  var peonfinal2 = new THREE.Geometry();
  peonfinal2.merge(mpeonfinal.geometry,mpeonfinal.matrix);
  peonfinal2.merge(mcolumna1.geometry,mcolumna1.matrix);

  var mpeonfinal2 = new THREE.Mesh(peonfinal2);

  var peonfinal3 = new THREE.Geometry();
  peonfinal3.merge(mpeonfinal2.geometry,mpeonfinal2.matrix);
  peonfinal3.merge(mtoroide1.geometry,mtoroide1.matrix);

  var mpeonfinal3 = new THREE.Mesh(peonfinal3);

  var peonfinal4 = new THREE.Geometry();
  peonfinal4.merge(mpeonfinal3.geometry,mpeonfinal3.matrix);
  peonfinal4.merge(mcolumna2.geometry,mcolumna2.matrix);

  var mpeonfinal4 = new THREE.Mesh(peonfinal4);

  var peonfinal5 = new THREE.Geometry();
  peonfinal5.merge(mpeonfinal4.geometry,mpeonfinal4.matrix);
  peonfinal5.merge(mbtecho.geometry,mbtecho.matrix);

  var mpeonfinal5 = new THREE.Mesh(peonfinal5);

  var pawn = new THREE.Geometry();
  pawn.merge(mpeonfinal5.geometry,mpeonfinal5.matrix);
  pawn.merge(mbola.geometry,mbola.matrix);
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////  ALFIL  /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  var base = new THREE.CylinderGeometry(5,5,3,50);
  var material = new THREE.MeshNormalMaterial();

  var columna1 = new THREE.CylinderGeometry(3.5,4,2,50);
  columna1.translate(0,2.5,0);

  var toroide1 = new THREE.TorusGeometry(3.5,.5,50,50);
  toroide1.rotateX(Math.PI/2);
  toroide1.translate(0,3.5,0);

  var columna2 = new THREE.CylinderGeometry(2.5,3.5,8,50);
  columna2.translate(0,7.5,0);

  var basetecho = new THREE.CylinderGeometry(2.5,4,2,50);
  basetecho.translate(0,12.5,0);

  var bola = new THREE.SphereGeometry(3,10,10);
  bola.translate(0,15,0);

  var toroide2 = new THREE.TorusGeometry(2.5,.25,50,50);
  toroide2.rotateX(Math.PI/2);
  toroide2.translate(0,13.5,0);

  var bola2 = new THREE.SphereGeometry(1.5,10,10);
  bola2.translate(0,19,0);

  //Mallas
  var mbase = new THREE.Mesh(base);
  var mcolumna1 = new THREE.Mesh(columna1);
  var mtoroide1 = new THREE.Mesh(toroide1);
  var mcolumna2 = new THREE.Mesh(columna2);
  var mbasetecho = new THREE.Mesh(basetecho);
  var mbola = new THREE.Mesh(bola);
  var mtoroide2 = new THREE.Mesh(toroide2);
  var mbola2 = new THREE.Mesh(bola2);
  //Cuerpo completo

  var alfilfinal = new THREE.Geometry();
  alfilfinal.merge(mbase.geometry,mbase.matrix);
  alfilfinal.merge(mcolumna1.geometry,mcolumna1.matrix);

  var malfilfinal = new THREE.Mesh(alfilfinal);

  var alfilfinal2 = new THREE.Geometry();
  alfilfinal2.merge(malfilfinal.geometry,malfilfinal.matrix);
  alfilfinal2.merge(mcolumna1.geometry,mcolumna1.matrix);

  var malfilfinal2 = new THREE.Mesh(alfilfinal2);

  var alfilfinal3 = new THREE.Geometry();
  alfilfinal3.merge(malfilfinal2.geometry,malfilfinal2.matrix);
  alfilfinal3.merge(mtoroide1.geometry,mtoroide1.matrix);

  var malfilfinal3 = new THREE.Mesh(alfilfinal3);

  var alfilfinal4 = new THREE.Geometry();
  alfilfinal4.merge(malfilfinal3.geometry,malfilfinal3.matrix);
  alfilfinal4.merge(mcolumna2.geometry,mcolumna2.matrix);

  var malfilfinal4 = new THREE.Mesh(alfilfinal4);

  var alfilfinal5 = new THREE.Geometry();
  alfilfinal5.merge(malfilfinal4.geometry,malfilfinal4.matrix);
  alfilfinal5.merge(mbasetecho.geometry,mbasetecho.matrix);

  var malfilfinal5 = new THREE.Mesh(alfilfinal5);

  var alfilfinal6 = new THREE.Geometry();
  alfilfinal6.merge(malfilfinal5.geometry,malfilfinal5.matrix);
  alfilfinal6.merge(mbola.geometry,mbola.matrix);

  var malfilfinal6 = new THREE.Mesh(alfilfinal6);

  var alfilfinal7 = new THREE.Geometry();
  alfilfinal7.merge(malfilfinal6.geometry,malfilfinal6.matrix);
  alfilfinal7.merge(mtoroide2.geometry,mtoroide2.matrix);

  var malfilfinal7 = new THREE.Mesh(alfilfinal7);

  var bishop = new THREE.Geometry();
  bishop.merge(malfilfinal7.geometry,malfilfinal7.matrix);
  bishop.merge(mbola2.geometry,mbola2.matrix);
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////  TORRE  /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  var base = new THREE.CylinderGeometry(5,5,3,50);
  var material = new THREE.MeshNormalMaterial();

  var columna1 = new THREE.CylinderGeometry(3.5,4,2,50);
  columna1.translate(0,2.5,0);

  var toroide1 = new THREE.TorusGeometry(3.5,.5,50,50);
  toroide1.rotateX(Math.PI/2);
  toroide1.translate(0,3.5,0);

  var columna2 = new THREE.CylinderGeometry(2.5,3.5,10,50);
  columna2.translate(0,8.5,0);

  var btecho = new THREE.CylinderGeometry(3.5,2.5,2,50);
  btecho.translate(0,14.5,0);

  var btecho2 = new THREE.CylinderGeometry(2,3.5,1,50);
  btecho2.translate(0,16,0);

  var piedra1 = new THREE.BoxGeometry(2,2.5,1.5);
  piedra1.translate(0,16.5,3.25);

  var piedra2 = new THREE.BoxGeometry(2,2.5,1.5);
  piedra2.translate(0,16.5,-3.25); 

  var piedra3 = new THREE.BoxGeometry(2,2.5,1.5);
  piedra3.rotateY(Math.PI/4);
  piedra3.translate(2.81,16.5,1.625); 

  var piedra4 = new THREE.BoxGeometry(2,2.5,1.5);
  piedra4.rotateY(Math.PI/-4);
  piedra4.translate(-2.81,16.5,1.625);

  var piedra5 = new THREE.BoxGeometry(2,2.5,1.5);
  piedra5.rotateY(Math.PI/-4);
  piedra5.translate(3.25,16.5,-1.625);

  var piedra6 = new THREE.BoxGeometry(2,2.5,1.5);
  piedra6.rotateY(Math.PI/4);
  piedra6.translate(-3.25,16.5,-1.625);

  //Mallas
  var mbase = new THREE.Mesh(base);
  var mcolumna1 = new THREE.Mesh(columna1);//1
  var mtoroide1 = new THREE.Mesh(toroide1);//2
  var mcolumna2 = new THREE.Mesh(columna2);//3
  var mbtecho = new THREE.Mesh(btecho);
  var mbtecho2 = new THREE.Mesh(btecho2);
  var mpiedra = new THREE.Mesh(piedra1);
  var mpiedra2 = new THREE.Mesh(piedra2);
  var mpiedra3 = new THREE.Mesh(piedra3);
  var mpiedra4 = new THREE.Mesh(piedra4);
  var mpiedra5 = new THREE.Mesh(piedra5);
  var mpiedra6 = new THREE.Mesh(piedra6);
 
  //Cuerpo completo
  var torrefinal = new THREE.Geometry();
  torrefinal.merge(mcolumna1.geometry,mcolumna1.matrix);
  torrefinal.merge(mtoroide1.geometry,mtoroide1.matrix);

  var mtorrefinal = new THREE.Mesh(torrefinal);

  var torrefinal2 = new THREE.Geometry();
  torrefinal2.merge(mtorrefinal.geometry,mtorrefinal.matrix);
  torrefinal2.merge(mcolumna2.geometry,mcolumna2.matrix);

  var mtorrefinal2 = new THREE.Mesh(torrefinal2);

  var torrefinal3 = new THREE.Geometry();
  torrefinal3.merge(mtorrefinal2.geometry,mtorrefinal2.matrix);
  torrefinal3.merge(mbase.geometry,mbase.matrix);

  var mtorrefinal3 = new THREE.Mesh(torrefinal3);

  var torrefinal4 = new THREE.Geometry();
  torrefinal4.merge(mtorrefinal3.geometry,mtorrefinal3.matrix);
  torrefinal4.merge(mbtecho.geometry,mbtecho.matrix);

  var mtorrefinal4 = new THREE.Mesh(torrefinal4);

  var torrefinal5 = new THREE.Geometry();
  torrefinal5.merge(mtorrefinal4.geometry,mtorrefinal4.matrix);
  torrefinal5.merge(mbtecho2.geometry,mbtecho2.matrix);

  var mtorrefinal5 = new THREE.Mesh(torrefinal5);

  var torrefinal6 = new THREE.Geometry();
  torrefinal6.merge(mtorrefinal5.geometry,mtorrefinal5.matrix);
  torrefinal6.merge(mpiedra.geometry,mpiedra.matrix);

  var mtorrefinal6 = new THREE.Mesh(torrefinal6);

  var torrefinal7 = new THREE.Geometry();
  torrefinal7.merge(mtorrefinal6.geometry,mtorrefinal6.matrix);
  torrefinal7.merge(mpiedra2.geometry,mpiedra2.matrix);

  var mtorrefinal7 = new THREE.Mesh(torrefinal7);

  var torrefinal8 = new THREE.Geometry();
  torrefinal8.merge(mtorrefinal7.geometry,mtorrefinal7.matrix);
  torrefinal8.merge(mpiedra3.geometry,mpiedra3.matrix);

  var mtorrefinal8 = new THREE.Mesh(torrefinal8);

  var torrefinal9 = new THREE.Geometry();
  torrefinal9.merge(mtorrefinal8.geometry,mtorrefinal8.matrix);
  torrefinal9.merge(mpiedra4.geometry,mpiedra4.matrix);

  var mtorrefinal9 = new THREE.Mesh(torrefinal9);

  var torrefinal10 = new THREE.Geometry();
  torrefinal10.merge(mtorrefinal9.geometry,mtorrefinal9.matrix);
  torrefinal10.merge(mpiedra5.geometry,mpiedra5.matrix);

  var mtorrefinal10 = new THREE.Mesh(torrefinal10);

  var rook = new THREE.Geometry();
  rook.merge(mtorrefinal10.geometry,mtorrefinal10.matrix);
  rook.merge(mpiedra6.geometry,mpiedra6.matrix);
*/
