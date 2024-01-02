import React from 'react'

const Notes = (props) => {
    console.log(props.textcontent)
    const handleClickEvent=(e)=>{
      let text=e.target.value;
      //  props.clickevent(text);
    }
  return (
    <div className='notes' onClick={(e)=>{handleClickEvent(e)}}>
    
     {props.textcontent}
    </div>
  )
}

export default Notes
