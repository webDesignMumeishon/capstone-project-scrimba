import React from "react";
import Image from "../components/Image";
import { usePhotos } from "../hooks/usePhotos";
import { getClass } from "../utils";

function Photos() {

    const {allPhotos} = usePhotos()
    
    const photosJSXElement = allPhotos.map((photo,index) => 
        (<Image
            key={photo.id}
            img={photo}
            className={getClass(index)}
        />)
    )

  return (
    <div>
      <main className="photos">
        {photosJSXElement}
      </main>
    </div>
  );
}

export default Photos;


