import React, { useEffect, useState } from "react"
import { ItemType } from '../../types/itemType'
import { api } from '../data/base'


type Props = {
  data: ItemType;
  id: string;
}

export const Tasks = ({ data, id }: Props) => {

  const [done, setDone] = useState(false);
  const [isChecked, setIsChecked] = useState(done);

  const deleData = async () => {
    if (id){
      let data = await api.delData(id);
    }
  }

  return (
    <>
      <div className="flex items-center  justify-center  mb-1 rounded p-2 hover:border-b hover:border-pink-500 bg-gray-300 ">
        <input
          className=" w-6 h-6 mr-1 cursor-pointer"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label style={{color: isChecked === true ? '#e01fba' : '#9d9d9e', opacity: isChecked === true ? '30%' : '100%'}} className="text-gray-100 flex-1 " >
          {data.name}
        </label>
        <button
        onClick={deleData}
        className="w-24 flex justify-center items-center  bg-pink-500 text-white rounded h-8"
        >Remove</button>
      </div>

    </>
  );
}