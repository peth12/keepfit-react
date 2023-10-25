function UserCard({username, height, weight}) {
  return (
    <div className="flex-col ">
      <div className="">
        <div className="avatar col-span-2 row-span-2 grid place-items-center ">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
            <img src="profile.jpg" />
          </div>
        </div>
        <div className="text-center text-black mt-4">
          <p className="">{username}</p>
          <div className="w-full flex justify-around pt-10 gap-5">
            <p className="">Height {height} cm</p>
            <p className="">Weight {weight} kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
