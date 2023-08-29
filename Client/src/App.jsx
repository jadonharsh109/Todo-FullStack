import React, { useState, useEffect } from 'react';
import './App.css';
import TodoCards from './todoContainer/todoCards';
import CreatetodoCard from './todoContainer/createtodoCard';
import axios from 'axios';
import 'animate.css';

function App() {
  const [collection, setCollection] = useState([]);
  const [idget, setidget] = useState("")
  async function fetchData() {
    try {
      const response = await axios.get('/api/all');
      setCollection(response.data.data.tasks);
      // console.log("fetchData ", response.data.data.tasks);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [idget]);

  const handleSubmit = (data) => {
    setidget(data)
    console.log(data)
  }

  const displayToDo = collection.map((item, pos) => {
    if(item.taskStatus === "todo"){
      return <TodoCards id={pos} title={item} />;
    }
  })
  const displaydoing = collection.map((item, pos) => {
    if(item.taskStatus === "doing"){
      return <TodoCards id={pos} title={item} />;
    }
  })
  const displaydone = collection.map((item, pos) => {
    if(item.taskStatus === "done"){
      return <TodoCards id={pos} title={item} />;
    }
  })

  const [showCreateCard, setShowCreateCard] = useState(false);

  const createCard = () => {
    if(!showCreateCard){
      return setShowCreateCard(!showCreateCard)
    }else{
      return setShowCreateCard(false)
    }
  }

  const asdf = () => {
    if(showCreateCard){
      return <CreatetodoCard onSubmit={handleSubmit}/>;
    }else{
    }
  }

  useEffect(() => {
    asdf();
  }, [showCreateCard])



  const DragOver = (e) => {
    e.preventDefault();
    console.warn("Dragged to Doing");
    e.target.style.borderStyle = "dotted";
  };
  const onDragLeave = (e) => {
    e.target.style.borderStyle = "none";
    console.log("onDragLeave")
  }
  const onDragEnd = () => {
    console.log("dropped")
  }
  return (
    <div className="App">
      <div className="todoContainer">
        <div onDragOver={DragOver} onDragLeave={onDragLeave} onDragEnd={onDragEnd} className='cards'>
        <div style={{ backgroundColor: "red" }} className="titleContainer">
          <span className="title">To Do</span>
        </div>
            {displayToDo}
        </div>
        <div onDragOver={DragOver} onDragLeave={onDragLeave} onDragEnd={onDragEnd} className='cards'>
        <div style={{ backgroundColor: "orange" }} className="titleContainer">

            <span className="title">Doing</span>
          </div>
            {displaydoing}
        </div>
        <div onDragOver={DragOver} onDragLeave={onDragLeave} onDragEnd={onDragEnd} className='cards'>
        <div style={{ backgroundColor: "grey" }} className="titleContainer">

            <span className="title">Done</span>
          </div>
            {displaydone}
        </div>
      
        <div className='addIcon' onClick={createCard}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px" fill="#4caf50">
            <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/>
            <path fill="#fff" d="M21,14h6v20h-6V14z"/>
            <path fill="#fff" d="M14,21h20v6H14V21z"/>
          </svg>
        </div>
      {asdf()}
      {/* <CreatetodoCard /> */}
      </div>
    </div>
  );
}

export default App;
