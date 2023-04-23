import React from "react";
import edit from "../../assets/pen-edit.svg";
import { useState } from "react";
import { LoaderSpin } from "../loader/Loader";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const ProfileEditModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const imageHostKey = process.env.REACT_APP_IMGBB_key;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  const handleImageChange = (e) => {
    setIsLoading(true);
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          // console.log(imgData.data.display_url);
          setImage(imgData.data.display_url);
          setIsLoading(false);
        }
      });
  };

  const handleSubmit = () => {
    const value = {
      firstName,
      lastName,
      email,
      phone,
      image,
    };

    const filteredObj = {};
    for (const key in value) {
      if (value[key] && value[key] !== "") {
        filteredObj[key] = value[key];
      }
    }

    // call the api and set he value
    // console.log("filter",filteredObj);

    // sava information to the database----------
    fetch(`http://localhost:5000/profile/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(filteredObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          toast.success("User Information Updated");
          localStorage.setItem("user", JSON.stringify(filteredObj));
          // close the modal
          const modal = document.getElementById("profile-Edit-Modal");
          modal.checked = false;
        }
      });
  };

  useEffect(() => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      image === ""
    ) {
      const value = JSON.parse(localStorage.getItem("user"));
      // // setAbout(value);
      // console.log(value);
      setFirstName(value?.firstName);
      setLastName(value?.lastName);
      setEmail(value?.email);
      setPhone(value?.phone);
      setImage(value?.image);
    }
  }, [firstName, lastName, email, phone, image]);

  return (
    <div>
      <input type="checkbox" id="profile-Edit-Modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative pt-2">
          <label
            htmlFor="profile-Edit-Modal"
            className="btn btn-sm text-xl hover:bg-white bg-white text-black border-none absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Profile Update</h3>
          {/* main  */}
          <div className="flex  items-center gap-5">
            <div>
              {isLoading ? (
                <div className="flex items-center justify-center ">
                  <LoaderSpin className={"text-blue-700"}></LoaderSpin>
                </div>
              ) : (
                <img
                  className="rounded-full w-44 h-[120px]"
                  src={
                    image
                      ? image
                      : "https://lh3.googleusercontent.com/a/AGNmyxZyymN0L8UiTBNn3PPLDMKktDDem3EKKS2CNYNH3w=s96-c"
                  }
                  alt=""
                />
              )}

              <label className="label">
                <img className="-mt-4 ml-16 cursor-pointer" src={edit} alt="" />

                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleImageChange(e)}
                />
              </label>
            </div>

            <div className="w-full">
              <div className="mt-3">
                <p className="font-semibold">First Name</p>
                <div className="relative">
                  <input
                    className="w-full py-2 rounded-md px-4 outline-none bg-slate-100"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-3">
                <p className="font-semibold">Last Name</p>
                <div className="relative">
                  <input
                    className="w-full py-2 rounded-md px-4 outline-none bg-slate-100"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-3">
                <p className="font-semibold">Email Address</p>
                <div className="relative">
                  <input
                    className="w-full py-2 rounded-md px-4 outline-none bg-slate-100 cursor-not-allowed"
                    type="email"
                    readOnly
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-3">
                <p className="font-semibold">Mobile Number</p>
                <div className="relative">
                  <input
                    className="w-full py-2 rounded-md px-4 outline-none bg-slate-100"
                    type="number"
                    placeholder="Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label
              htmlFor="profile-Edit-Modal"
              className="btn btn-sm mr-5 px-6"
            >
              Cancel
            </label>
            <label
              onClick={handleSubmit}
              className="py-1 px-7 rounded-md bg-orange-400 text-white cursor-pointer"
            >
              Save
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditModal;
