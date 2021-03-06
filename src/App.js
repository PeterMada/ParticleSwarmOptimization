import './App.css';
import { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import { Individual } from './Individual';

const INVIDUALS_IN_POPULATION = 2;
const ITERATION_DURATION = 100; // ms

function App() {
  const [populationSize, setPopulationSize] = useState(10);
  const [populationSizeInput, setPopulationSizeInput] = useState(1);
  const [population, setPoupulation] = useState([]);

  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const [mouseCoordinatesGlobal, setMouseCoordinatesGlobal] = useState({
    x: 0,
    y: 0,
  });

  /*
  useEffect(() => {
    const timer = setInterval(() => {
      setindivudalPosition((prevPosition) => {
        if (
          mouseCoordinates.x - indivudalPosition.x < 10 &&
          mouseCoordinates.x - indivudalPosition.x > 0 &&
          mouseCoordinates.y - indivudalPosition.y > 0 &&
          mouseCoordinates.y - indivudalPosition.y < 10
        ) {
          return true;
        }
        return {
          x:
            mouseCoordinates.x - indivudalPosition.x > 0
              ? indivudalPosition.x + 10
              : indivudalPosition.x - 10,
          y:
            mouseCoordinates.y - indivudalPosition.y > 0
              ? indivudalPosition.y + 10
              : indivudalPosition.y - 10,
        };
      });
    }, ITERATION_DURATION);

    return () => clearInterval(timer);
  });
  */

  const generateRandomPopulation = () => {
    let newPopulation = [];

    for (let i = 0; i < parseInt(populationSize); i++) {
      newPopulation.push({
        x: Math.floor(Math.random() * global.innerWidth),
        y: Math.floor(Math.random() * (global.innerHeight - 50)),
      });
    }

    setPoupulation(newPopulation);
  };

  useEffect(() => {
    generateRandomPopulation();
  }, [populationSize]);

  /*
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseCoordinatesGlobal({
        x: event.screen.x,
        y: event.screen.y,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.addEventListener('mousemove', handleMouseMove);
  }, []);
  */

  const handleMouseMove = (event) => {
    setMouseCoordinates({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };

  const handlePopulationSize = (event) => {
    setPopulationSizeInput(event.target.value);
  };

  const handleGeneratePopulation = () => {
    setPopulationSize(populationSizeInput);
  };

  return (
    <div className='app'>
      <header className='header'>
        Header
        <label htmlFor='populationSize'>Population size</label>
        <input
          min='1'
          max='99'
          step='1'
          type='number'
          id='populationSize'
          value={populationSizeInput}
          onChange={handlePopulationSize}
        />
        <button onClick={handleGeneratePopulation}>
          Generate population
        </button>
      </header>
      <div className='canvas' onMouseDown={handleMouseMove}>
        {population.map((indivudalPosition, i) => {
          return <Individual position={indivudalPosition} key={i} />;
        })}

        <pre>{`Coords: ${mouseCoordinates.x} ${mouseCoordinates.y}`}</pre>
      </div>
    </div>
  );
}

export default App;
