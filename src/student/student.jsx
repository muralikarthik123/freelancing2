import React from 'react'
import './student.css'
export default function student() {
  return (
    <div className='student'>
      <form className='form'>
        <label className='headings'>Abstract</label>
        <br/>
        <input className='textbox' type='text' placeholder='Enter the Abstract' required/>
        <br/>
        <label className='headings'>Title</label>
        <br/>
        <input  className='textbox' type='text' placeholder='Enter the Title of project' required/>
        <br/>
        <label className='headings'>Gmail</label>
        <br/>
        <input className='textbox' type='email' placeholder='Enter the Gmail' required/>
        <br/>
        <label className='headings'>Submit the project PDF</label>
        <br/>
        <input type='file'/>
        <br/>
        <br/>
        <button className='bt1'>Submit</button>
      </form>
        
    </div>
  )
}
