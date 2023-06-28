
import "./App.css";
import PhraseCard from "./components/Phrase";
import Title from "./components/Title";
import phrases from "./data/phrases.json";
import { useState } from "react";
import image1 from "./assets/image/fondo1.jpg";
import image2 from "./assets/image/fondo2.jpg";
import image3 from "./assets/image/fondo3.jpg";
import image4 from "./assets/image/fondo4.jpg";


function App() {
  
  const [index, setIndex] = useState(0);

  const images = [image1, image2, image3, image4];
  const backgroundImage = {
    backgroundImage: `url(${images[index]})`
  };

  const changePhrase = () => {
    setIndex(Math.floor(Math.random() * images.length));
  };
  
  

  return (
    <div className="image" style={backgroundImage}>
      <Title/>
      <PhraseCard data={phrases[index]} />
      <button onClick={changePhrase}>Siguiente</button>
    </div>
  );
}

export default App;