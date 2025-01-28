import React,{useState} from 'react'
import './c1.css'
export default function C1() {
    const [data,setData]=useState('unknow')
    const [data1,setData1]=useState('unknow')
    const [data2,setData2]=useState('unknow')
    const [data3,setData3]=useState('unknow')
    const trans =(e)=>{
        setData(e.target.value)
    }
    const submit=()=>{
        setData1(data)
    }
    const trans1=(e)=>{
        setData2(e.target.value)
    }
    const submit1=()=>{
        setData3(data2)
    }


  return (
    <div className='c1'>
      <h1>Work Progress</h1>
      <h3>Batch 1:</h3>
      <input type='text' className='box1' value={data} onChange={trans} placeholder='Progress status'/>
      <br/>
      <br/>
      <button onClick={submit}>Submit</button>
      <p>Status:{data1}</p>
      <h3>Batch 2:</h3>
      <input type='text' className='box1' value={data2} onChange={trans1} placeholder='Progress status'/>
      <br/>
      <br/>
      <button onClick={submit1} >Submit</button>
      <p>Status:{data3}</p>
    </div>
  )
}
