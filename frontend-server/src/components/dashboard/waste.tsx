import { WaterUsage } from "./waterUsage";

export const Waste = () => {
  const values = [14.0, 45.5, 18.8, 38.8, 44.0, 17.1];
  return (
    <div className="bg-white my-2 p-5 text-xl font-medium flex justify-center">
      <div className="text-center">
        Waste Collection
        <div className="text-orange-500">Tonnes</div>
        <div className="shadow-inner shadow-blue-500 text-left w-[250px] mb-3">
          {values.map((v, k) => (
            <div key={k} className="border-b border px-5 text-lg">
              {v}
            </div>
          ))}
        </div>
        Current month vs <br /> last 3 months average
        <div className="flex justify-around"><span className="font-bold">21.0</span> <span className="text-red-400">30.65%</span></div>
      </div>
    </div>
  );
};
