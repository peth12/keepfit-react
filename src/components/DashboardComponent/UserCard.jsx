function UserCard() {
  return (
    <div className="w-full h-full bg-white rounded-3xl border-4  border-primary grid grid-cols-2 grid-rows-4 ">
      <div className="avatar col-span-2 row-span-2 grid place-items-center">
        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBtZf2tBV8MvwHWZRUje7mazjFIxMTdM4Cg&usqp=CAU" />
        </div>

      </div>
      <div className="body-section col-span-4 row-span-2 text-center" >

            <p className="text-xl bg-primary max-w-sm rounded-full px-16 text-white btn btn-primary normal-case">spiderman</p>
            <div className="w-full flex justify-around pt-10">
            <p className="text-lg bg-primary max-w-sm rounded-full px-3 text-white  btn btn-primary  normal-case">Height 170 cm</p>
            <p className="text-lg bg-primary max-w-sm rounded-full px-3 text-white btn btn-primary normal-case">Weight 70 kg</p>
            </div>
        </div>
    </div>
  );
}

export default UserCard;
