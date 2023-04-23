import React, { useContext, useEffect, useState } from "react";
import linkedIn from "../../assets/LinkedIn.svg";
import Github from "../../assets/Github.svg";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Instagram from "../../assets/Instagram.svg";
import Website from "../../assets/Website.svg";
import { AuthContext } from "../../context/AuthProvider";

const TheWeb = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(true);
  const [change, setChange] = useState({});
  const [masterObject, setMasterObject] = useState({
    LinkedIn: "",
    Github: "",
    Facebook: "",
    Twitter: "",
    Instagram: "",
    Website: "",
  });

  useEffect(() => {
    const filteredObj = {};
    for (const key in masterObject) {
      if (masterObject[key] && masterObject[key] !== "") {
        filteredObj[key] = masterObject[key];
      }
    }
    setChange(filteredObj);
  }, [masterObject]);

  const handleSubmit = () => {
    setOpen(!open);
    if (!open) {
      // console.log(change);
      // sava information to the database----------
      fetch(`http://localhost:5000/profile/${user?.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(change),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data) {
            localStorage.setItem("OnTheWeb", JSON.stringify(change));
          }
        });
    }
  };

  useEffect(() => {
    if (
      masterObject?.LinkedIn === "" ||
      masterObject?.Github === "" ||
      masterObject?.Twitter === "" ||
      masterObject?.Instagram === "" ||
      masterObject?.Facebook === "" ||
      masterObject?.Website === ""
    ) {
      const value = JSON.parse(localStorage.getItem("OnTheWeb"));
      setMasterObject(value);
    }
  }, [
    masterObject?.LinkedIn,
    masterObject?.Github,
    masterObject?.Twitter,
    masterObject?.Instagram,
    masterObject?.Facebook,
    masterObject?.Website,
  ]);

  return (
    <div className="mx-2 md:mx-12 my-8">
      <p className="mb-4 border border-t-0 border-gray-300"></p>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl font-semibold uppercase">On The Web</h1>
        <p
          onClick={handleSubmit}
          className="py-1 px-6 rounded-md bg-orange-400 text-white cursor-pointer"
        >
          {open ? "Edit" : "Save"}
        </p>
      </div>
      {/* field all  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="font-semibold">LinkedIn</p>
          <div className=" py-1 px-4 rounded-md bg-white flex justify-start items-center gap-2">
            <img className="w-7" src={linkedIn} alt="" />
            <input
              className="w-full py-2 outline-none"
              type="text"
              readOnly={open}
              placeholder="LinkedIn"
              value={masterObject?.LinkedIn}
              onChange={(e) =>
                setMasterObject({ ...masterObject, LinkedIn: e.target.value })
              }
            ></input>
          </div>
        </div>
        <div>
          <p className="font-semibold">Github</p>
          <div className=" py-1 px-4 rounded-md bg-white flex justify-start items-center gap-2">
            <img className="w-7" src={Github} alt="" />
            <input
              className="w-full py-2 outline-none"
              type="text"
              readOnly={open}
              placeholder="Github"
              value={masterObject?.Github}
              onChange={(e) =>
                setMasterObject({ ...masterObject, Github: e.target.value })
              }
            ></input>
          </div>
        </div>
        <div>
          <p className="font-semibold">Facebook</p>
          <div className=" py-1 px-4 rounded-md bg-white flex justify-start items-center gap-2">
            <img className="w-7" src={Facebook} alt="" />
            <input
              className="w-full py-2 outline-none"
              type="text"
              placeholder="Facebook"
              readOnly={open}
              value={masterObject?.Facebook}
              onChange={(e) =>
                setMasterObject({ ...masterObject, Facebook: e.target.value })
              }
            ></input>
          </div>
        </div>
        <div>
          <p className="font-semibold">Twitter</p>
          <div className=" py-1 px-4 rounded-md bg-white flex justify-start items-center gap-2">
            <img className="w-7" src={Twitter} alt="" />
            <input
              className="w-full py-2 outline-none"
              type="text"
              placeholder="Twitter"
              readOnly={open}
              value={masterObject?.Twitter}
              onChange={(e) =>
                setMasterObject({ ...masterObject, Twitter: e.target.value })
              }
            ></input>
          </div>
        </div>
        <div>
          <p className="font-semibold">Instagram</p>
          <div className=" py-1 px-4 rounded-md bg-white flex justify-start items-center gap-2">
            <img className="w-7" src={Instagram} alt="" />
            <input
              className="w-full py-2 outline-none"
              type="text"
              readOnly={open}
              placeholder="Instagram"
              value={masterObject?.Instagram}
              onChange={(e) =>
                setMasterObject({ ...masterObject, Instagram: e.target.value })
              }
            ></input>
          </div>
        </div>
        <div>
          <p className="font-semibold">Website</p>
          <div className=" py-1 px-4 rounded-md bg-white flex justify-start items-center gap-2">
            <img className="w-7" src={Website} alt="" />
            <input
              className="w-full py-2 outline-none"
              type="text"
              placeholder="Website"
              readOnly={open}
              value={masterObject?.Website}
              onChange={(e) =>
                setMasterObject({ ...masterObject, Website: e.target.value })
              }
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheWeb;
