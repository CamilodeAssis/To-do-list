import { useEffect, useState } from "react"

import { Tasks } from './assets/components/Tasks'
import { AddTask } from './assets/components/AddTask'
function App() {

  return (
    //main container
    <div className="bg-bgcolor h-screen">

      {/*content area */}
      <div>
        <header className="m-auto max-w-4xl p-2.5">
          <h1 className=" m-0 p-0 text-textcolor font-bold text-center border-b border-gray-200 pb-5 text-3xl">
            To-do list

          </h1>
            
            <AddTask/>
            <Tasks />
            
        </header>
      </div>
    </div>
  )
}
export default App
