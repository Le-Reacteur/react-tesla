import React, { useState } from "react";
import "./App.css";

// 1. Mettre en page (HTML / CSS)
// 2. Créer les états
// 3. Créer les interactions

function App() {
  const [vehicle, setVehicle] = useState("Grande Autonomie");
  const [color, setColor] = useState("Blanc");

  let total = 0;

  // calculer total
  if (vehicle === "Grande Autonomie") {
    total += 90700;
  } else if (vehicle === "Performance") {
    total += 106700;
  }

  if (color === "Blanc") {
    total += 0;
  } else if (color === "Noir") {
    total += 1000;
  }

  return (
    <div>
      <h1>Tesla Config</h1>
      <h2>Sélectionnez votre vehicule</h2>
      <div
        className={vehicle === "Grande Autonomie" ? "selected" : ""}
        onClick={() => {
          setVehicle("Grande Autonomie");
        }}
      >
        Grande Autonomie - 90700 €
      </div>
      <div
        className={vehicle === "Performance" ? "selected" : ""}
        onClick={() => {
          setVehicle("Performance");
        }}
      >
        Performance - 106 700 €
      </div>
      <h2>Sélectionnez la couleur</h2>
      <div
        className={color === "Blanc" ? "selected" : ""}
        onClick={() => {
          setColor("Blanc");
        }}
      >
        Blanc - 0 €
      </div>
      <div
        className={color === "Noir" ? "selected" : ""}
        onClick={() => {
          setColor("Noir");
        }}
      >
        Noir - 1000 €
      </div>

      <p>Total : {total} €</p>
    </div>
  );
}

export default App;
