import React from "react";
import { useUser } from "./Context";


function App() {
  const {
    userInput,
    setUserInput,
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
  } = useUser();
  console.log("Context",useUser);
  console.log(data);
  return (
    <div>
      <h1>Github User Searcher</h1>
      <input
        onChange={(e) => setUserInput(e.target.value)}
        type="text"
        placeholder="start search"
        value = {userInput}
      ></input>
      <ul>
              {loading ? (  <li>Loading...</li>) :
                 (data.map((user) => {         
                      return (           
                           <li key={user.id}>             
                            {user.login} <a href={user.html_url}>{user.html_url}</a>         
                   </li>         
                    )       
                      }))};
      </ul>
    </div>
  );
}

export default App;
