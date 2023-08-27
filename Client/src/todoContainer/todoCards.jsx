import React, {useState} from 'react'

const TodoCards = (props) => {

  const [Checked, setChecked] = useState()
  
  function handleChange(e) {
    setChecked(e.target.checked);
    console.log(Checked)
 }

  return (
    <div className='cardDiv'>
      <input className='checkBox' onChange={handleChange} value="test" type='checkbox' />
      <h5>{props.title.taskname}</h5>
      <img width="25" height="25" className='editIcon' src="https://img.icons8.com/fluency/48/create-new.png" alt="create-new"/>
    </div>
  )
}

export default TodoCards