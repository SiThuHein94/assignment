import { useEffect, useState } from "react";
import PlugImage from "../../assets/plug.png";
import { electricityUsageAPI } from "../../network/api";
import { getapi } from "../../network/https";

export const ElectricityConsumption = () => {
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const api = async () => {
      const data = await getapi(electricityUsageAPI);
      //   const jsonData = await data.json();
      setResult(data);
    };
    api();
  }, []);

  if (!result) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white my-2 p-5 text-xl font-medium col-span-2">
      ELECTRIC CONSUMPTION
      <div className="flex justify-center">
        <img className="py-10" width={100} src={PlugImage} />
      </div>
      <div className="text-center text-3xl text-blue-400 pb-5">
        {result[0].totalConsumption} kWh
      </div>
    </div>
  );
};
