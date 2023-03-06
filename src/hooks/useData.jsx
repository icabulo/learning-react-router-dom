import React, { useEffect, useState } from "react";

//return data of any function
const useData = (initialState, fn) => {
  const [data, setData] = useState([initialState]);

  const getData = async () => {
    const data = await fn();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data };
};

export default useData;
