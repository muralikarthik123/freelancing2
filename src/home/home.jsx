import React,{useState} from 'react'
import './home.css'

import Tab2 from '../student/student.jsx'
import Tab1 from '../coordinator/c1.jsx'
import Tab0 from '../guide/guide.jsx'
import {Link} from "react-router-dom"
export default function Tabs() {
  const [data,setData]=useState('manage')
  const open=(e)=>{
      setData(e)
  }
  return (
    <div className='tabs'>
      <div className='left'>
        <button className='bt2' onClick={()=>open('manage')}>Guide</button>
        <br/>
        <button className='bt2' onClick={()=>open('community')}>Coordinator</button>
        <br/>
        <button className='bt2' onClick={()=>open('cources')}>Student</button>
        <br/>
        <Link to='/'><button  className='logout' >logout</button></Link>
        <br/>
        <p></p>
      </div>

    {/*opening tabs*/}
    {/*cource*/}
    {data==='manage' &&(
        <div className='right'>
          <Tab0/>
        </div>
      )}
      {/*community*/}
      {data==='community' &&(
        <div className='right'>
          <Tab1/>
        </div>
      )}

      {/*cource*/}
      {data==='cources' &&(
        <div className='right'>
          <Tab2/>
        </div>
      )}
      
    </div>
  )
}
