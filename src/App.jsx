import { useState } from "react";
import "./App.css";
import dummyData from "./dummyData";

function App() {
  const trackerArray = JSON.parse(dummyData());
  const [selectedTracker, setSelectedTracker] = useState(trackerArray[0]);
  const [dataPointsDisplayed, setDataPointsDisplayed] = useState(false);

  const handleTrackerChange = (e) => {
    for (let i = 0; i < trackerArray.length; i++) {
      if (e.target.value === trackerArray[i].name) {
        setSelectedTracker(trackerArray[i]);
        console.log(trackerArray[i]);
        return;
      }
    }
  };

  const handleDataPointDisplayToggle = (e) => {
    const newValue = !dataPointsDisplayed;
    setDataPointsDisplayed(newValue);
  };

  return (
    <>
      <nav>
        Select a tracker:
        <select onChange={handleTrackerChange} value={selectedTracker.name}>
          {trackerArray.map((tracker) => {
            return (
              <option value={tracker.name} key={tracker.name}>
                {tracker.name}
              </option>
            );
          })}
        </select>
      </nav>
      <main>
        <div><button id="graphToggle" type="button" onClick={handleDataPointDisplayToggle}>Toggle graph display</button></div>
      </main>
    </>
  );
}

export default App;
