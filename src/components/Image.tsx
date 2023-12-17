import React from "react";

interface ImageProps {
  imageUrl: string;
}

const Image: React.FC<ImageProps> = ({ imageUrl }) => {
  return (
    <div className="image-container">
      <img src={imageUrl} alt="Random" />
    </div>
  );
};

export default Image;
