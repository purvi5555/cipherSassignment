import React from "react";
import InterestsModal from "./InterestsModal";
import { useState } from "react";

const Interests = () => {
  const [selectedButtons, setSelectedButtons] = useState([]);
  return (
    <div className="mx-2 md:mx-12 my-8">
      <p className="mb-4 border border-t-0 border-gray-300"></p>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl font-semibold uppercase">INTERESTS</h1>
        <label
          htmlFor="interests-modal"
          className="py-1 px-6 rounded-md bg-orange-400 text-white cursor-pointer"
        >
          Edit
        </label>
      </div>
      <InterestsModal
        selectedButtons={selectedButtons}
        setSelectedButtons={setSelectedButtons}
      ></InterestsModal>
      <div>
        {/* use map here saw all selected value  */}
        {selectedButtons?.map((select, i) => (
          <button key={i} className="btn btn-sm bg-orange-400 text-white">
            {select}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Interests;
