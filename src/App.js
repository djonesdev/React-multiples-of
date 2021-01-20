import React, { useState, useEffect } from "react";

import "./App.scss";
import Card from "./Components/Card/Card";
import { getMultiplesFromList } from "./Utils/utils";

function App() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [fullNumberList, setFullNumberList] = useState(
    Array.from(Array(144).keys())
  );
  const [listOfMutiples, setListOfMultiples] = useState([]);

  useEffect(() => {
    if (selectedNumber) {
      setListOfMultiples(getMultiplesFromList(fullNumberList, selectedNumber));
    }
  }, [selectedNumber, fullNumberList]);

  const isMultipleOf = (number) =>
    listOfMutiples.includes(number)
      ? "c-homepage__touchable-card is-multiple"
      : "c-homepage__touchable-card";
  return (
    <div className="c-homepage">
      <div className="c-homepage__intro-container">
        <p>
          Select a number below to see which numbers are multiples of your
          selected number!
        </p>
        <div className="c-homepage__select-number-list">
          {listOfMutiples.map((number) => (
            <Card>
              <p className="c-homepage__select-number-list--item">{number}</p>
            </Card>
          ))}
        </div>
      </div>
      {fullNumberList.map((number) => (
        <Card
          classNames={isMultipleOf(number + 1)}
          onClick={() => setSelectedNumber(number + 1)}
        >
          <p>{number + 1}</p>
        </Card>
      ))}
    </div>
  );
}

export default App;
