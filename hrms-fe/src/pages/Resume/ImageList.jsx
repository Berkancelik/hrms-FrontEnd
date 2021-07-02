  
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageService from "../../services/ımageService";
import { Image } from "semantic-ui-react";
export default function ImageList() {
  let { candidateId } = useParams();
  const [images, setImages] = useState([]);
  useEffect(() => {
    let imageService = new ImageService();
    imageService
      .getImages(candidateId)
      .then((result) => setImages(result.data.data));
  }, [candidateId]);
  return (
    <div>
      {images.map((image) => (
        <Image
        key={image.id}
          centered
          style={{ marginLeft: "10em", marginBottom: "2em", marginTop: "2em" }}
          verticalAlign="bottom"
          circular
          src={image.imageUrl}
          size="small"
        />
      ))}
    </div>
  );
}