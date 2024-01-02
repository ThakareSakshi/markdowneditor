import React from 'react'

const Header = (props) => {


    const handleHeadingEvent=()=>{
        const editedtext="# "+props.content;
        props.handleEvents(editedtext)
    }

    const handleBoldEvent=()=>{
        const editedtext="**"+props.content+"**";
        props.handleEvents(editedtext)
        
    }
    const handleItalicEvent=()=>{
        const editedtext="*"+props.content+"*";
        props.handleEvents(editedtext)
    }
    const handleLinkEvent=()=>{
        const editedtext=props.content+"[](url)";
        props.handleEvents(editedtext)
    }
    const handleQuoteEvent=()=>{
        const editedtext="> "+props.content;
        props.handleEvents(editedtext)
    }
    const handleListEvent=()=>{
        const editedtext="1. "+props.content;
        props.handleEvents(editedtext)
    }

    const handleImagesEvent=()=>{
        const editedtext="![]("+props.content+")";
        props.handleEvents(editedtext)
    }
    const handleCodeEvent=()=>{
        const editedtext="`"+props.content+"`";
        props.handleEvents(editedtext)
    }
  return (
    <div className='buttons'>

     <p>write</p>
      {/* <button onClick={props.DisplayEditor}>preview</button> */}
      <span onClick={handleHeadingEvent}><i class="fa-solid fa-heading"></i></span>
      <span onClick={handleBoldEvent}><i class="fa-solid fa-bold"></i></span>
      <span onClick={handleItalicEvent}><i class="fa-solid fa-italic"></i></span>
      <span onClick={handleLinkEvent}><i class="fa-solid fa-link"></i></span>
      <span onClick={handleQuoteEvent}><i class="fa-solid fa-quote-left"></i></span>
      <span onClick={handleCodeEvent}><i class="fa-solid fa-code"></i></span>
      <span onClick={handleImagesEvent}><i class="fa-solid fa-image"></i></span>
      <span onClick={handleListEvent}><i class="fa-solid fa-list-ul"></i></span>
    
    </div>
  )
}

export default Header
