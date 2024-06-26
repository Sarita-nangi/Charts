import React, { useState } from 'react';
import ChartComponent from './components/ChartComponent';
import TimeframeSelector from './components/TimeframeSelector';

const App: React.FC = () => {
  const [timeframe, setTimeframe] = useState('daily');

  const handleSelectTimeframe = (selectedTimeframe: string) => {
    setTimeframe(selectedTimeframe);
    // Handle timeframe logic here
  };

  return (
    <div className="App">
      <TimeframeSelector onSelectTimeframe={handleSelectTimeframe} />
      <ChartComponent />
    </div>
  );
};

export default App;

