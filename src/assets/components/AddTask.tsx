import { useEffect, useState } from "react"
import { api } from '../data/base'

export const AddTask = () => {
    const [name, setName] = useState('');
    

    useEffect(() =>{

    },[name]);

    const handleAddTaskButton = async () => {
        if (name) {
        let data = await api.postData(name);
        } else {
            alert('please fill the field with a task');
        }
        setName('');
    }

    return (
        <div className="flex justify-center items-center mb-4">
            <input
                className="flex  mr-2 mt-2 w-full rounded h-8 bg-gray-300  text-gray-100 focus:outline-none hover:border-b-2 hover:border-pink-500 focus:border-b-2 focus:border-pink-500"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                className="w-28 flex justify-center items-center mt-2 bg-pink-500 text-white rounded h-8"
                onClick={handleAddTaskButton}
            >
                Add Task</button>
        </div>
    );
}