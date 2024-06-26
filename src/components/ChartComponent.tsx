import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import html2canvas from 'html2canvas';

interface ChartDataPoint {
  timestamp: string;
  value: number;
}

const ChartComponent: React.FC = () => {
  const [data, setData] = useState<ChartDataPoint[]>([]);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/data/chartData.json')
      .then(response => response.json())
      .then(data => setData(data as ChartDataPoint[]))
      .catch(error => console.error('Error fetching chart data:', error));
  }, []);

  const handleZoom = (startIndex: number, endIndex: number) => {
    setData(data.slice(startIndex, endIndex));
  };

  const handleClick = (dataPoint: ChartDataPoint) => {
    alert(`Timestamp: ${dataPoint.timestamp}, Value: ${dataPoint.value}`);
  };

  const handleExport = () => {
    if (chartRef.current) {
      html2canvas(chartRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'chart.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  };

  return (
    <div>
      <div ref={chartRef}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            onClick={(e) => {
              if (e && e.activePayload) {
                handleClick(e.activePayload[0].payload);
              }
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <button onClick={handleExport}>Export as PNG</button>
    </div>
  );
};

export default ChartComponent;

export {}; // Ensure the file is treated as a module





