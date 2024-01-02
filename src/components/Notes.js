import React from 'react'

const Notes = (props) => {
    console.log(props.textcontent)
  return (
    <div className='notes'>
    
     {props.textcontent}
    </div>
  )
}

export default Notes
