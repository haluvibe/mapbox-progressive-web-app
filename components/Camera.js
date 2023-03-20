import React, { useState, useCallback, useRef, useEffect } from 'react';

function Camera() {
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);
  const [camera, setCamera] = useState(null);
  const [cameras, setCameras] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const cameras = await navigator.mediaDevices.enumerateDevices();
        setCameras(cameras);
        
        const videoCameras = cameras.filter(camera => camera.kind === 'videoinput');
        if (videoCameras.length === 0) {
          setError(new Error('No camera available'));
          return;
        }
        setCamera(videoCameras);
        const stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: videoCameras[0].deviceId, facingMode: "environment" } });
        const video = videoRef.current;
        video.srcObject = stream;
        await video.play();
      } catch (error) {
        setError(error);
      }
    }

    startCamera();
  }, []);

  const takePhoto = useCallback(async () => {
    try {
      const track = videoRef.current.srcObject.getVideoTracks()[0];
      const imageCapture = new ImageCapture(track);
      const blob = await imageCapture.takePhoto();
      setPhoto(blob);
    } catch (error) {
      setError(error);
    }
  }, []);

  const switchCamera = useCallback(async () => {
    try {
      const currentCameraIndex = camera.findIndex(cam => cam.deviceId === videoRef.current.srcObject.getVideoTracks()[0].getSettings().deviceId);
      const nextCameraIndex = (currentCameraIndex + 1) % camera.length;

      // Stop the current camera before switching
      const currentStream = videoRef.current.srcObject;
      if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
      }

      const stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: camera[nextCameraIndex].deviceId, facingMode: nextCameraIndex === 0 ? "user" : "environment" } });
      const video = videoRef.current;
      video.srcObject = stream;
      await video.play();
    } catch (error) {
      setError(error);
    }
  }, [camera]);

  if (error) {
    return <p>Error accessing camera: {error.message}</p>;
  } else if (!camera) {
    return <p>Loading camera...</p>;
  } else {
    const showSwitchCameraButton = camera.length > 1;
    return (
      <div>
        <div>
          <pre>{JSON.stringify(cameras, null, 4)}</pre>
        </div>
        <div>
        <button onClick={takePhoto}>Take photo</button>

        {showSwitchCameraButton && <button onClick={switchCamera}>Switch front/rear camera</button>}
        </div>
        <div>
          <video id="camera" ref={videoRef} playsInline autoPlay muted></video>
        </div>
        <div>
          {photo && <img src={URL.createObjectURL(photo)} alt="captured" />}
        </div>
      </div>
    );
  }
}

export default Camera;