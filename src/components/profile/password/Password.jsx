import React from "react";
import PasswordModal from "./PasswordModal";

const Password = () => {
  return (
    <div className="mx-2 md:mx-12 my-8">
      <p className="mb-4 border border-t-0 border-gray-300"></p>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl font-semibold uppercase">
          PASSWORD & SECURITY
        </h1>
        <label
          htmlFor="password-modal"
          className="py-1 px-6 rounded-md bg-orange-400 text-white cursor-pointer"
        >
          Change
        </label>
      </div>
      <PasswordModal></PasswordModal>
      <div>
        <p className="font-semibold">Password</p>
        <input
          className="w-full py-2 pt-3 rounded-md px-4 outline-none"
          type="text"
          placeholder="***********"
        ></input>
      </div>
    </div>
  );
};

export default Password;
