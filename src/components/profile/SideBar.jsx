import React from "react";

const SideBar = ({ selected, setSelected }) => {
  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div>
      <ul className="py-4 px-2 space-y-1 text-sm font-bold">
        <li
          className={`${
            selected === 0
              ? "bg-orange-400 hover:bg-orange-400 text-white"
              : "bg-gray-100"
          } hover:bg-orange-100 md:py-3 md:px-4 rounded-md cursor-pointer w-10 md:w-full`}
          onClick={() => handleSelect(0)}
        >
          <p className="flex items-center gap-3 flex-wrap">
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              width="28px"
              fill={selected === 0 ? "white" : "black"}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>dashboard-tile-solid</title>{" "}
                <g id="Layer_2" data-name="Layer 2">
                  {" "}
                  <g id="invisible_box" data-name="invisible box">
                    {" "}
                    <rect width="48" height="48" fill="none"></rect>{" "}
                  </g>{" "}
                  <g id="icons_Q2" data-name="icons Q2">
                    {" "}
                    <g>
                      {" "}
                      <path d="M20,30H8a2,2,0,0,0-2,2V42a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V32a2,2,0,0,0-2-2Z"></path>{" "}
                      <path d="M20,4H8A2,2,0,0,0,6,6V24a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z"></path>{" "}
                      <path d="M40,4H28a2,2,0,0,0-2,2V16a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z"></path>{" "}
                      <path d="M40,22H28a2,2,0,0,0-2,2V42a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V24a2,2,0,0,0-2-2Z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <span className="text-xs overflow-hidden">Dashboard</span>
          </p>
        </li>
        <li
          className={`${
            selected === 1
              ? "bg-orange-400 hover:bg-orange-400 text-white"
              : "bg-gray-100"
          } hover:bg-orange-100 md:py-3 md:px-4 rounded-md cursor-pointer w-10 md:w-full`}
          onClick={() => handleSelect(1)}
        >
          <p className="flex items-center gap-3 flex-wrap">
            <svg
              viewBox="0 0 24 24"
              width="28px"
              xmlns="http://www.w3.org/2000/svg"
              fill={selected === 1 ? "white" : "black"}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="User / User_01">
                  <path
                    id="Vector"
                    d="M19 21C19 17.134 15.866 14 12 14C8.13401 14 5 17.134 5 21M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z"
                    stroke={selected === 1 ? "#ffffff" : "#000000"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </g>
            </svg>
            <span className="text-xs overflow-hidden"> My Profile</span>
          </p>
        </li>
        <li
          className={`${
            selected === 2
              ? "bg-orange-400 hover:bg-orange-400 text-white"
              : "bg-gray-100"
          } hover:bg-orange-100 md:py-3 md:px-4 rounded-md cursor-pointer w-10 md:w-full`}
          onClick={() => handleSelect(2)}
        >
          <p className="flex items-center gap-3 flex-wrap">
            <svg
              fill={selected === 2 ? "white" : "black"}
              viewBox="0 0 24 24"
              width="28px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM5 7h14v2H5V7z"
                  stroke={selected === 2 ? "#ffffff" : "#000000"}
                ></path>
              </g>
            </svg>
            <span className="text-xs"> Enrolled Course</span>
          </p>
        </li>
        <li
          className={`${
            selected === 3
              ? "bg-orange-400 hover:bg-orange-400 text-white"
              : "bg-gray-100"
          } hover:bg-orange-100 md:py-3 md:px-4 rounded-md cursor-pointer w-10 md:w-full`}
          onClick={() => handleSelect(3)}
        >
          <p className="flex items-center gap-3 flex-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="28px"
              fill={selected === 3 ? "white" : "black"}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M60,52V4c0-2.211-1.789-4-4-4H14v51v3h42v8H10c-2.209,0-4-1.791-4-4s1.791-4,4-4h2v-3V0H8 C5.789,0,4,1.789,4,4v54c0,3.313,2.687,6,6,6h49c0.553,0,1-0.447,1-1s-0.447-1-1-1h-1v-8C59.104,54,60,53.104,60,52z M23,14h12 c0.553,0,1,0.447,1,1s-0.447,1-1,1H23c-0.553,0-1-0.447-1-1S22.447,14,23,14z M42,28H23c-0.553,0-1-0.447-1-1s0.447-1,1-1h19 c0.553,0,1,0.447,1,1S42.553,28,42,28z M49,22H23c-0.553,0-1-0.447-1-1s0.447-1,1-1h26c0.553,0,1,0.447,1,1S49.553,22,49,22z"
                  stroke={selected === 3 ? "#ffffff" : "#000000"}
                ></path>{" "}
              </g>
            </svg>
            <span className="text-xs overflow-hidden"> Wishlist</span>
          </p>
        </li>
        <li
          className={`${
            selected === 4
              ? "bg-orange-400 hover:bg-orange-400 text-white"
              : "bg-gray-100"
          } hover:bg-orange-100 md:py-3 md:px-4 rounded-md cursor-pointer w-10 md:w-full`}
          onClick={() => handleSelect(4)}
        >
          <p className="flex items-center gap-3 flex-wrap">
            <svg
              viewBox="0 0 24 24"
              width="28px"
              fill={selected === 4 ? "white" : "black"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.9 4.5C15.9 3 14.418 2 13.26 2c-.806 0-.869.612-.993 1.82-.055.53-.121 1.174-.267 1.93-.386 2.002-1.72 4.56-2.996 5.325V17C9 19.25 9.75 20 13 20h3.773c2.176 0 2.703-1.433 2.899-1.964l.013-.036c.114-.306.358-.547.638-.82.31-.306.664-.653.927-1.18.311-.623.27-1.177.233-1.67-.023-.299-.044-.575.017-.83.064-.27.146-.475.225-.671.143-.356.275-.686.275-1.329 0-1.5-.748-2.498-2.315-2.498H15.5S15.9 6 15.9 4.5zM5.5 10A1.5 1.5 0 0 0 4 11.5v7a1.5 1.5 0 0 0 3 0v-7A1.5 1.5 0 0 0 5.5 10z"
                  stroke={selected === 4 ? "#ffffff" : "#000000"}
                ></path>
              </g>
            </svg>
            <span className="text-xs overflow-hidden">Liked Videos</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
