import React, { LegacyRef, useRef, useState } from "react";
import { ImageProps } from "../interfaces";
import { usePhotos } from "../hooks/usePhotos";
import useHover  from "../hooks/useHover";

const Image: React.FC<ImageProps> = ({ img, className }) => {
  // const [hovered, setHover] = useState<boolean>(false);

  const [hovered, ref] = useHover()
  const {toggleFavorite, addToCart, cartItems, removeFromCart} = usePhotos()

  function heartIcon() {
    if(img.isFavorite) {
        return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
    } else if(hovered) {
        return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    }
  }

  function cartIcon() {
    const itemChecked = cartItems.some(item => item.id === img.id)
    if(itemChecked) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
    } else if(hovered) {
      return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    }
  }

  return (
    <div
      // onMouseEnter={() => setHover(true)}
      // onMouseLeave={() => setHover(false)}
      ref={ref as LegacyRef<HTMLDivElement>}
      className={`${className} image-container`}
    >
      <img src={img.url} className="image-grid" alt="img" />

      {heartIcon()}
      {cartIcon()}
    </div>
  );
};

export default Image;
