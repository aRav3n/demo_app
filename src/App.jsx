import { useState } from "react";
import "./App.css";
import dummyData from "./dummyData";
import Graph from "./TempGraph";
import Chart from "./TempData";

function App() {
  const trackerArray = JSON.parse(dummyData());
  const [selectedTracker, setSelectedTracker] = useState(trackerArray[0]);
  const [dataPointsDisplayed, setDataPointsDisplayed] = useState(false);
  const [graphDisplayed, setGraphDisplayed] = useState(false);

  const handleTrackerChange = (e) => {
    for (let i = 0; i < trackerArray.length; i++) {
      if (e.target.value === trackerArray[i].name) {
        setSelectedTracker(trackerArray[i]);
        return;
      }
    }
  };

  const handleDataPointDisplayToggle = (e) => {
    const newValue = e.target.checked;
    setDataPointsDisplayed(newValue);
  };

  const handleGraphDisplayToggle = (e) => {
    const newValue = e.target.checked;
    setGraphDisplayed(newValue);
  };

  return (
    <>
      <nav>
        <select onChange={handleTrackerChange} value={selectedTracker.name}>
          <option value="">-- Select a tracker --</option>
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
        <div>
          <div className="toggleContainer">
            <label htmlFor="graphToggle">
              <input
                type="checkbox"
                name="graphToggle"
                id="graphToggle"
                onChange={handleGraphDisplayToggle}
              />
              <div className="toggleSwitch"></div>
              <span>Toggle graph display</span>
            </label>
          </div>
          <div className="toggleContainer">
            <label htmlFor="dataToggle">
              <input
                type="checkbox"
                name="dataToggle"
                id="dataToggle"
                onChange={handleDataPointDisplayToggle}
              />
              <div className="toggleSwitch"></div>
              <span>Toggle data display</span>
            </label>
          </div>
        </div>
        <Graph
          tracker={selectedTracker}
          graphDisplayed={graphDisplayed}
        ></Graph>
        <Chart
          tracker={selectedTracker}
          dataPointsDisplayed={dataPointsDisplayed}
        ></Chart>
      </main>
      <footer>Copyright &copy; Andrew Ryan 2024</footer>
    </>
  );
}

export default App;
