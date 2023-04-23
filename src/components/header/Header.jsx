import React from "react";
import bg from "../../assets/headerbg.jpg";
import edit from "../../assets/pen-edit.svg";
import ProfileEditModal from "./ProfileEditModal";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import dp from "../../assets/dp.png"

const Header = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (firstName === "" || lastName === "" || email === "" || image === "") {
      const value = JSON.parse(localStorage.getItem("user"));
      setFirstName(value?.firstName);
      setLastName(value?.lastName);
      setEmail(value?.email);
      setImage(value?.image);
    }
  }, [firstName, lastName, email, image]);

  return (
    <div
      className="flex justify-between items-center px-7 flex-wrap"
      style={{ backgroundImage: `url(${bg})`, height: "130px" }}
    >
      <div className="flex items-center gap-5">
        <div>
          <img
            className="rounded-full w-14 h-14 md:w-20 md:h-20"
            src={
              dp
            }
            alt=""
          />
          <label htmlFor="profile-Edit-Modal">
            <img className="-mt-4 ml-10 cursor-pointer" src={edit} alt="" />
          </label>
          <ProfileEditModal></ProfileEditModal>
        </div>
        <div className="text-white">
          <h1 className="text-xl">Hello,</h1>
          <h1 className="text-2xl font-bold">
            {firstName ? firstName : "Poornima"} {lastName ? lastName : "Tanwar"}
          </h1>
          <h1>{email ? email : "tanwarpurnima05@gmail.com"}</h1>
        </div>
      </div>
      <Link to="/followers">
        <div className="text-white font-bold cursor-pointer">
          {
            localStorage.getItem("follower")
          } Followers</div>
      </Link>
    </div>
  );
};

export default Header;
