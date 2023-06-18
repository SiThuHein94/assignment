import { useEffect, useState } from "react";
import { EnergyUsageChart } from "../../tools/energyUsageBarchart";
import { OverViewBarchart } from "../../tools/overviewBarchart";
import { getapi } from "../../network/https";
import { energyUsageAPI } from "../../network/api";

export const OverviewChart = () => {
  const [result, setResult] = useState();
  useEffect(() => {
    const api = async () => {
      let data = await getapi(energyUsageAPI);
      //   const jsonData = await data.json();
      data=data.map((d:any)=>{return {...d,average:20}})
      setResult(data);
    };
    api();
  }, []);

  return (
    <div className="bg-white my-2 p-3 flex grid grid-cols-5 py-10">
      {result ? (
        <>
          <OverViewBarchart />

          <EnergyUsageChart energyData={result} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
