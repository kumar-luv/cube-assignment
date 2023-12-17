import React, { useEffect, useState } from "react";
import Image from "./Image";

interface ImageData {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const Images: React.FC = () => {
  const [myarr, setMyArr] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [usedIds, setUsedIds] = useState<Set<string>>(new Set());

  const getRandomUniqueImages = (response: ImageData[]): ImageData[] => {
    const randomImages: ImageData[] = [];
    while (randomImages.length < 9) {
      const randomIndex = Math.floor(Math.random() * response.length);
      const randomImage = response[randomIndex];
      if (!usedIds.has(randomImage.id)) {
        randomImages.push(randomImage);
        setUsedIds((prevUsedIds) => new Set(prevUsedIds).add(randomImage.id));
      }
    }
    return randomImages;
  };

  const getImages = async () => {
    const data = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
    const response: ImageData[] = await data.json();
    const randomImages = getRandomUniqueImages(response);
    setMyArr(randomImages);
    setLoading(false);
  };

  useEffect(() => {

    const interval = setInterval(() => {
      getImages();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-grid">
      {loading ? (
        <div className="loader"></div>
      ) : (
        myarr.map((image, index) => (
          <Image key={`${image.id}_${index}`} imageUrl={image.download_url} />
        ))
      )}
    </div>
  );
};

export default Images;
