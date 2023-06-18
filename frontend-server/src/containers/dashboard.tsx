import { TitleBar } from "../components/dashboard/titleBar";
import { OverviewChart } from "../components/dashboard/energyConsume";
import { ElectricityConsumption } from "../components/dashboard/electricityConsume";
import { CarbonFootprint } from "../components/dashboard/carbonFootprint";
import { WaterLevel } from "../components/dashboard/waterLevel";
import { WaterUsage } from "../components/dashboard/waterUsage";
import { Recycle } from "../components/dashboard/recycle";
import { Waste } from "../components/dashboard/waste";
import { Abnormalities } from "../components/dashboard/abnormalities";

export const Dashboard = () => {
  return (
    <div className="p-5">
      <TitleBar />
      <OverviewChart />
      <div className="flex grid grid-cols-5 gap-4">
        <ElectricityConsumption />
        <CarbonFootprint />
      </div>
      <div className="flex grid grid-cols-6 gap-4">
        <WaterLevel />
        <WaterUsage />
      </div>
      <div className="flex grid grid-cols-2 gap-4">
        <Recycle />
        <Waste />
      </div>
      <Abnormalities/>
    </div>
  );
};
