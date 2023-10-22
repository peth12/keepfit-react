function UserCard() {
  return (
    <div className="flex-col pt-11">
      <div className="">
        <div className="avatar col-span-2 row-span-2 grid place-items-center ">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
            <img src="profile.jpg" />
          </div>
        </div>
        <div className="text-center text-black mt-10">
          <p className="">Mr.Spidenman</p>
          <div className="w-full flex justify-around pt-10 gap-5">
            <p className="">Height 170 cm</p>
            <p className="">Weight 70 kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
