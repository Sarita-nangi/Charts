import React from 'react';

interface TimeframeSelectorProps {
  onSelectTimeframe: (timeframe: string) => void;
}

const TimeframeSelector: React.FC<TimeframeSelectorProps> = ({ onSelectTimeframe }) => {
  return (
    <div>
      <button onClick={() => onSelectTimeframe('daily')}>Daily</button>
      <button onClick={() => onSelectTimeframe('weekly')}>Weekly</button>
      <button onClick={() => onSelectTimeframe('monthly')}>Monthly</button>
    </div>
  );
};

export default TimeframeSelector;
export {}
