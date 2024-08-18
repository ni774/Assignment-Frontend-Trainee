import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NewWidgets({ openAddWidget, setOpenAddWidget, wholeData, setWholeData }) {
    const [newWidgets, setNewWidget] = useState(0);

    const tempData = {
        labels: ["black", "Blue", "Yellow"],
        chartType: "bar",
        datasets: [
            {
                label: "My First Chart",
                data: [300, 50, 100],
                backgroundColor: [
                    "rgb(0, 0, 0)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                ],
                hoverOffset: 4,
            },
        ],
    };

    const notify = () => toast.success("New Widget created");
    const handleSave = () => {
        setWholeData(prevData => {
            const updatedData = [...prevData]; // Create a shallow copy of the array
            updatedData[newWidgets] = [...updatedData[newWidgets], tempData]; // Append the new data immutably
            return updatedData;
        });
        notify();
    };
    // console.log("whole data saved", wholeData);

    return (
        <div className='w-[350px] h-[650px] rounded-md border-2 mt-[18px] absolute right-0 bg-white'>
            <div className='flex justify-between p-[5px] bg-blue-700 rounded-tl-md text-white'>
                <span>Add Widget</span>
                <span 
                    onClick={() => setOpenAddWidget(!openAddWidget)} 
                    className='size-[22px] bg-white text-red-600 text-center cursor-pointer'> X 
                </span>
            </div>
            <div className='h-[85%]'>
                <ul className='flex justify-around m-1'>
                    <li onClick={() => setNewWidget(0)} className='cursor-default hover:underline underline-offset-4 active:text-gray-500'>CSPM</li>
                    <li onClick={() => setNewWidget(1)} className='cursor-default hover:underline underline-offset-4 active:text-gray-500'>CWPM</li>
                    <li onClick={() => setNewWidget(2)} className='cursor-default hover:underline underline-offset-4 active:text-gray-500'>Registry Scan</li>
                </ul>
                <hr />
                <input type="checkbox" id="widget1" name="widget1" value="widget1" />
                <label htmlFor="widget1"> widget1 </label><br />
                <input type="checkbox" id="widget2" name="widget2" value="widget2" />
                <label htmlFor="widget2"> widget2 </label><br />
            </div>

            <div>
                <button 
                    onClick={handleSave} 
                    className='h-[35px] w-[70px] text-center border-2 rounded-md ml-[5px] relative top-0 border-blue-800 active:bg-slate-300'>
                    Save
                </button>
                <ToastContainer />
            </div>
        </div>
    );
}
