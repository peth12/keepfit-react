function UserCard() {
  return (
    <div className="flex-col ">
      <div className="">
        <div className="avatar col-span-2 row-span-2 grid place-items-center ">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
            <img src="https://static.wikia.nocookie.net/brooklynnine-nine/images/c/c6/Terry-crews.jpeg/revision/latest/scale-to-width-down/350?cb=20150723051016" 
            alt="User Avatar"
            className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center text-black mt-4">
          <p className="">Mr.Terry Crews</p>
          <div className="w-full flex justify-around pt-10 gap-5">
            <p className="">Height 188 cm</p>
            <p className="">Weight 90 kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
