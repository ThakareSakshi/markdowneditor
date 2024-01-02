import { useState } from 'react';
import './App.css';
import React from 'react'

import ReactMarkdown from 'react-markdown'
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {

  const [content,setContent]=useState(`# enter text here`);

  const handleContent=(text)=>{
    setContent(text);
  }

 

  return (
    <div className="App">
      <Sidebar content={content} handleContent={handleContent}></Sidebar>
      <div className='main-body'>
         
          <div className='editor'>
              <Header ></Header>
              <textarea value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
              
          </div>

          <div className='preview'>
                <h2>preview</h2>
                <ReactMarkdown>
                    {content}
                </ReactMarkdown>
          </div>
          
      </div>
    </div>
  );
}

export default App;
