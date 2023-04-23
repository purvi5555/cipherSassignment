import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AboutMe = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(true);
  const [about, setAbout] = useState("");

  const handleSubmit = () => {
    setOpen(!open);
    // console.log(about);

    if (!open) {
      const aboutMe = {
        about: about,
      };

      // sava information to the database----------
      fetch(`http://localhost:5000/profile/${user?.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(aboutMe),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data) {
            localStorage.setItem("about", JSON.stringify(aboutMe));
          }
        });
    }
  };

  useEffect(() => {
    if (!about) {
      const value = JSON.parse(localStorage.getItem("about"));
      setAbout(value?.about);
    }
  }, [about]);

  const handleChange = (event) => {
    setAbout(event);
  };

  return (
    <div className="mx-2 md:mx-12 mt-16 mb-8">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl font-semibold uppercase">About Me</h1>
        <p
          onClick={handleSubmit}
          className="py-1 px-6 rounded-md bg-orange-400 text-white cursor-pointer"
        >
          {open ? "Edit" : "Save"}
        </p>
      </div>
      <textarea
        readOnly={open}
        className="w-full resize-none h-32 p-2 outline-none rounded-md"
        type="text"
        defaultValue={about}
        placeholder="Add something about you."
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default AboutMe;
