import { useState, useEffect, useCallback } from "react";
import requests from '../request';
import axios from "../axios";

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(requestConfig.url, {
        method: requestConfig.method || "GET",
        body: requestConfig.body
          ? JSON.stringify(requestConfig.body)
          : null,
        headers: requestConfig.headers || {},
      });
      
      if(response.status != 200){
        throw Error('Response not Success')
      }
      
      let nextChainId = response.data?.belongs_to_collection?.id;
      
      if(!nextChainId){
        setIsLoading(false);
        applyData(response.data);
        return
      }

      const nextResponse = await axios.get(requests.fetchCollection(nextChainId));
      if(nextResponse.status != 200) {
        throw Error('Response not Success')
      }

      setIsLoading(false);
      applyData({...response.data, collections:nextResponse.data})
        
      
    } catch(err){
      setIsLoading(false);
      setError(err.message || "Fetch Failure!");
    }
  },[]);

  return { isLoading, error, sendRequest };
};

export default useApi;
