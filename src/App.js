import React, { useState } from 'react';
import './App.css';
<<<<<<< HEAD
import {useState} from 'react';
import {Link} from 'react-router-dom';

function App() {

  const [text,setText] = useState("");

  const[lines,setlines] = useState(["App chatroom"]);

  const onTextChange = (event) => {setText(event.target.value);};

  const Onsend = (event) => {
    setlines(lines => [...lines, text]);
    setText("")
  }
=======
import {Link} from "react-router-dom";

function App() {

const [text,setText] = useState("");

const [lines, setLines] = useState(["Tar : Hello guys!"]);



const onTextChange = (event) => {
    setText(event.target.value);
};

const onSend = () => {
  setLines(line => [...lines,"Me : " + text]);
    setText("")
}

    
>>>>>>> 0f650f1ab1e99e48f09e54b3e2805e1f27b83e86

  return (
    <div className="App col-12">
      <div className="App-header">
<<<<<<< HEAD
      <Link to="/friend-list" className="my-button">
                <button>
                    Go Friend-list
                </button>
            </Link>
      </div>
      <div className="App-chatroom">
        {
          lines.map(x => {
            return<div className="App-chatroom-text">
          {x}
          </div>
        })
      }
       
        <div className="App-chatroom-text">
        <Link to="/support-list" className="my-button">
                <button>
                    Go support-list
                </button>
            </Link>
          {text}
        </div>
        <div className="App-chatroom-text">
          
        </div>
        <div className="App-chatroom-text">
          
        </div>
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input"value={text} onChange={onTextChange}/>
        <div className="App-textbox-send"onClick={Onsend}>Send!</div>
=======
          <div className="profile-read-ju-on"></div>
          <div className="RoomName">
              <h1>Room Ju-on</h1>
              <h6>RID 123456</h6>
          </div>
          <Link to="/Profile_Tar">
          <div className="profile-read-tar"></div>
          </Link>
          <div className="profile-read-pruek"></div>
          <div className="profile-read-phai"></div>
          <div className="Chat-header"></div>
          </div>
      <div className="App-chatroom">
        {
          lines.map(x=>{
          return <div className="App-chatroom-text">
              {x}
          </div>
          })
        }

      </div>
      <div className="App-textbox">
          <Link to="/LobbySetting">
              <div className="App-Botton col-1">
                  <img src="botton.png"/>
              </div>

          </Link>
        <input type="text" placeholder="Type Ready to Start!" className="App-textbox-input col-9" value = {text} onChange={onTextChange}/>
        <div className="App-textbox-send col-2" onClick={onSend}>Send!</div>
            
>>>>>>> 0f650f1ab1e99e48f09e54b3e2805e1f27b83e86
      </div>
    </div>
  );
}

export default App;
