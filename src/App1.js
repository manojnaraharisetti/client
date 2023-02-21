import { useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const[res,setRes] = useState(null);
  const handleSubmit = (event) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.post('http://localhost:1420/',{
      id : data.get('pid'),
      name : data.get('pname'),
      price : data.get('price')
      
    })
    .then((response) => {
      console.log(response.data);
      setRes(response.data);
    })
    .catch((err) => {console.log(err)})
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>product Id : <input type='text' name='pid' /></label><br/><br/>
        <label>product Name : <input type='text' name='pname' /></label><br/><br/>
        <label>product Price :  <input type='text' name='price' /></label><br/><br/>

        <input type='submit' value='store'/><br/>
        {res}

      </form>
    </div>
  );
}

export default App;
