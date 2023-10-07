import { useState, useEffect} from 'react';

function App() {

  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  

  useEffect( () => {
    const getUsers = async () =>{
      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
        if (!response.ok){
          throw new Error ("Falied to fetch users");
        }
        const data = await response.json();
        setData(data);
      }catch (e){
        console.log(e.message)
      }
    }
    getUsers();
    }, [type]);
return (
  <div>
  <h1>Resurce: {type}</h1>
          <button onClick={()=> setType("users")}>Users</button>
          <button onClick={()=> setType("albums")}>Albums</button>
          <button onClick={()=> setType("posts")}>Posts</button>
          <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
)
}
export default App;
