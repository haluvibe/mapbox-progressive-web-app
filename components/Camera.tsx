import React, { useState, useCallback, useRef, useEffect, Ref } from "react";
import {
  Body2,
  ContainedButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FlexColumn,
  FlexRow,
  Subtitle1,
} from "../src/components/DesignSystem/Library";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import { alpha } from "@mui/system";
import { Link, Avatar } from "@mui/material";

interface CameraProps {}

const Camera: React.FC<CameraProps> = () => {
  const [open, setOpen] = React.useState(false);
  const [photo, setPhoto] = useState<Blob | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [camera, setCamera] = useState<MediaDeviceInfo[] | null>(null);
  // const [cameras, setCameras] = useState<MediaDeviceInfo[] | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function startCamera() {
      try {
        const cameras = await navigator.mediaDevices.enumerateDevices();
        // setCameras(cameras);

        const videoCameras = cameras.filter(
          (camera) => camera.kind === "videoinput"
        );
        if (videoCameras.length === 0) {
          setError(new Error("No camera available"));
          return;
        }
        setCamera(videoCameras);
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        const video = videoRef.current;
        if (video) {
          video.srcObject = stream;
        }
        await video?.play();
      } catch (error) {
        setError(error as Error);
      }
    }

    startCamera();
  }, [open]);

  const takePhoto = useCallback(() => {
    try {
      const video = videoRef.current;
      const canvas = document.createElement("canvas");
      if (!!video && !!canvas) {
        canvas.width = video?.videoWidth;
        canvas.height = video?.videoHeight;
        const ctx = canvas?.getContext("2d");
        ctx?.drawImage(video, 0, 0, canvas?.width, canvas?.height);
        canvas?.toBlob((blob) => {
          setPhoto(blob);
          handleClose();
        }, "image/jpeg");
      }
    } catch (error) {
      setError(error as Error);
    }
  }, [open]);

  // const switchCamera = useCallback(async () => {
  //   try {
  //     const currentCameraIndex = camera?.findIndex(
  //       (cam) =>
  //         cam.deviceId ===
  //         videoRef?.current?.srcObject?.getVideoTracks()[0].getSettings()
  //           .deviceId
  //     );
  //     const nextCameraIndex =
  //       (currentCameraIndex ?? 0 + 1) % (camera?.length ?? 1);

  //     // Stop the current camera before switching
  //     const currentStream = videoRef?.current?.srcObject;
  //     if (currentStream) {
  //       currentStream?.getTracks().forEach((track) => track.stop());
  //     }

  //     const stream = await navigator.mediaDevices
  //       .getUserMedia({
  //         video: { deviceId: camera?.[nextCameraIndex].deviceId },
  //       })
  //       .catch((error) => {
  //         setError(error);
  //         return;
  //       });

  //     if (!stream) return;

  //     const video = videoRef.current;
  //     if (!!video) {
  //       video.srcObject = stream;
  //     }
  //     await video?.play();
  //   } catch (error) {
  //     setError(error as Error);
  //   }
  // }, [camera]);

  if (error) {
    return <p>Error accessing camera: {error.message}</p>;
  } else if (photo && !open) {
    return (
      <FlexColumn alignItems={"center"}>
        <FlexRow>
          <img
            src={URL.createObjectURL(photo)}
            alt="captured"
            style={{ maxHeight: "250px", maxWidth: "100%" }}
          />
        </FlexRow>
        <FlexRow>
          <ContainedButton onClick={handleClickOpen}>
            Retake Photo
          </ContainedButton>
        </FlexRow>
      </FlexColumn>
    );
  } else if (!camera) {
    return <p>Loading camera...</p>;
  } else {
    // const showSwitchCameraButton = camera.length > 1;
    return (
      <FlexRow>
        <FlexColumn
          sx={(theme) => ({
            alignItems: "center",
            borderStyle: "dashed",
            borderWidth: 1,
            borderRadius: `${theme.shape.borderRadius}px`,
            width: "100%",
            p: 2,
            // ...(error && {
            //   backgroundColor: theme.palette.error.shades?.['4p'],
            //   borderColor: theme.palette.error.main,
            // }),
          })}
        >
          <Avatar
            sx={(theme) => ({
              width: 48,
              height: 48,
              backgroundColor: error
                ? alpha(theme.palette.error.main, 0.08)
                : alpha(theme.palette.primary.main, 0.08),
            })}
          >
            <BrokenImageIcon color={error ? "error" : "primary"} />
          </Avatar>

          <Subtitle1 color={"text.primary"}>
            <Link
              sx={{ cursor: "pointer" }}
              color={"primary"}
              onClick={handleClickOpen}
            >
              Take a picture
            </Link>
          </Subtitle1>

          <Body2>Take a picture of the vehicle registration plate</Body2>
        </FlexColumn>

        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          size={"lg"}
        >
          <DialogTitle id="customized-dialog-title">Take a picture</DialogTitle>
          <DialogContent dividers>
            <FlexColumn>
              <FlexRow>
                <video
                  style={{ width: "100%", height: "100%" }}
                  id="camera"
                  ref={videoRef}
                  playsInline
                  autoPlay
                  muted
                ></video>
              </FlexRow>
            </FlexColumn>
          </DialogContent>
          <DialogActions>
            <FlexRow>
              <ContainedButton onClick={takePhoto}>Take photo</ContainedButton>

              {/* {showSwitchCameraButton && (
                <ContainedButton onClick={switchCamera}>
                  Switch front/rear camera
                </ContainedButton>
              )} */}
              <ContainedButton onClick={handleClose}>
                Close Modal
              </ContainedButton>
            </FlexRow>
          </DialogActions>
        </Dialog>
      </FlexRow>
    );
  }
};

export default Camera;
