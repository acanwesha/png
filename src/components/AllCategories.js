import React, { useEffect, useState } from 'react'
import Category from './Category'
import axios from 'axios';

const AllCategories=()=>{
    
  
//function to call server


    const[categories,setCategories]=useState([
        {name: "DELIVERY_INFORMATION"},
        {name: "NEWBORN_INFORMATION"},
        {name: "LABOR_INFORMATION"},
        {name: "COMPLICATIONS"}
    ])


    return(
        <div>
            <h1>Category</h1>
            <p></p>
            {
                categories.length > 0 ? categories.map((item)=>(
                    <Category key={item.id} category={item}/>
                )) : "No categories available"
            }
        </div>
    );
}; 

export default AllCategories;