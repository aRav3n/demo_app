function generateTrackPointObject(militaryTime, tempC = null) {
  const object = {};
  const voltage = 2.8437;

  object.voltage = voltage;

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

  return object;
}

function generateTrackerInfo(
  trackerName,
  startTimeMilitary = "12:00",
  durationMinutes = 60,
  intervalMinutes = 1
) {
  const trackerObject = {};
  const numberOfPoints = durationMinutes / intervalMinutes;
  trackerObject.name = trackerName;
  const array = [];

  startTimeMilitary.toString();
  if (startTimeMilitary.length < 5) {
    const newTime = "0" + startTimeMilitary;
    startTimeMilitary = newTime;
  }
  const hour = parseInt(startTimeMilitary[0] + startTimeMilitary[1], 10);
  const minute = parseInt(startTimeMilitary[3] + startTimeMilitary[4], 10);

  for (let i = 0; i < numberOfPoints; i++) {
    let thisMinute = minute + i * intervalMinutes;
    const additionalHours = Math.floor(thisMinute / 60);
    const thisHour = hour + additionalHours;
    let newMinute = thisMinute % 60;
    thisMinute = newMinute;
    const thisTime = `${thisHour}:${thisMinute}`;

    const object = generateTrackPointObject(thisTime);

    array.push(object);
  }

  trackerObject.points = array;

  return trackerObject;
}

function makeTrackerInfo() {
  const trackerArray = [];
  const trackerA = generateTrackerInfo("TT_WG02");
  const trackerB = generateTrackerInfo("TT_WG03");
  const trackerC = generateTrackerInfo("TT_WG04");

  trackerArray.push(trackerA);
  trackerArray.push(trackerB);
  trackerArray.push(trackerC);

  return trackerArray;
}

export default function getJsonTrackerData() {
  const trackerArray = makeTrackerInfo();
  
  const jsonData = JSON.stringify(trackerArray);

  return jsonData;
}