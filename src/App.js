import { useState } from 'react';
import './App.css';
import React from 'react'

import ReactMarkdown from 'react-markdown'
import Sidebar from './components/Sidebar';

function App() {

  const [content,setContent]=useState(`#enter text here`);

  const handleContent=(text)=>{
    setContent(text);
  }

  return (
    <div className="App">
      <Sidebar content={content} handleContent={handleContent}></Sidebar>
      <ReactMarkdown>
     {content}
  </ReactMarkdown>
  <textarea value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
    </div>
  );
}

export default App;
