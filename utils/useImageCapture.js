import { useEffect, useRef } from 'react';

export const useImageCapture = () => {
  const videoRef = useRef();
  const imageCaptureRef = useRef();

  useEffect(() => {
    const initCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        // The camera stream is now available
        videoRef.current.srcObject = stream;

        const imageCapture = new ImageCapture(stream.getVideoTracks()[0]);
        imageCaptureRef.current = imageCapture;
        // The imageCapture object is now available for taking photos

      } catch (error) {
        // Handle any errors that occur while accessing the camera
        console.error('Error accessing camera:', error);
      }
    };

    initCamera();
  }, []);

  const takePhoto = async () => {
    try {
      const blob = await imageCaptureRef.current.takePhoto();
      return blob;
      // The photo was taken successfully
      // Use the blob object to display or upload the photo

    } catch (error) {
      // Handle any errors that occur while taking the photo
      console.error('Error taking photo:', error);
    }
  };

  return { videoRef, takePhoto };
};