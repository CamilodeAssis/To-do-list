import React, { useEffect, useState } from "react"
import { ItemType } from '../../types/itemType'
import { api } from '../data/base'

export const Tasks = () => {
  const [listInfo, setListInfo] = useState<ItemType[] | any>();


  useEffect(() => {
    loadList();
  }, [listInfo]);

  const loadList = async () => {
    let data = await api.base();
    setListInfo(data);
  }

  return (
    <>

      {listInfo && listInfo.map((data: any) => (
        <div className="flex items-center bg-blue-500 my-1 rounded p-2">
          <input
            className=" w-6 h-6 mr-1 "
            type="checkbox"
            name=""
            id="" 

          />
          <label
          className="text-gray-100"
           key={data.id}
           >
            {data.name}</label>
        </div>
      ))}
    </>
  );
}