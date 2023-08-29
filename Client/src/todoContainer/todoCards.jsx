import React from 'react';
const TodoCards = (props) => {

  const handleDrag = () => {
    // console.log("Dragging...")
  }
  const handleDragEnd = () => {
    // console.log("DragEnd...")
  }
  

  return (
    <div draggable onDrag={handleDrag}  onDragEnd={handleDragEnd} className="cardDiv">
      <img width="25" height="25"className='dragIcon' src="https://img.icons8.com/external-outline-berkahicon/64/external-drag-mix-ui-design-outline-berkahicon.png" alt="external-drag-mix-ui-design-outline-berkahicon"/>
      <h5>{props.title.taskname}</h5>
      <img width="25" height="25" className='editIcon' src="https://img.icons8.com/fluency/48/create-new.png" alt="create-new"/>
    </div>
  );
};

export default TodoCards;
