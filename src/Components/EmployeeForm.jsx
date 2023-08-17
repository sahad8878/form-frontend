import React, { useState } from "react";

import { postEmployeeDetails } from "../Utils/Api";
import {message} from "antd"
// import TagsInput from "react-tagsinput";
// import "react-tagsinput/react-tagsinput.css";
const EmployeeForm = () => {
  //   const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [ joiningDate, setJoiningDate] = useState("");
  const [gender, setGender] = useState("");
  const [experiences, setExperiences] = useState([
    { company: "", startYear: "", endYear: "", designation: "" },
  ]);

  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [employeeIdError, setEmployeeIdError] = useState("");
  const [designationError, setDesignationError] = useState("");
  const [joiningDateError, setJoiningDateError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [addressError, setAddressError] = useState("");


  const [experienceErrors, setExperienceErrors] = useState([
    { company: "", year: "", designation: "" },
  ]);
 
  const validateForm = () => {
    let isValid = true;

    // Validate name
    if (name === "") {
      setNameError("Please enter this field.");
      isValid = false;
    } else {
      setNameError("");
    }
    // validate mobile
    if (mobile === "") {
      setMobileError("Please enter valid number.");
      isValid = false;
    }
    else {
      setMobileError("");
    }
    // validate embloyee id
    if (employeeId === "") {
      setEmployeeIdError("Please enter this field.");
      isValid = false;
    } else {
      setEmployeeIdError("");
    }
    // valid dasignation
    if (designation === "") {
      setDesignationError("Please enter this field.");
      isValid = false;
    } else {
      setDesignationError("");
    }
    // valid joiningdata
    if (joiningDate === "") {
      setJoiningDateError("Please enter this field.");
      isValid = false;
    } else {
      setJoiningDateError("");
    }
    // valid gender
    if (gender === "") {
      setGenderError("Please enter this field.");
      isValid = false;
    } else {
      setGenderError("");
    }

    // Validate email
    if (email === "") {
      setEmailError("Please enter your email.");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate address
    if (address === "") {
      setAddressError("Please enter your address.");
      isValid = false;
    } else {
      setAddressError("");
    }

    // Validate experiences
    const updatedExperienceErrors = experiences.map((experience) => {
      const errors = {};
      if (experience.company === "") {
        errors.company = "Please enter the company.";
        isValid = false;
      }
      if (experience.startYear === "") {
        errors.startYear = "Please enter the start year.";
        isValid = false;
      }
      if (experience.endYear === "" && !experience.currently) {
        errors.endYear = "Please enter the end year.";
        isValid = false;
      }
      if (experience.designation === "") {
        errors.designation = "Please enter the designation.";
        isValid = false;
      }
      return errors;
    });
    setExperienceErrors(updatedExperienceErrors);

    
    return isValid;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
console.log(nameError,mobileError,employeeIdError,designationError,joiningDateError,emailError,genderError,addressError);
    if (validateForm()) {
      const data ={
        name,
        mobile,
        email,
        employeeId,
        address,
        designation,
        joiningDate,
        gender,
        experiences
      }
  
     const res = await postEmployeeDetails(data)
       if(res.success) {
        message.success(res.message)
        setName("");
        setEmail("");
        setMobile();
        setEmployeeId();
        setDesignation("");
        setJoiningDate("");
        setAddress("");
        setGender("");
        setExperiences([
          { company: "", startYear: "", endYear: "", designation: "" },
        ]);
     
       }else {
        message.error(res.message)
       }

    }
  };

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        company: "",
        startYear: "",
        endYear: "",
        designation: "",
        currently: false,
      },
    ]);
  };



  const handleRemoveExperience = (index) => {
    const updatedExp = [...experiences];
    updatedExp.splice(index, 1);
    setExperiences(updatedExp);
  };


  const handleOptionChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <div className="  mt-5 mb-5 px-36">
      <div>
        <h1 className="text-center font-medium">Employee Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex w-full gap-4 ">
            <div className="form-group w-full">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="border w-full"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && (
                <span className="text-red-500">{nameError}</span>
              )}
            </div>

            <div className="form-group w-full">
              <label htmlFor="email">Mobile:</label>
              <input
                type="number"
                className="border w-full"
                id="email"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              {mobileError && (
                <span className="text-red-500">{mobileError}</span>
              )}
            </div>
          </div>
          <div className="flex w-full gap-4 ">
            <div className="form-group w-full">
              <label htmlFor="name">Email:</label>
              <input
                type="email"
                className="border w-full"
                id="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <span className="text-red-500">{emailError}</span>
              )}
            </div>

            <div className="form-group w-full">
              <label htmlFor="email">Employee ID:</label>
              <input
                type="number"
                className="border w-full"
                id="email"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
              />
              {employeeIdError && (
                <span className="text-red-500">{employeeIdError}</span>
              )}
            </div>
          </div>
          <div className="flex w-full gap-4 ">
            <div className="form-group w-full">
              <label htmlFor="name">Designation:</label>
              <input
                type="text"
                className="border w-full"
                id="name"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
              {designationError && (
                <span className="text-red-500">{designationError}</span>
              )}
            </div>

            <div className="form-group w-full">
              <label htmlFor="email">Joining date:</label>
              <input
                type="date"
                className="border w-full"
                id="email"
                value={joiningDate}
                onChange={(e) => setJoiningDate(e.target.value)}
              />
              {joiningDateError && (
                <span className="text-red-500">{joiningDateError}</span>
              )}
            </div>
          </div>
      

          {/*  */}
          <label className=" text-gray-700 font-medium mb-2 " htmlFor="sex">
            Gender
          </label>
          <div className="flex  flex-wrap  bg-white">
            <div className=" border-r  p-2 w-1/3  ">
              <input
                type="radio"
                id="male"
                name="sex"
                value="male"
                checked={gender === "male"}
                onChange={handleOptionChange}
              />
              <label
                className="inline-block  text-gray-600 font-medium"
                htmlFor="male"
              >
                Male
              </label>
            </div>
            <div className=" w-1/3 border-r   p-2  ">
              <input
                type="radio"
                id="feMale"
                name="sex"
                value="feMale"
                checked={gender === "feMale"}
                onChange={handleOptionChange}
              />
              <label
                className="inline-block  text-gray-600 font-medium"
                htmlFor="feMale"
              >
                Female
              </label>
            </div>
            <div className=" p-2 w-1/3">
              <input
                type="radio"
                id="option3"
                name="sex"
                value="others"
                checked={gender === "others"}
                onChange={handleOptionChange}
              />
              <label
                className="inline-block  text-gray-600 font-medium"
                htmlFor="others"
              >
                Others
              </label>
            </div>
          </div>
          {genderError && (
            <span className="error text-red-400">{genderError}</span>
          )}
          {/*  */}

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              className="border w-full"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {addressError && (
              <span className="text-red-500">{addressError}</span>
            )}
          </div>

          <h4>Experiences:</h4>
          {experiences.map((exp, index) => (
            <div key={index} className="flex my-2 ">
              <div className="flex flex-col mx-2">
                <label htmlFor={`company-${index}`}>Company:</label>
                <input
                  type="text"
                  className="border"
                  id={`company-${index}`}
                  value={exp.company}
                  onChange={(e) => {
                    const updatedExp = [...experiences];
                    updatedExp[index].company = e.target.value;
                    setExperiences(updatedExp);
                  }}
                />
                {experienceErrors.map((error) => (
                  <span className="text-red-500">
                    {error.company}
                  </span>
                ))}
              </div>
              <div className="flex flex-col mx-2">
                <label htmlFor={`designation-${index}`}>Designation:</label>
                <input
                  type="text"
                  className="border"
                  id={`designation-${index}`}
                  value={exp.designation}
                  onChange={(e) => {
                    const updatedExp = [...experiences];
                    updatedExp[index].designation = e.target.value;
                    setExperiences(updatedExp);
                  }}
                />
                {experienceErrors.map((error) => (
                  <span className="text-red-500">
                    {error.designation}
                  </span>
                ))}
              </div>

              <div className="flex flex-col mx-2">
                <label htmlFor={`startYear-${index}`}>Start Year:</label>
                <input
                  type="text"
                  className="border"
                  id={`startYear-${index}`}
                  value={exp.startYear}
                  onChange={(e) => {
                    const updatedExp = [...experiences];
                    updatedExp[index].startYear = e.target.value;
                    setExperiences(updatedExp);
                  }}
                />
                {experienceErrors.map((error) => (
                  <span className="text-red-500">
                    {error.startYear}
                  </span>
                ))}
              </div>

              <div className="flex flex-col mx-2">
                <label htmlFor={`endYear-${index}`}>End Year:</label>
                <input
                  type="text"
                  className="border"
                  id={`endYear-${index}`}
                  value={exp.endYear}
                  onChange={(e) => {
                    const updatedExp = [...experiences];
                    updatedExp[index].endYear = e.target.value;
                    setExperiences(updatedExp);
                  }}
                //   disabled={exp.currently}
                />
                {experienceErrors.map((error) => (
                  <span className="text-red-500">
                    {error.endYear}
                  </span>
                ))}
              </div>


              {index > 0 && (
                <div className="form-group  " style={{ marginTop: 30 }}>
                  <button
                    type="button"
                    className="bg-red-400"
                    onClick={() => handleRemoveExperience(index)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          ))}
          <button
            type="button"
            className="bg-slate-400 p-1"
            onClick={handleAddExperience}
          >
            Add More
          </button>


          <div className=" flex justify-center items-center">
            <button type="submit" className="bg-slate-400 p-2 mt-5 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
