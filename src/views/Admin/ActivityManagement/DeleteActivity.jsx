import React from "react";
import { useParams } from 'react-router-dom'
import { GoAlertFill } from "react-icons/go";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const DeleteActivity = () => {
  

  return (
    <>


      <dialog id="my_modal_1" className="modal text-black text-base text-start">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-600 text-white">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-center text-red ">
            Delete Activity
            <p className="text-center text-red-600 flex justify-center text-5xl">
              <GoAlertFill />
            </p>
          </h3>

          <img src="../../../assets/trash_ja.png" alt="" />
          <p className="py-4 text-center">
            Deleting this <strong>activity</strong> will permanently remove it from
            the record. Are you sure you want to delete this activity?
          </p>
          <div className="modal-action">
            <div className="text-center">
              <form method="dialog ">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn bg-green-500 text-white  w-72 lg:w-32 lg:me-2">
                  Cancel
                </button>
                <button className="btn bg-red-600 text-white  w-72 lg:w-32 " onClick={(e) => deleteData(id)}>
                  DeleteJa
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DeleteActivity;
