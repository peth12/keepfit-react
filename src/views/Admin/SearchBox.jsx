import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBox() {
  return (
    <div className="flex">
      <form>
        <div className="flex items-center">
          <label className="relative">
            <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

            <input
              className="pl-10 border-gray-400 px-5 py-1 border-2 rounded-lg focus:border-primary  focus:outline-none"
              placeholder="Search here"
            />
          </label>
        </div>
      </form>

      <button className="btn-primary rounded-lg text-white ml-3 p-1">
        Search
      </button>
    </div>
  );
}

export default SearchBox;
