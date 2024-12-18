import PropTypes from "prop-types";

function getDateString(oldDateString) {
  const newDate = new Date(oldDateString);

  let month = newDate.getMonth() + 1;
  let day = newDate.getDay();
  const year = newDate.getFullYear();

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  const formattedDate = `${month}/${day}/${year}`;

  return formattedDate;
}

function getTimeString(oldDateString) {
  const newDate = new Date(oldDateString);

  let hours = newDate.getUTCHours();
  let minutes = newDate.getUTCMinutes();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const formattedTime = `${hours}:${minutes}`;

  return formattedTime;
}

export default function DataDisplay({ tracker, chartDisplayed }) {
  const data = tracker.points;
  if (chartDisplayed) {
    return (
      <div className="chart">
        <div>
          <div>Date</div>
          <div>Time</div>
          <div>Temp</div>
          <div>Voltage</div>
        </div>
        {data.map((point) => {
          const date = getDateString(point.date);
          const time = getTimeString(point.date);
          return (
            <div key={point.date}>
              <div>{date}</div>
              <div>{time}</div>
              <div>{point.temperature}</div>
              <div>{point.voltage}</div>
            </div>
          );
        })}
      </div>
    );
  }
  return;
}

DataDisplay.propTypes = {
  tracker: PropTypes.object.isRequired,
  chartDisplayed: PropTypes.bool.isRequired,
};
