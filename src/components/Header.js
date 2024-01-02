import React from 'react'

const Header = (props) => {


    const handleEvent=()=>{
        console.log("eventclicked")
    }
  return (
    <div className='buttons'>

     <p>write</p>
      {/* <button onClick={props.DisplayEditor}>preview</button> */}
      <span onClick={handleEvent}><i class="fa-solid fa-heading"></i></span>
      <span onClick={handleEvent}><i class="fa-solid fa-bold"></i></span>
      <span onClick={handleEvent}><i class="fa-solid fa-italic"></i></span>
      <span onClick={handleEvent}><i class="fa-solid fa-link"></i></span>
      <span onClick={handleEvent}><i class="fa-solid fa-quote-left"></i></span>
      <span onClick={handleEvent}><i class="fa-solid fa-code"></i></span>
      <span onClick={handleEvent}><i class="fa-solid fa-image"></i></span>
      <span onClick={handleEvent}><i class="fa-solid fa-list-ul"></i></span>
    
    </div>
  )
}

export default Header
