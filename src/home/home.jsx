import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
  return (
    <div className='barchat'>
      <BarChart
      xAxis={[{ scaleType: 'band', data: ['Hod', 'Coordinator', 'Stundent'] }]}
      series={[{ data: [30, 50, 100] }]}
      width={800}
      height={600}
    />
    </div>
  );
}
