import React, { useState, useEffect } from 'react';
import Data from '../data';
import Widget from './Widget';

function Widgets({ searchKeywords, wholeData, setOpenAddWidget }) {
  const [filteredData, setFilteredData] = useState([]);
  console.log("wholeData", wholeData);

  useEffect(() => {
    if (searchKeywords.length > 0) {
      const filterData = (dataArray, keywords) => {
        return dataArray
          .map(chartDataArray =>
            chartDataArray.filter(chartData =>
              chartData.datasets.some(dataset =>
                dataset.label.toLowerCase().includes(keywords.toLowerCase())
              )
            )
          )
          .filter(filteredArray => filteredArray.length > 0);
      };

      const filteredData = filterData(Data, searchKeywords);
      setFilteredData(filteredData);

      console.log("filtered data: ", filteredData);
    } else {
      setFilteredData([]);
    }
  }, [searchKeywords]);

  return (
    <>
      {searchKeywords.length === 0 ? (
        <div>
          {/* 1st row */}
          <Widget key={1} title="CSPM Executive Dashboard" data={wholeData[0]} searchKeywords={searchKeywords} setOpenAddWidget={setOpenAddWidget}/>
          {/* 2nd row */}
          <Widget key={2} title="CWPP Dashboard" data={wholeData[1]} searchKeywords={searchKeywords} setOpenAddWidget={setOpenAddWidget}/>
          {/* 3rd row */}
          <Widget key={3} title="Registry Scan" data={wholeData[2]} searchKeywords={searchKeywords} />
        </div>
      ) : (
        <div>
          {filteredData.length > 0 ? (
            filteredData.map((data, index) => (
              <Widget
                key={index}
                title={`Filtered Dashboard ${index + 1}`}
                data={data}
                searchKeywords={searchKeywords}
              />
            ))
          ) : (
            <p>No data matches your search.</p>
          )}
        </div>
      )}
    </>
  );
}

export default Widgets;
