import React from "react";
import dp from "../../assets/dp.png"
const Card = ({ data }) => {
//   console.log(data);
  return (
    <div>
      <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
        <img src={dp} alt="user" className="h-20 w-20 mx-auto mt-4" />
        <div className="p-5">
          <p className="text-medium font-bold text-gray-700">{data?.fname}</p>
          <p className="text-medium  text-gray-700">{data?.college}</p>
          <p className="text-medium  text-gray-700">
            {data?.followers} followers
          </p>
          <button className={`w-full rounded-md ${data?.follow === true ? "bg-gray-300 text-black hover:bg-gray-300" : "bg-orange-500 text-white hover:bg-orange-500"}   py-2 m-0 mt-2  hover:shadow-md duration-75`}>
            {data?.follow === true ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
