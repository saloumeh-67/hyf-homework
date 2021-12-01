import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGitUsers = async (input) => {
    try {
      await fetch(`https://api.github.com/search/users?q=${input}`)
        .then((response) => {
          if (!response.ok) {
            throw Error("Could not fetch the data ");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          setData(data.items);
          //console.log(data);
          setLoading(false);
        });
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (!userInput || error) {
      setLoading(false);
    } else {
      setLoading(true);
      fetchGitUsers(userInput);
    }
  }, [userInput, error]);

  return (
    <Context.Provider
      value={{
        userInput,
        setUserInput,
        data,
        setData,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {/* <pre>{JSON.stringify(data, null, 0)}</pre> */}
      {children}
    </Context.Provider>
  );
}

export const useUser = () => React.useContext(Context);
export default ContextProvider;

//-------------------->if I want to do it without async <---------------------//
//   const api = `https://api.github.com/search/users?q=${userInput}`;
//   useEffect(() => {
//     fetch(api)
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         throw error;
//       })
//       .then((data) => {
//         setData(data.items);
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//         setError(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [error]);//cleanup func
//   if (loading) return "Loading...";
//   if (error) return "Error!";
