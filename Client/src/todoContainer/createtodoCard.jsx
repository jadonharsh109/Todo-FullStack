import React, {useState} from 'react'

import axios from 'axios'

const CreateToDoCard = (props) => {
    const [message, setMessage] = useState('');
    const [handleSubmit, sethandleSubmit] = useState("reload")

    const handleChange = event => {
        setMessage(event.target.value);
    };

    const createTask = () => {
        if(message === ""){
            console.log("message is empty")
        }else{
            axios
                .post('/api/add',{
                        "taskname" : message    
                })
                .then((res) => {
                    console.log(res.data.data.newTask._id)
                    sethandleSubmit(res.data.data.newTask._id)
                    props.onSubmit(handleSubmit)
                    
                } )
            
        }
    }
    

  return (
    <div className='CreateCardDiv'>
        <span className='titleCard'>Create Task</span>
        <input className='createTaskinput' onChange={handleChange} value={message} required type='text'placeholder='Task Name...'/>
        <textarea style={{resize : "none", width : "80%"}} className='createTaskinputDes' onChange={handleChange} value={message} required type='text'placeholder='Task Description...'/>
        <button onClick={createTask} className='createTaskbutton'>Add Task</button>
    </div>
  )
}

export default CreateToDoCard