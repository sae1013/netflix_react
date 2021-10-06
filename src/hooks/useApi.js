import { useState, useEffect, useCallback } from "react";
import axios from '../axios';

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(requestConfig.url,{ 
      method: requestConfig.method ? requestConfig.method : "GET",
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      headers: requestConfig.headers ? requestConfig.headers : {},
      })
      
      if(response.status == 200){
        if(response.data.results){
          applyData(response.data.results);
        }else {
          applyData(response.data);
        }
        setIsLoading(false);
      }
    
      else if (response.status != 200) { // 응답코드에 따라 분기 
        throw new Error("Request failed!");
      }
    }catch(err){
      setIsLoading(false);
      setError(err.message || "Fetch Failure!");
    }

  }, []);

  return { isLoading, error, sendRequest };
};

export default useApi;
