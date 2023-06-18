import { useEffect, useState } from "react";
import { WateLevelChart } from "../../tools/waterLevelBarchart";
import { getapi } from "../../network/https";
import { waterLevelAPI } from "../../network/api";

export const WaterLevel = () => {
  const [result, setResult] = useState();
  useEffect(() => {
    const api = async () => {
      const data = await getapi(waterLevelAPI);
      //   const jsonData = await data.json();
      setResult(data);
    };
    api();
  }, []);
  console.log(result);
  return (
    <div className="bg-white my-2 p-5 text-xl font-medium col-span-4 ">
      Water Level (Water Detention Tank)
      {result ? (
        <WateLevelChart waterLvlData={result} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
