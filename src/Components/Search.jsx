import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Search({searchKeywords, setSearchKeywords}) {
  return (
    <>
        <div>
          <span className="relative left-[25px]">
            <SearchOutlinedIcon />
          </span>
          <input
            className="border-2 border-[#CCCCCC] w-[250px] rounded-md pl-[25px] bg-sky-200"
            type="text"
            name="search"
            placeholder="Search..."
            value={searchKeywords}
            onChange={(e)=>setSearchKeywords(e.target.value)}
          />
        </div>
    </>
  )
}

export default Search