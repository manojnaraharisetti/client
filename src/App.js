import { useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [result,setResult] = useState(null);
  function getproducts(){
    axios.get("http://localhost:1420/products",{
        params : {}
    })
    .then((response) => {
        console.log(response.data);
        setResult(response.data);
    })
    .catch((error)=>{
        console.log(error);
    })

  }

  function deleteProduct(id){
    axios.delete(`http://localhost:1420/delete/${id}`,
        {params : {}
    })
    .then((response)=>{
        console.log(response.data)
        getproducts();
    })
    .catch((error)=>{
        console.log(error);
    })
  }

  if(result === null){
  return (
    <div className="App">
      <button onClick={() => getproducts()}>GetProductData </button>
    </div>
  );
  }else{
    return (
        <div className="App">
            <table border="1">
                <tr>
                    <th>Pid</th>
                    <th>Pname</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                {
                    result.map((obj)=>(
                        <tr key={obj.id}>
                            <td key={obj.id}></td>
                            <td key={obj.name}></td>
                            <td key={obj.price}></td>
                            <td ><button onClick={()=>deleteProduct(obj.id)}>Delete Product</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
      );
  }
}

export default App;
