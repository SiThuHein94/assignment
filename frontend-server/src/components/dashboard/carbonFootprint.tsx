export const CarbonFootprint = () => {
  return (
    <div className="bg-white my-2 p-5 text-xl font-medium col-span-3 ">
      CARBON FOOTPRINT
      <div className="grid grid-cols-7 text-center my-5 w-full flex items-center gap-1 py-10">
        Negligible
        <div>
          <div className="bg-red-100 rounded-l-full p-10" />
          <div className="text-sm font-bold">Low</div>
        </div>
        <div className="col-span-2 text-sm font-bold">
          <div className="bg-red-100 p-10" />
          Medium
        </div>
        <div className="col-span-2 text-sm font-bold">
          <div className="bg-red-100 rounded-r-full p-10" />
          High
        </div>
        Severe
      </div>
    </div>
  );
};
