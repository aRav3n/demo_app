import { useState } from "react";
import "./App.css";
import dummyData from "./dummyData";

function App() {
  const trackerArray = JSON.parse(dummyData());
  const [selectedTracker, setSelectedTracker] = useState(trackerArray[0]);

  const handleTrackerChange = (e) => {
    for (let i = 0; i < trackerArray.length; i++) {
      if (e.target.value === trackerArray[i].name) {
        setSelectedTracker(trackerArray[i]);
        console.log(trackerArray[i]);
        return;
      }
    }
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
    </>
  );
}

export default App;
