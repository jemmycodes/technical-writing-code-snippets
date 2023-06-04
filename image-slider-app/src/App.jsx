import "./App.css";
import { useState, useEffect } from "react";
import back from "./assets/back.svg";
import next from "./assets/next.svg";

const imagesArray = [
  "https://i.pinimg.com/originals/e6/72/c9/e672c9fe478daac0019c9235e3a9794c.jpg",
  "https://i.pinimg.com/originals/10/11/bc/1011bcc380b230ecb422589c990e38ec.jpg",
  "https://littlelosttravel.com/wp-content/uploads/2020/11/Finland.jpg",
  "https://littlelosttravel.com/wp-content/uploads/2020/11/Hawaii-jelle-de-gie-u.jpg",
  " https://littlelosttravel.com/wp-content/uploads/2020/11/Morocco-sergey-pesterev-u.jpg",
];

function App() {
  const [activeImage, setActiveImage] = useState(0);

  const goToNextImage = () => {
    if (activeImage === imagesArray.length - 1) {
      setActiveImage(0);
      return;
    }
    setActiveImage(activeImage + 1);
  };

  const goToPreviousImage = () => {
    if (activeImage === 0) {
      setActiveImage(imagesArray.length - 1);
      return;
    }
    setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    console.log(imagesArray[activeImage], activeImage);
  }, [activeImage]);

  return (
    <main>
      <section>
        <div>
          <img
            src={back}
            alt=""
            width={50}
            height={50}
            className="icon-left"
            onClick={goToPreviousImage}
          />

          <img
            src={next}
            alt=""
            width={50}
            height={50}
            className="icon-right"
            onClick={goToNextImage}
          />
          <img src={imagesArray[activeImage]} alt="" className="main-image" />
        </div>
      </section>
    </main>
  );
}

export default App;
