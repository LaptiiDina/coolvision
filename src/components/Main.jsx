import React, { useEffect } from 'react'
import { useState } from "react";
import Footer from './Footer';


export const Main = ({ arayOfImages }) => {

  const [prevImages, setPrevImages] = useState([]);
  const [images, setImages] = useState([]);
  const [update, setUpdate] = useState(true);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [text, setText] = useState(false);

  function getImgArray(quantity, max) {
    const newArray = [];
    if (!prevImages.length) {
      for (let i = 0; i < quantity; i++) {
        newArray[i] = arayOfImages[Math.floor(Math.random() * max)];
      }
    } else {
      while (quantity > newArray.length) {
        let index = Math.floor(Math.random() * max);
        let arrOldImg = [];
        if (!images.includes(index) && !prevImages.includes(index)) {
          newArray.push(index);
          arrOldImg.push(index);
        }
        setPrevImages(arrOldImg);
      }
    }

    return newArray;
  }
  useEffect(() => {
    setImages(getImgArray(5, arayOfImages.length));
    setLoading(false);
  }, []);

  const handleClick = () => {
    const imgQuantity = 5;
    setImages(getImgArray(imgQuantity, arayOfImages.length));
    setUpdate(!update);
  }
  if (loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  else {
    return (
      <div className="main-container">
        <div className="container">
          <div className="img">
            <img
              src={images[count].img}
              alt={images[count].title}
              key={images[count].id}
              onMouseOut={() => { setText(false) }}
              onMouseOver={() => { setText(true) }}
            />
            {text && <span className="title">{images[count].title}</span>}
            {text && <span className="content">{images[count].description}</span>}
          </div>
          <div>
            <Footer handleClick={handleClick} setCount={setCount} />
          </div>

        </div>
      </div>
    )
  }
}

export default Main