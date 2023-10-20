const DurationStackCard = () => {
  return (
    <div className="rounded-2xl bg-primary h-full grid grid-cols-1 grid-rows-6 p-2 ">
      <div className="col-span-1 text-end row-span-1">
        <h1 className="pt-2">
          <strong className="text-[24px] font-bold  px-10 p-1 rounded-full">
            Week
          </strong>
        </h1>
        {/* <p className="text-lg bg-white max-w-sm rounded-full  text-black btn normal-case px-7">Week</p> */}
      </div>
      <div className=" row-span-5 col-span-1 text-center">
        <p className="text-[150px] font-bold text-white italic">277</p>
        <p className="text-[50px] font-semibold text-white text-end pe-2 italic">
          Minute
        </p>
      </div>
    </div>
  );
};

export default DurationStackCard;
