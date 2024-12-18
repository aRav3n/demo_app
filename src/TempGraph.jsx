import * as d3 from "d3";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function Graph({ tracker }) {
  const data = tracker.points;
  const dummyGraphText = tracker.name + " graph will go here";

  return (
    <div className="graphContainer">
      <img src="" alt={dummyGraphText} />
    </div>
  );
}

Graph.propTypes = {
  tracker: PropTypes.object.isRequired,
};
