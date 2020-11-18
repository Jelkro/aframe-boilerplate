AFRAME.registerComponent('camera-follower', {
    
    init: function() {
        this.offsetVec3 = new THREE.Vector3(0, 0, 2);
        this.directionVec3 = new THREE.Vector3(1, 1, -1);
        this.newPosVec3 = new THREE.Vector3();

    },
    
    tick: function () {
      var cameraEl = this.el.sceneEl.camera.el;
      var camPos = cameraEl.getAttribute('position');
      var offsetVec3 = this.offsetVec3;
      var newPos = this.newPosVec3;
      var directionVec3 = this.directionVec3;

      newPos.copy(camPos.clone().add(offsetVec3).multiply(directionVec3));
      this.el.object3D.position.copy(newPos);

      // this.el.object3D.position.x += .01;
    //   cameraEl.getAttribute('rotation');
      
    }
  });