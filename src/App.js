import React, { useState, useCallback, useEffect } from "react";
import { Table } from "./components";

export default function App() {
  const [size] = useState(41);
  const [data, setData] = useState([]);

  const generateData = useCallback(() => {
    const data = [];
    for (let i = 0; i < size; i++) {
      data.push({
        col1: Math.random().toString(16).slice(2),
        col2: Math.random().toString(16).slice(2),
        col3: Math.random().toString(16).slice(2)
      });
    }
    return data;
  }, [size]);

  useEffect(() => {
    const records = generateData(size);
    setData(records);
  }, [size, generateData]);

  return (
    <div className="App">
      <h1>Test</h1>
      {data?.length && <Table data={data} />}
    </div>
  );
};
