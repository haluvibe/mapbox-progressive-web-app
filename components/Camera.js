import React, { useState } from 'react';

function Camera() {
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);

  async function takePhoto() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const camera = document.querySelector('#camera');
      camera.srcObject = stream;
      await camera.play();

      const track = stream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(track);

      const blob = await imageCapture.takePhoto();
      setPhoto(blob);
    } catch (error) {
      setError(error);
    }
  }

  if ('mediaDevices' in navigator && 'ImageCapture' in window) {
    return (
      <div>
        <button onClick={takePhoto}>Take photo</button>
        <video id="camera"></video>
        {photo && <img src={URL.createObjectURL(photo)} alt="captured" />}
        {error && <p>Error accessing camera: {error.message}</p>}
      </div>
    );
  } else {
    return <p>The Image Capture API is not supported.</p>;
  }
}

export default Camera;



