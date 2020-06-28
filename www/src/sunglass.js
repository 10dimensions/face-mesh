var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 640 / 480, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({ alpha: true, preserveDrawingBuffer:true });

renderer.setSize( 640, 480);
renderer.setClearColor( 0x000000, 0 );

document.getElementById("scene").appendChild( renderer.domElement );

// var geometry = new THREE.BoxGeometry(640, 480, 20);
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// cube.position.x = 640/2;
// cube.position.y = 480/2;
//scene.add( cube );

camera.position.x = 640/2;
camera.position.y = 480/2;
camera.position.z = 320;    //417.032;

var animate = function () {
	requestAnimationFrame( animate );

	//cube.rotation.x += 0.1;
	//cube.rotation.y += 0.1;

	renderer.render(scene, camera);
};


var createFaceGeometry = (_verts) => {
    var geometry = new THREE.BufferGeometry();
    // create a simple square shape. We duplicate the top left and bottom right
    // vertices because each vertex needs to appear once per triangle.
    // var vertices = new Float32Array( [
    // 	-1.0, -1.0,  1.0,
    // 	 1.0, -1.0,  1.0,
    // 	 1.0,  1.0,  1.0,

    // 	 1.0,  1.0,  1.0,
    // 	-1.0,  1.0,  1.0,
    // 	-1.0, -1.0,  1.0
    // ] );
    var vertices = new Float32Array(_verts);

    // itemSize = 3 because there are 3 values (components) per vertex
    geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var mesh = new THREE.Mesh( geometry, material );

    mesh.name = 'face';

    scene.add(mesh);
}

animate();