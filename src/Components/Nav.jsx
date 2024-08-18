import React,{useState} from 'react'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import 'animate.css';
import Search from './Search';

export default function Nav({searchKeywords, setSearchKeywords}) {
  const [update,setUpdate] = useState(1);
  return (
    <div className="fix top-0 flex justify-between border border-black rounded-md p-[5px] sticky bg-white z-30">
      <ul className="grid grid-flow-col">
        <li>Home &gt; </li>
        <li> Dashboard</li>
      </ul>
      <div className="grid grid-cols-2 gap-28">
        <Search searchKeywords={searchKeywords} setSearchKeywords={setSearchKeywords}/>

        <div className='ml-[50px]'>
          <span onClick={()=>{
            if(update>0){setUpdate(update-1)}
          }}
          >
            <NotificationsActiveOutlinedIcon className='animate__animated animate__headShake animate__delay-2s animate__repeat-3'/>
            {update>0?<sup className=' rounded-lg text-blue-800'>{update}</sup>:""}
          </span>
          <span className='ml-[30px]'>
            <AccountCircleOutlinedIcon />
          </span>
          <span>user</span>
        </div>
      </div>
    </div>
  );
}
