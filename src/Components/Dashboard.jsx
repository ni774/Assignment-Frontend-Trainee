import React, { useState } from "react";
import AddWidgetButton from "./AddWidgetButton";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Widgets from "./Widgets";
import NewWidgets from "./NewWidgets";
import data from "../data";

function Dashboard({searchKeywords}) {
  const [openAddWidget, setOpenAddWidget] = useState(false);
  const [wholeData, setWholeData] = useState(data);
  return (
    <div className="min-h-screen bg-sky-200 p-[10px]">
        <div className="flex justify-between">
            <span>CNAPP Dashboard</span>
            <div className="">
                <span onClick={()=>setOpenAddWidget(!openAddWidget)} className="p-1 ml-4 mr-4">
                  <AddWidgetButton />
                </span>
                <span onClick={()=>window.location.reload()} className="mr-4"><CachedOutlinedIcon /></span>
                <MoreVertOutlinedIcon />
                <select id="dayValue" name="dayValue" className="border border-black mr-4" onChange={()=>window.location.reload()}>
                  <option value="today">today</option>
                  <option value="yesterday">yesterday</option>
                  <option value="two">previous 2 day</option>
                  <option value="three">previous 3 day</option>
                </select>
            </div>
        </div>
        {openAddWidget ? <NewWidgets openAddWidget={openAddWidget} setOpenAddWidget={setOpenAddWidget} wholeData={wholeData} setWholeData={setWholeData}/> : ""}
        <div className="mt-5">
          <Widgets searchKeywords={searchKeywords} wholeData={wholeData}/>
        </div>
    </div>
  );
}

export default Dashboard;
