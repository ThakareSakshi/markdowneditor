import React from 'react'
import { useState } from 'react'
import Notes from './Notes'

const Sidebar = ({content,handleContent}) => {
    const [userNotes,setuserNotes]=useState(localStorage.getItem("notes")?JSON.parse(localStorage.getItem("notes")):[])
    
    const addNewNote=()=>{
        setuserNotes([...userNotes,content])
       localStorage.setItem("notes",JSON.stringify(userNotes))
    }

  return (
    <div className='sidebar'>
      <h1>notes <button onClick={addNewNote}>+</button></h1>
      {
      userNotes.map((note,index)=>{
       { console.log(note)}
        return <Notes  key={index} textcontent={note}></Notes>
      })
      }
    </div>
  )
}

export default Sidebar
