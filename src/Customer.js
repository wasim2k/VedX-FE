import React from 'react';
import './App.css'

 const Customer = ({ID,name,address,product,date,status}) => {
  return(
    <div className='Customer_container'>
        <div className='Customer_row'>
          <div className='Customer_details'>
          <p className='Order_ID'>{ID}</p>
            <p className='Customer_name'>{name}</p>
            <p className='Address'>{address}</p>
            <p className='Product'>{product}</p>
            <p className='Date_order'>{date}</p>
            <p className='Stauts'>{status}</p>
          </div>
          
        </div>

    </div>
  )
  
};
export default Customer