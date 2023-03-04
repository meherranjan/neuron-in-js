import "./styles.css";
import { useState, useRef } from "react";
import { createContainer, VictoryChart, VictoryLine } from "victory";
import { Button } from "@cred/neopop-web/lib/components";
import theme from "./theme.js";
import { round } from "lodash";

const Zoom = createContainer("zoom", "cursor");

export default function App() {
  const [lineOne, setLineOne] = useState(0);
  const [lineTwo, setLineTwo] = useState(0);
  const [actual, showActual] = useState(false);

  function predictor(data) {
    let guess = Math.random();

    let input = data[0];
    let answer = data[1];
    let initialPrediction = guess * input;
    setLineOne(guess);

    let error = answer - initialPrediction;
    let delta = error / input;
    let finalPrediction = guess + delta;
    setLineTwo(finalPrediction);
  }

  return (
    <div className="App">
      <div className="container">
        <VictoryChart
          domain={[-50, 50]}
          theme={theme}
          containerComponent={<Zoom cursorLabel={({ datum }) => `${round(datum.x, 2)}, ${round(datum.y, 2)}`} theme={theme} />}
        >
          <VictoryLine y={(data) => (data.x < 0 ? null : data.x * lineOne)} style={{ data: { stroke: "red", strokeWidth: 2 } }} />
          <VictoryLine y={(data) => data.x * lineTwo} style={{ data: { stroke: "blue", strokeWidth: 4 } }} />
          {actual && <VictoryLine y={(data) => data.x * 2.204} style={{ data: { stroke: "white", strokeWidth: 1 } }} />}
        </VictoryChart>
      </div>
      <div className="controls">
        <Button variant="primary" kind="elevated" size="big" colorMode="dark" onClick={() => predictor([10, 22.04])}>
          Render Neuron's Prediction
        </Button>
        <Button variant="secondary" kind="elevated" size="big" colorMode="dark" onClick={() => showActual(!actual)}>
          Toggle Kg-Lbs
        </Button>
      </div>
    </div>
  );
}
