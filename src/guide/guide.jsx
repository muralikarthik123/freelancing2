import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import './guide.css'
export default function ChartsOverviewDemo() {
  return (
    <div className='guide'>
      <BarChart
      series={[
        { data: [60,30] },
      ]}
      height={500}
      xAxis={[{ data: ['Batch 1', 'Batch2'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
    <p style={{textAlign:'center'}}>Batch Progress</p>
    <h1>Guide Remarks</h1>
    <form>
    <p>Batch1:</p>
    <input className='box1'type='text' placeholder='Enter the remarks'/>
    <br/>
    <p>Batch2:</p>
    <input  className='box1' type='text' placeholder='Enter the remarks'/>
    <br/>
    <br/>
    <button className='bt1'>Submit</button>
    </form>
    <br/>
    </div>
  );
}
