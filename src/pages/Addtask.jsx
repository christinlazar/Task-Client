import React, { useState } from 'react'
import { toast } from 'sonner'
import { addtask } from './Api/userApi'

function Addtask() {
    const [task,setTask] =useState('')
    const [description,setDescription] = useState('')

    const submitTask = async (e)=>{
        e.preventDefault()
        try {
            const taskData = {
                task,
                description
            }
            const response = await addtask(taskData)
        } catch (error) {
            toast.error("Somethin went wrong")
        }

    }
  return (
    <form onSubmit={submitTask} className="mt-20 w-full max-w-lg mx-auto px-4 md:px-0">
    <div className="card font-montserrat text-sm mt-12 shadow-2xl bg-white p-6 rounded-lg">
      <div className="chat-header text-md font-semibold mb-4 text-cyan-900">Add-Task</div>

      <div className="flex flex-col mb-4">
        <label className="p-2 text-xs text-cyan-900 text-start" htmlFor="leave-type">Task Name</label>
        <input
          type="text"
          value={task}
          onChange={(e)=>setTask(e.target.value)}
          className="focus:outline-none border text-xs p-2 h-10 rounded-md placeholder:text-xs"
          placeholder="task name"
        />
      </div>


      <div className="flex flex-col mb-4">
        <label className="p-2 text-xs text-cyan-900 text-start" htmlFor="leave-type">Task Description</label>
        <input
          type="text"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          className="focus:outline-none border text-xs p-2 h-10 rounded-md placeholder:text-xs"
          placeholder="task description"
        />
      </div>

 

      <div className="flex flex-col sm:flex-row justify-around space-y-2 sm:space-y-0">
        <button
          type='submit'
          className="send-button bg-gradient-to-tr from-black to-cyan-900 hover:to-cyan-700 text-white py-2 px-4 rounded-md transition duration-500"
        >
          Save
        </button>
      </div>
    </div>
  </form>
  )
}

export default Addtask