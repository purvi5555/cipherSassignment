import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider";

const PasswordModal = () => {
  const { user } = useContext(AuthContext);
  const [change, setChange] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [passwordObject, setPasswordObject] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const filteredObj = {};
    for (const key in passwordObject) {
      if (passwordObject[key] && passwordObject[key] !== "") {
        filteredObj[key] = passwordObject[key];
      }
    }
    setChange(filteredObj);
  }, [passwordObject]);

  const handleSubmit = () => {
    if (passwordObject.newPassword !== passwordObject.confirmPassword) {
      return toast.error("New password and confirm password are not match");
    } else {
      // console.log(change);
      // sava information to the database----------
      fetch(
        `http://localhost:5000/password-reset/${user?.email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(change),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.status === 200) {
            toast.success(`${data?.message}`);
            const empty = {
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            };
            setPasswordObject(empty);
            // close the modal
            const modal = document.getElementById("password-modal");
            modal.checked = false;
          }
          if (data?.status === 401) {
            toast.error(`${data?.message}`);
          }
        });
    }
  };

  return (
    <div>
      <input type="checkbox" id="password-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="mt-3">
            <p className="font-semibold">Current Password</p>
            <div className="relative">
              <input
                className="w-full py-2 rounded-md px-4 outline-none bg-slate-100"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={passwordObject?.currentPassword}
                onChange={(e) =>
                  setPasswordObject({
                    ...passwordObject,
                    currentPassword: e.target.value,
                  })
                }
              />
              <button
                className="absolute top-1/2 right-3 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <div className="mt-3">
            <p className="font-semibold">New Password</p>
            <div className="relative">
              <input
                className="w-full py-2 rounded-md px-4 outline-none bg-slate-100"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={passwordObject?.newPassword}
                onChange={(e) =>
                  setPasswordObject({
                    ...passwordObject,
                    newPassword: e.target.value,
                  })
                }
              />
              <button
                className="absolute top-1/2 right-3 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          <div className="mt-3">
            <p className="font-semibold">Confirm Password</p>
            <div className="relative">
              <input
                className="w-full py-2 rounded-md px-4 outline-none bg-slate-100"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={passwordObject?.confirmPassword}
                onChange={(e) =>
                  setPasswordObject({
                    ...passwordObject,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <button
                className="absolute top-1/2 right-3 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <div className="modal-action">
            <label htmlFor="password-modal" className="btn btn-sm mr-5 px-6">
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

export default PasswordModal;
