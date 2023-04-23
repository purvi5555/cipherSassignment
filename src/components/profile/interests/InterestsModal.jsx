import React from "react";
import "./interests.css";
import { AuthContext } from "../../../context/AuthProvider";
import { useContext } from "react";
import { useEffect } from "react";

const InterestsModal = ({ selectedButtons, setSelectedButtons }) => {
  const { user } = useContext(AuthContext);

  const handleButtonClick = (buttonName) => {
    if (selectedButtons?.includes(buttonName)) {
      setSelectedButtons(
        selectedButtons?.filter((name) => name !== buttonName)
      );
    } else {
      setSelectedButtons([...selectedButtons, buttonName]);
    }
  };

  const handleSubmit = () => {
    // call the api and set he value
    // console.log(selectedButtons);
    const interests = {
      interests: selectedButtons || [],
    };

    // sava information to the database----------
    fetch(`http://localhost:5000/profile/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(interests),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          localStorage.setItem("interests", JSON.stringify(interests));
          // close the modal
          const modal = document.getElementById("interests-modal");
          modal.checked = false;
        }
      });
  };

  useEffect(() => {
    if (selectedButtons?.length === 0) {
      const value = JSON.parse(localStorage.getItem("interests"));
      // console.log(value?.interests);
      if(value){
        setSelectedButtons(value?.interests);
      }
    }
  }, [selectedButtons?.length, setSelectedButtons]);

  return (
    <div>
      <input type="checkbox" id="interests-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          {/* field section  */}

          <div className="grid grid-cols-1 md:grid-cols-2">
            <button
              className={
                selectedButtons?.includes("App Development")
                  ? "selected"
                  : "bg-slate-100"
              }
              onClick={() => handleButtonClick("App Development")}
            >
              App Development
            </button>
            <button
              className={
                selectedButtons?.includes("Web Development")
                  ? "selected"
                  : "bg-slate-100"
              }
              onClick={() => handleButtonClick("Web Development")}
            >
              Web Development
            </button>
            <button
              className={
                selectedButtons?.includes("Game Development")
                  ? "selected"
                  : "bg-slate-100"
              }
              onClick={() => handleButtonClick("Game Development")}
            >
              Game Development
            </button>
            <button
              className={
                selectedButtons?.includes("Data Structures")
                  ? "selected"
                  : "bg-slate-100"
              }
              onClick={() => handleButtonClick("Data Structures")}
            >
              Data Structures
            </button>
            <button
              className={
                selectedButtons?.includes("Programming")
                  ? "selected"
                  : "bg-slate-100"
              }
              onClick={() => handleButtonClick("Programming")}
            >
              Programming
            </button>
            <button
              className={
                selectedButtons?.includes("Machine Learning")
                  ? "selected"
                  : "bg-slate-100"
              }
              onClick={() => handleButtonClick("Machine Learning")}
            >
              Machine Learning
            </button>
            <button
              className={
                selectedButtons?.includes("Data Science")
                  ? "selected"
                  : "bg-slate-100"
              }
              onClick={() => handleButtonClick("Data Science")}
            >
              Data Science
            </button>
            <button
              className={
                selectedButtons?.includes("Others")
                  ? "selected"
                  : "bg-slate-100"
              }
              onClick={() => handleButtonClick("Others")}
            >
              Others
            </button>
          </div>

          <div className="modal-action">
            <label htmlFor="interests-modal" className="btn btn-sm mr-5 px-6">
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

export default InterestsModal;
