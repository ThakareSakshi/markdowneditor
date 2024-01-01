import React from 'react'

const Notes = (props) => {
    console.log(props.textcontent)
  return (
    <div>
    
     {props.textcontent}
    </div>
  )
}

export default Notes
