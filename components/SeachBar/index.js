import React from 'react';
import { useState } from 'react';
import './index.css';

import { MdSearch } from "react-icons/md";

export default function SeachBar({ placeholder, data }) {

    const [filterData, setFilterData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.content.toLowerCase().includes(searchWord.toLowerCase());
        });
        setFilterData(newFilter)
    }

 return (
   <div className="search">
       <div className="searchInputs">
           <MdSearch size={27} color="#969696"/>
           <input className="input" type="text" placeholder={placeholder} onChange={handleFilter} />
       </div>
       {filterData.length !== 0 && (  
        <div className="dataResults">
           {filterData.map((value, key) => {
               return(
                   <a className="dataItem" href="/login" target="_blank">
                       <p>{value.content}</p>
                   </a>
               )
           })}
        </div>
       )}
            
        </div>
   
 );
}