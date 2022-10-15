import { useEffect, useState } from "react"
import { ItemType } from './types/itemType'
import { api } from './assets/data/base'
import { Tasks } from './assets/components/Tasks'
import { AddTask } from './assets/components/AddTask'



function App() {
  const [listInfo, setListInfo] = useState<ItemType[] | any>();


  useEffect(() => {
    loadList();
  }, [listInfo]);

  const loadList = async () => {
    let data = await api.base();
    setListInfo(data);
  }


  return (
    //main container
    <div className="bg-gray-600 h-screen font-sans">

      {/*content area */}
      <div>
        <header className="m-auto max-w-4xl p-2.5">
          <h1
            className=" m-0 p-0 text-gray-100 font-bold text-center border-b border-gray-100 pb-5 text-3xl"
          >
            To-do list
          </h1>
          <AddTask />
          {listInfo && listInfo.map((data: any) => (
            <Tasks key={data} data={data} id={data.id}/>
          ))}
          
        </header>
      </div>
    </div>
  )
}
export default App
