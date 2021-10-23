import { useState } from "react";
import "./styles.css";

const SkillsDB = {
  Developement: [
    { name: "Front-End Developement", rating: "4/5" },
    { name: "Back-End Developement", rating: "4/5" },
    { name: "Software Developement", rating: "4/5" }
  ],
  DigitalMarketing: [
    { name: "SEO", rating: "4/5" },
    { name: " Social Media Marketing", rating: "4/5" },
    { name: " Affiliate Marketing", rating: "5/5" }
  ],
  GraphicDesigning: [
    { name: "Logo Designing", rating: "3.5/5" },
    { name: "Video Editing", rating: "5/5" },
    { name: "Poster Designing", rating: "5/5" }
  ]
};
var skillslist = Object.keys(SkillsDB);
console.log(skillslist);
export default function App() {
  const [A, setA] = useState("Developement");
  function genreClickHandler(genre) {
    setA(genre);
  }
  return (
    <div className="App">
      <h1> Technical Skills </h1>
      <p> </p>

      <div>
        {skillslist.map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <div>
        <ul>
          {SkillsDB[A].map((Skills) => (
            <li>
              <div style={{ fontSize: "larger" }}> {Skills.name} </div>
              <div style={{ fontSize: "smaller" }}> {Skills.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
