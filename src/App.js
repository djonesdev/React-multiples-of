import React, { useState, useEffect } from "react";

import "./App.css";
import Card from "./Components/Card/Card";
import { getMultiplesFromList } from "./Utils/utils";

function App() {
  const [selectedNumber, setSelectedNumber] = useState()
  const [fullNumberList, setFullNumberList] = useState(Array.from(Array(143).keys()))
  const [listOfMutiples, setListOfMultiples] = useState([])

  useEffect(() => {
    setListOfMultiples(getMultiplesFromList(fullNumberList, selectedNumber))
  }, [selectedNumber, fullNumberList])

  console.log(listOfMutiples, 'List of multiples')
  return (
    <div className="App">
      {fullNumberList.map((number, index) => (
        <Card classNames={'c-app__touchable-card'} onClick={() => setSelectedNumber(index + 1)}>
          <p>{index + 1}</p>
        </Card>
      ))}
    </div>
  );
}

export default App;
