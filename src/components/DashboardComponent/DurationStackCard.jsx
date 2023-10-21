const DurationStackCard = () => {
  return (
    <div className="flex-col rounded-2xl p-2 ">
      <div className="text-end mt-4 pl-4">
        <h1 className="pt-2 text-start">
          <strong className="text-[50px] font-semibold text-white text-start pe-2 italic">
            All time summary 
          </strong>
        </h1>
        {/* <p className="text-lg bg-white max-w-sm rounded-full  text-black btn normal-case px-7">Week</p> */}
      </div>
      <div className=" text-center">
        <p className="text-[150px] font-bold text-white italic">277</p>
        <p className="text-[50px] font-semibold text-white text-end pr-4 italic">
          Minutes
        </p>
      </div>
    </div>
  );
};

export default DurationStackCard;
