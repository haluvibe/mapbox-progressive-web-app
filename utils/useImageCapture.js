export const useImageCapture = () => {
    const takePhoto = async () => {
        if ('mediaDevices' in navigator && 'ImageCapture' in window) {
            try {
              // Get access to the camera
              const stream = await navigator.mediaDevices.getUserMedia({ video: true });
              // The camera stream is now available
              const camera = document.querySelector('#camera');
              // Set the stream as the source of the camera element
              camera.srcObject = stream;
              // Wait for the camera to start playing the stream
              await camera.play();
        
              // Create an ImageCapture object from the video track of the stream
              const track = stream.getVideoTracks()[0];
              const imageCapture = new ImageCapture(track);
        
              // Take a photo
              const blob = await imageCapture.takePhoto();
                return blob;
              // Use the blob object to display or upload the photo
            } catch (error) {
              // Handle any errors that occur while accessing the camera
              console.error('Error accessing camera:', error);
              return null;
            }
          } else {
            // The Image Capture API is not supported
            return null;
          }
    }
    
    return {
        takePhoto
    };
}