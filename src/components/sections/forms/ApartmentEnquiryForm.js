import React, { useState } from "react";
import close from "../../../images/close.svg";
import axios from "axios";
function ApartmentEnquiryForm({ childState, updateState, selectedValue }) {
  const validEmail = new RegExp(/\S+@\S+\.\S+/);
  const validNumber = new RegExp("^[0-9]{10}$");

  const [mailData, setMailData] = useState({
    prop_info: selectedValue.title,
    name: "",
    number: "",
    email: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const [error, setError] = useState({
    name: "",
    number: "",
    email: "",
  });

  const [adding, setAdding] = useState(true);
  const [addError, setaddError] = useState({});

  const modalClose = () => {
    if (typeof document !== "undefined") {
      document.body.classList.remove("modal_class");
      updateState(false);
    }
  };

  const spaces =
    Math.round(selectedValue?.propertiesData?.externalArea) +
    Math.round(selectedValue?.propertiesData?.internalArea);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMailData((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    isValidData(event);
  };

  const isValidData = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "name":
          if (!value) {
            stateObj[name] = "Please enter your name.";
          } else if (value.length < 5) {
            stateObj[name] = "Please enter atleast 5 letters.";
          }
          break;

        case "number":
          if (!value) {
            stateObj[name] = "Please enter a valid number .";
          } else if (!validNumber.test(value)) {
            stateObj[name] = "Please enter a valid number ";
          }
          break;

        case "email":
          if (!value) {
            stateObj[name] = "Please enter a valid email address.";
          } else if (!validEmail.test(value)) {
            stateObj[name] = "Please enter valid email address.";
          }
          break;

        default:
          break;
      }
      var a = stateObj;
      setaddError(a);
      if (
        addError.name === "" &&
        addError.number === "" &&
        addError.email === ""
      ) {
        setAdding(false);
      }

      return stateObj;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // isValidData(event);

    console.log("mailData", mailData);
    console.log("isChecked", isChecked);

    if (isChecked === false) {
      alert("Please accept our terms for personal data processing");
    } else if (
      addError.name === "" &&
      addError.number === "" &&
      addError.email === "" &&
      isChecked === true
    ) {
      setAdding(false);
      console.log("mailData", mailData);
      updateState(false);
      axios
        .post(
          "http://verdalastage.bison-studio.com/wp-json/wp/v2/sendmail",
          mailData
        )
        .then(function (response) {
          console.log(response);
          setAdding(false);
          // resetForm();
          updateState(false);
          setMailData("");
          alert("Thanks for your enquiry. We'll get back to you shortly.");
        })
        .catch(function (error) {
          setAdding(false);
          console.log("error", error);
        });
    } else {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="apartment_form">
        <div className="apartment_form_inner">
          <button
            className="close-btn"
            type="button"
            onClick={() => modalClose()}
          >
            <img src={close}></img>
          </button>
          <div className="form_pop_info-main">
            <div className="form_pop_info">
              <div className="pop_title">Apartments</div>

              <h2>{mailData.prop_info}</h2>
              <div className="pop_info_inner">
                <span>Floor: {selectedValue.propertiesData.floorNumber}</span>
                <span>Size: {spaces} </span>
                <span>Bedrooms: {selectedValue.propertiesData.bedrooms}</span>
              </div>
            </div>
            <div className="apartment_form_body">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-input">
                  <input
                    type="text"
                    name="name"
                    className=""
                    id="name"
                    placeholder="Your Name"
                    value={mailData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                {error.name && <span className="err">{error.name}</span>}

                <div className="form-input">
                  <input
                    type="number"
                    name="number"
                    className=""
                    id="number"
                    placeholder="Telephone Number"
                    value={mailData.number}
                    onChange={handleChange}
                    required
                  />
                </div>
                {error.number && <span className="err">{error.number}</span>}

                <div className="form-input">
                  <input
                    type="email"
                    className=""
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={mailData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                {error.email && <span className="err">{error.email}</span>}

                <div className="form-group form-check">
                  <input
                    name="acceptTerms"
                    type="checkbox"
                    id="acceptTerms"
                    checked={isChecked}
                    onChange={checkHandler}
                  />
                  <label for="acceptTerms" className="form-check-label">
                    BY CLICKING ON THE «SUBMIT A REQUEST» BUTTON YOU ACCEPT OUR
                    TERMS FOR PERSONAL DATA PROCESSING
                  </label>
                </div>

                <div className="form-button">
                  <button
                    type="submit"
                    // disabled={isChecked ? false : true}
                    // disabled={adding}
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
            <div className="form_popup_text">
              Any information provided on this website is for information
              purposes only and under no circumstances constitutes a public
              offer as defined by the provisions of Article 437 of the Civil
              Code of the Russian Federation. Finished objects may differ from
              the 3D visualisations presented. All materials presented are
              indicative and subject to any changes.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApartmentEnquiryForm;
