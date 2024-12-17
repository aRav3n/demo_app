const array = [];

function generateTrackPointObject(militaryTime, trackerName, tempC = null) {
  const object = {};
  const voltage = 2.8437;

  object.voltage = voltage;
  object.name = trackerName;

  if (militaryTime.length < 5) {
    const newTime = "0" + militaryTime;
    militaryTime = newTime;
  }
  const date = new Date(`December 16, 2024 ${militaryTime}:00`);
  object.date = date;

  if (!tempC) {
    const newTemp = 18 + Math.random;
    tempC = newTemp;
  }
  object.temperature = tempC;
}
