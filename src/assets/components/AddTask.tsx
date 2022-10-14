import { useEffect, useState } from "react"
import { api } from '../data/base'

export const AddTask = () => {
    const [name, setName] = useState('');
    const [done, setDone] = useState(false);

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
        <div className="flex justify-center items-center ">
            <input
                className="flex  mr-2 mt-2 w-full rounded h-6"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                className="w-28 flex justify-center items-center mt-2 bg-blue-500 rounded h-6"
                onClick={handleAddTaskButton}
            >
                Add Task</button>
        </div>
    );
}