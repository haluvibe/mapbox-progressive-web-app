import React, { FC, useRef, useState } from "react";
import { ContainedButton, FlexColumn, TextInput } from "./DesignSystem/Library";
import { Box } from "@mui/material";
import { usePlacesWidget } from "react-google-autocomplete";
import { useMapContext } from "./MapContext";

interface Props {
  onShowRoutes: () => void;
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

const TripDetails: FC<Props> = ({ onShowRoutes }: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const mapContext = useMapContext();
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
    <>
      <FlexColumn
        sx={{
          visibility: mapContext?.isMockData ? "visible" : "hidden",
          height: mapContext?.isMockData ? undefined : 0,
          width: mapContext?.isMockData ? undefined : 0,
          overflowY: mapContext?.isMockData ? undefined : "hidden",
        }}
        gap={2}
      >
        <Box fontWeight={700}>Enter your trip details</Box>
        <TextInput
          label={"Enter source address"}
          value={mapContext?.sourcePlace?.formatted_address ?? ""}
        />
        <TextInput
          label={"Enter destination address"}
          value={mapContext?.destPlace?.formatted_address ?? ""}
        />
        <ContainedButton
          onClick={onShowRoutes}
          disabled={!sourcePlace || !destPlace}
        >
          Show routes
        </ContainedButton>
      </FlexColumn>
      <FlexColumn
        sx={{
          visibility: mapContext?.isMockData ? "hidden" : "visible",
          height: mapContext?.isMockData ? 0 : undefined,
          width: mapContext?.isMockData ? 0 : undefined,
          overflowY: mapContext?.isMockData ? "hidden" : undefined,
          minHeight: mapContext?.isMockData
            ? undefined
            : isTopAutocompleteOpen
            ? 280
            : isBottomAutocompleteOpen
            ? 350
            : "auto",
        }}
        gap={2}
      >
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
    </>
  );
};

export default TripDetails;
