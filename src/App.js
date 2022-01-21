import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Customer from './Customer'

function App() {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://my-json-server.typicode.com/Ved-X/assignment/orders'
      )
      .then(res => {
        setResult(res.data);
        // console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);


 const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = result.filter(customer =>
    customer.customer.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="App">
      <h1>All Orders 20</h1>
      
    <div className="Search_customer">
      <input className="Customer_input" type="text" placeholder="Search Customer" onChange={handleChange}></input>
    </div>
    <div className='navbar'>
        <ul>
          <li>ORDER_ID</li>
          <li>CUSTOMER</li>
          <li>ADDRESS</li>
          <li>PRODUCT</li>
          <li>DTAE</li>
          <li>STATUS</li>
          
        </ul>
      </div>
    {filteredCoins.map(customer => {
        return (
          <Customer
            key={customer.order_id}
            ID={customer.order_id}
            name={customer.customer}
          address={customer.country}
          product={customer.product_title}
          date={customer.date}
          status={customer.status}
        
          />
        );
      })}
      
    </div>
  );
}

export default App;
