import { useState, useEffect, useCallback } from "react";
import axios from "../axios";

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfigArray, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const responseArray = await axios.all([
        axios.get(requestConfigArray[0].url, {
          method: requestConfigArray[0].method || "GET",
          body: requestConfigArray[0].body
            ? JSON.stringify(requestConfigArray[0].body)
            : null,
          headers: requestConfigArray[0].headers || {},
        }),
        axios.get(requestConfigArray[1].url, {
          method: requestConfigArray[1].method || "GET",
          body: requestConfigArray[1].body
            ? JSON.stringify(requestConfigArray[1].body)
            : null,
          headers: requestConfigArray[1].headers || {},
        }),
      ]);
      
      const data = responseArray.map((response)=>{
        if(response.status != 200){
          throw Error('Response not Success')
        }
        return response.data
      });
      setIsLoading(false);
      applyData(data);
      
    } catch(err){
      setIsLoading(false);
      setError(err.message || "Fetch Failure!");
    }
  },[]);

  return { isLoading, error, sendRequest };
};

export default useApi;
