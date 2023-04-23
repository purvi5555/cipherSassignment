import { useQuery } from "@tanstack/react-query";
import React from "react";
import Card from "./Card";
import { LoaderSpin } from "../loader/Loader";


const AllFollower = () => {
  const {
    data = [],
    isLoading,
    // refetch,
  } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/follower`
        );
        const data = await res.json();
        localStorage.setItem("follower", data?.length);
        return data;
      } catch (err) {
        console.log(data)
        console.log(err);
      }
    },
  });

  if (isLoading) {
    return <LoaderSpin className={"w-10 mx-auto my-5 text-blue-600"} size={72}></LoaderSpin>;
  }
  return (
    <div className="mx-5">
      <h1 className="text-xl my-5 font-bold">Users Following You</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
        {data?.map((data, i) => (
       
          <Card data={data} key={i}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllFollower;
