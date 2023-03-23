import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ArrowBackIcon,
  ContainedButton,
  FlexColumn,
  TextInput,
} from "./DesignSystem/Library";
import { Box } from "@mui/material";
import { usePlacesWidget } from "react-google-autocomplete";
import { useMapContext } from "./MapContext";

interface Props {
  onShowRoutes: () => void;
  onTripDetailsBack: () => void;
}

const apiKey = "AIzaSyDUxlHXSkqOCFZIqoFMqMqh_hggdPwLWrA";

const options = {
  componentRestrictions: {
    country: ["au"],
  },
  fields: ["formatted_address", "geometry", "name"],
  types: ["address"],
};

export interface GooglePlace {
  formatted_address: string;
  geometry: { location: { lat: () => number; lng: () => number } };
}

const TripDetails: FC<Props> = ({
  onTripDetailsBack,
  onShowRoutes,
}: Props): JSX.Element => {
  const [isTopAutocompleteOpen, setIsTopAutocompleteOpen] = useState(false);
  const [isBottomAutocompleteOpen, setIsBottomAutocompleteOpen] =
    useState(false);
  const { setDestPlace, setSourcePlace, sourcePlace, destPlace } =
    useMapContext() ?? {};

  const { ref: sourceRef } = usePlacesWidget<HTMLInputElement>({
    apiKey,
    options,
    onPlaceSelected: setSourcePlace,
  });

  const { ref: destRef } = usePlacesWidget<HTMLInputElement>({
    apiKey,
    options,
    onPlaceSelected: setDestPlace,
  });

  return (
    <FlexColumn
      gap={2}
      minHeight={
        isTopAutocompleteOpen ? 330 : isBottomAutocompleteOpen ? 400 : "100%"
      }
    >
      <ArrowBackIcon onClick={onTripDetailsBack} cursor={"pointer"} />
      <Box fontWeight={700}>Enter your trip details</Box>
      <TextInput
        ref={sourceRef}
        label={"Enter source address"}
        onChange={(event) => {
          if (event.target.value) {
            setIsTopAutocompleteOpen(true);
          } else if (isTopAutocompleteOpen) {
            setIsTopAutocompleteOpen(false);
          }
        }}
        onBlur={() => setIsTopAutocompleteOpen(false)}
      />
      <TextInput
        ref={destRef}
        label={"Enter destination address"}
        onChange={(event) => {
          if (event.target.value) {
            setIsBottomAutocompleteOpen(true);
          } else if (isTopAutocompleteOpen) {
            setIsBottomAutocompleteOpen(false);
          }
        }}
        onBlur={() => setIsBottomAutocompleteOpen(false)}
      />
      <ContainedButton
        onClick={onShowRoutes}
        disabled={!sourcePlace || !destPlace}
      >
        Show routes
      </ContainedButton>
    </FlexColumn>
  );
};

export default TripDetails;
