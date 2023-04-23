import React, { useState } from "react";
import left from "../../assets/left-arrow.svg";
import right from "../../assets/right-arrow.svg";
import SideBar from "./SideBar";
import AboutMe from "./AboutMe";
import TheWeb from "./TheWeb";
import ChipherMap from "./chipherMap/ChipherMap";
import ProInfor from "./proInfor/ProInfor";
import Password from "./password/Password";
import Interests from "./interests/Interests";
import Upcoming from "../upcoming/Upcoming";

const Profile = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(1);

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="flex  h-full">
      <div className="flex-1  bg-gray-200">
        {/* all profile section here */}
        {selected === 1 && (
          <div style={{ overflowY: "auto", maxHeight: "100vh" }}>
            <AboutMe></AboutMe>
            <ChipherMap></ChipherMap>
            <TheWeb></TheWeb>
            <ProInfor></ProInfor>
            <Password></Password>
            <Interests></Interests>
            <style>
              {`
          ::-webkit-scrollbar {
            width: 0;
            height: 0;
            background-color: transparent;
          }
        `}
            </style>
          </div>
        )}

        {selected === 0 ||
        selected === 2 ||
        selected === 3 ||
        selected === 4 ? (
          <Upcoming />
        ) : null}

        <button
          onClick={handleToggle}
          className={`bg-gray-100 text-black p-2 rounded-l-md absolute ${
            isCollapsed ? "right-10 md:right-20" : "right-0 md:right-52"
          } top-60 lg:top-64 transform -translate-y-1/2`}
        >
          {isCollapsed ? (
            <img className="w-6 h-6" src={right} alt="" />
          ) : (
            <img className="w-6 h-6" src={left} alt="" />
          )}
        </button>
      </div>
      <div
        className={` bg-gray-100 text-gray-900 ${
          isCollapsed ? "w-16 md:w-24" : "w-0 md:w-56"
        } right-0`}
      >
        {/* side bar  */}
        <SideBar selected={selected} setSelected={setSelected}></SideBar>
      </div>
    </div>
  );
};

export default Profile;
