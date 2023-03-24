import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  Body2,
  ContainedButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FlexColumn,
  FlexRow,
  FormGrid,
  Subtitle1,
  TextButton,
} from "../src/components/DesignSystem/Library";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import { alpha } from "@mui/system";
import { Link, Avatar } from "@mui/material";
import { usePhoto } from "../providers/PhotoProvider";
import { useDevices } from "../providers/DevicesProvider";
import { useMapContext } from "../src/components/MapContext";
import { fetchLicensePlate } from "../src/utils/fetchLicensePlate";

interface CameraProps {}

const Camera: React.FC<CameraProps> = () => {
  const { photo, setPhoto } = usePhoto();
  const { cameraStream, startCameraStream, stopCameraStream } = useDevices();
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState<Error | null>(null);
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
        await startCameraStream();
        const video = videoRef.current;
        if (video && cameraStream) {
          video.srcObject = cameraStream;
          video.play().catch((error) => {
            console.error("Error playing video:", error);
          });
        }
      } catch (error) {
        setError(error as Error);
      }
    }

    if (open) {
      startCamera();
    } else {
      stopCameraStream();
    }

    return () => {
      stopCameraStream();
    };
  }, [open, cameraStream, startCameraStream, stopCameraStream]);

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
        <TextButton fullWidth onClick={handleClickOpen}>
          Retake Photo
        </TextButton>
      </FlexColumn>
    );
  } else {
    // const showSwitchCameraButton = camera.length > 1;
    return (
      <FlexRow>
        <FlexColumn
          onClick={handleClickOpen}
          sx={(theme) => ({
            alignItems: "center",
            borderStyle: "dashed",
            borderWidth: 1,
            borderRadius: `${theme.shape.borderRadius}px`,
            width: "100%",
            p: 2,
            cursor: "pointer",
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
            <FlexRow width={"100%"} justifyContent={"flex-end"}>
              <ContainedButton
                onClick={takePhoto}
                disabled={!videoRef?.current || !cameraStream}
                fullWidth
              >
                Take picture
              </ContainedButton>

              <TextButton fullWidth onClick={handleClose}>
                Close
              </TextButton>
            </FlexRow>
          </DialogActions>
        </Dialog>
      </FlexRow>
    );
  }
};

export default Camera;
