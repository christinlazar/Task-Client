import React from 'react'

function Dashboard() {
  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-2">
            <h2 className="text-lg font-bold">Dashboard:</h2>
            <a
              href="/add-task"
              className="w-full md:w-44 h-10 border border-green-400 rounded-md text-green-500 text-center flex items-center justify-center"
            >
              Add Task
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-400 text-sm md:text-base">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 px-2 md:px-4 py-2">Task Name</th>
                  <th className="border border-gray-400 px-2 md:px-4 py-2">Task  Detials</th>
                  <th className="border border-gray-400 px-2 md:px-4 py-2">Edit Task</th>
                  <th className="border border-gray-400 px-2 md:px-4 py-2">Complete Task</th>
                  <th className="border border-gray-400 px-2 md:px-4 py-2">Delete Task</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-2 md:px-4 py-2">{'userData.name'}</td>
                  <td className="border border-gray-400 px-2 md:px-4 py-2 text-center">{'userData.sickLeave'}</td>
                  <td className="border border-gray-400 px-2 md:px-4 py-2 text-center">{'userData.casualLeave'}</td>
                  <td className="border border-gray-400 px-2 md:px-4 py-2 text-center">{'userData.earnedLeave'}</td>
                  <td className="border border-gray-400 px-2 md:px-4 py-2 text-center">{'userData.totalLeaves'}</td>
              
               
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      
      </div>
  )
}

export default Dashboard