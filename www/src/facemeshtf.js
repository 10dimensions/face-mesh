//import in js
//import * as facemesh from '@tensorflow-models/facemesh';

var verts = [];

async function main() {


    console.log('main called');

    // Load the MediaPipe facemesh model.
    const model = await facemesh.load();
  
    // Pass in a video stream (or an image, canvas, or 3D tensor) to obtain an
    // array of detected faces from the MediaPipe graph.
    const predictions = await model.estimateFaces(document.querySelector("video"));
  
    if (predictions.length > 0) {

        var face = scene.getObjectByName('face');

        if(face !== undefined){
            //scene.getObjectByName('face').visible = true;
        }
      /*
      `predictions` is an array of objects describing each detected face, for example:
  
      [
        {
          faceInViewConfidence: 1, // The probability of a face being present.
          boundingBox: { // The bounding box surrounding the face.
            topLeft: [232.28, 145.26],
            bottomRight: [449.75, 308.36],
          },
          mesh: [ // The 3D coordinates of each facial landmark.
            [92.07, 119.49, -17.54],
            [91.97, 102.52, -30.54],
            ...
          ],
          scaledMesh: [ // The 3D coordinates of each facial landmark, normalized.
            [322.32, 297.58, -17.54],
            [322.18, 263.95, -30.54]
          ],
          annotations: { // Semantic groupings of the `scaledMesh` coordinates.
            silhouette: [
              [326.19, 124.72, -3.82],
              [351.06, 126.30, -3.00],
              ...
            ],
            ...
          }
        }
      ]
      */
      for (let i = 0; i < predictions.length; i++) {
        const keypoints = predictions[i].scaledMesh;

        verts = keypoints.flat();

        // if(face !== undefined)
        // {
        //     face.geometry.attributes.position.array = verts;
        //     face.geometry.attributes.position.needsUpdate = true;
        // }
        // else
        // {
        //     createFaceGeometry(verts);
        // }
  
        // Log facial keypoints.
        /*
        for (let i = 0; i < keypoints.length; i++) {
          const [x, y, z] = keypoints[i];
            
          if(i=== 245 || i===465)
          console.log(`Keypoint ${i}: [${x}, ${y}, ${z}]`);
        }
        */
      }
    }
    else{

        if(scene.getObjectByName('face') !== undefined){
            //scene.getObjectByName('face').visible = false;
        }
    }

    requestAnimationFrame(main);
  }
  
  main();