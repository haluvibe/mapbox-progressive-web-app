export const captureImage = async () => {
        if ('mediaDevices' in navigator && 'ImageCapture' in window) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                // The camera stream is now available
                const imageCapture = new ImageCapture(stream.getVideoTracks()[0]);
                // Use the imageCapture object to take photos
        
                const blob = await imageCapture.takePhoto();
                return blob;
                console.log("🚀 ~ file: useImageCapture.js:10 ~ useImageCapture ~ blob:", blob)
                // The photo was taken successfully
                // Use the blob object to display or upload the photo
        
            } catch (error) {
                // Handle any errors that occur while accessing the camera or taking the photo
                console.error('Error:', error);
            }
        } else {
            return null;
        }
        return null;
}