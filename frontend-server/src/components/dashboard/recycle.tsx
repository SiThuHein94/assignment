import { useEffect, useState } from "react";
import { RecycleBarchart } from "../../tools/recycleBarchart";
import { getapi } from "../../network/https";
import {  recycleAPI } from "../../network/api";

export const Recycle = () => {
  const [result, setResult] = useState();
  useEffect(() => {
    const api = async () => {
      const data = await getapi(recycleAPI);
      setResult(data);
    };
    api();
  }, []);
  return (
    <div className="bg-white my-2 p-5 text-xl font-medium">
      Recyclable vs non-recyclable
      {result ? (
        <RecycleBarchart recycleData={result} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
