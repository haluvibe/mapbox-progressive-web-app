interface ReadLicensePlateResponse {
  status: "FOUND" | "NOT_FOUND";
  license?: string;
  parsedWords: string;
  detectedText: TextMatch[];
}

interface TextMatch {
  Confidence: number;
  DetectedText: string;
  Geometry: {
    BoundingBox: {
      Height: number;
      Left: number;
      Top: number;
      Width: number;
    };
    Polygon: { X: number; Y: number }[];
  };
  Id: number;
  Type: "LINE" | "WORD";
}

export async function fetchLicensePlate(
  photo: Blob
): Promise<ReadLicensePlateResponse> {
  const base64 = await convertBlobToBase64(photo);

  const response = await fetch(
    "https://4n5c6p3k57.execute-api.ap-southeast-2.amazonaws.com/prod/license/read",
    {
      method: "POST",
      body: base64,
    }
  );

  return response.json();
}

async function convertBlobToBase64(photo: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(photo);
      fileReader.onloadend = () => {
        resolve(
          fileReader.result?.toString().replace(/data:.*\/.*;base64,/, "") ?? ""
        );
      };
    } catch (error) {
      reject(error);
    }
  });
}
