import React, { useState, useContext, useEffect } from "react";

interface PhotoProviderProps {
  children: React.ReactNode;
}

interface PhotoContextValue {
  photo: Blob | null;
  setPhoto: (photo: Blob | null) => void;
  isLoading: boolean;
  hasLoaded: boolean;
}

const PhotoContext = React.createContext<PhotoContextValue | null>(null);

const usePhoto = () => {
  const context = useContext(PhotoContext);

  if (!context) {
    throw new Error("usePhoto must be used within a PhotoProvider");
  }

  const { photo, setPhoto, isLoading, hasLoaded } = context;

  return {
    photo,
    setPhoto,
    isLoading,
    hasLoaded,
  };
};

const PhotoProvider: React.FC<PhotoProviderProps> = ({ children }) => {
  const [photo, setPhotoState] = useState<Blob | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  const setPhoto = (newPhoto: Blob | null) => {
    setPhotoState(newPhoto);
    setIsLoading(false);
    setHasLoaded(false);
  };

  useEffect(() => {
    if (!photo) {
      setHasLoaded(false);
      setIsLoading(false);
      return;
    }

    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setHasLoaded(true);
    }, 2000);
  }, [photo]);

  const contextValue: PhotoContextValue = {
    photo,
    setPhoto,
    isLoading,
    hasLoaded,
  };

  return (
    <PhotoContext.Provider value={contextValue}>
      {children}
    </PhotoContext.Provider>
  );
};

export { PhotoProvider, usePhoto };
