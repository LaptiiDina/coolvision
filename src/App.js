import { useEffect, useState } from "react";
import "./App.css";
import  { Main } from "./components/Main";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "http://j0.wlmediahub.com/App_Themes/api/test/photos.js";
    fetch(url)
      .then((response) => response.json())
      .then((img) => {
        setImages(img.photo);
      })
      .catch(err => console.log(err))

    setLoading(false);

  }, []);

  if (loading) {
    return (<p>Loading...</p>) 
  } else {
    if (!images.length) {
      return (<p>No images </p>)
    } else {
      return (
        <>
          <Main arayOfImages={images} />
        </>
      )
    }
  }
}


export default App;
