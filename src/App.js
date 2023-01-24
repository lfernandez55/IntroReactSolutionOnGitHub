import "./styles.css";
import Car from "./Car";
import { useState } from "react";

const carsArray = [
  { id: "0", type: "Chevy", model: "Pinto", color: "orange" },
  { id: "1", type: "Ford", model: "Mustang", color: "red" },
  { id: "2", type: "Renault", model: "Twingo", color: "yellow" }
];

export default function App() {
  const [cars, setCars] = useState(carsArray);
  const [showID, setShowID] = useState(false);
  const deleteCar = (carIndex) => {
    // the commented out code is an alternative way
    // let tempCars = [...cars];
    // tempCars.splice(carIndex, 1);
    // setCars(tempCars);
    setCars(cars.filter((car, i) => i !== carIndex));
  };
  const addCar = () => {
    // the commented out code is an alternative way to do it
    // let tempCars = [...cars];
    // tempCars.push({
    //   id: tempCars.length,
    //   type: "Stub",
    //   model: "Outback",
    //   color: "green"
    // });
    // setCars(tempCars);
    setCars([
      ...cars,
      { id: cars.length, type: "Stub", model: "Outback", color: "green" }
    ]);
  };
  const toggleID = () => {
    if (showID) {
      console.log("set true");
      setShowID(false);
    } else {
      console.log("set false");
      setShowID(true);
    }
  };
  return (
    <div className="App">
      <h1>Working with array, useState, props, key.</h1>
      <button onClick={toggleID}>Show/Hide Car Vehicle ID</button>
      <button onClick={addCar}>Add Subaru</button>
      {cars.map((car, index) => (
        <Car
          key={car.id}
          deleteMe={deleteCar}
          vehicle={car}
          index={index}
          showID={showID}
        ></Car>
      ))}
    </div>
  );
}
