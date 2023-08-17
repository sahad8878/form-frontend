import React, { useState } from "react";
import ExperienceTable from "./ExperienceTable";
// import axios from 'axios';

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    mobile: "",
    email: "",
    // other fields
    experiences: [],
  });

  const handleAddExperience = () => {
    setEmployeeData((prevData) => ({
      ...prevData,
      experiences: [
        ...prevData.experiences,
        { companyName: "", designation: "", timePeriod: "" },
      ],
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...employeeData.experiences];
    updatedExperiences[index][field] = value;
    setEmployeeData((prevData) => ({
      ...prevData,
      experiences: updatedExperiences,
    }));
  };

  const handleSubmit = () => {
    // axios.post('/api/employees', employeeData)
    //   .then(response => {
    //     console.log(response.data.message);
    //     // Handle success or redirect
    //   })
    //   .catch(error => {
    //     console.error('Error saving data:', error);
    //     // Handle error
    //   });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div cla>
          <div className="">
            <label>
              Employee Name:
              <input
                type="text"
                value={employeeData.name}
                onChange={(e) =>
                  setEmployeeData({ ...employeeData, name: e.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label>
              Employee Mobile No:
              <input
                type="text"
                value={employeeData.mobile}
                onChange={(e) =>
                  setEmployeeData({ ...employeeData, mobile: e.target.value })
                }
              />
            </label>
          </div>
        </div>
        {/* Other fields */}

        <ExperienceTable
          experiences={employeeData.experiences}
          onExperienceChange={handleExperienceChange}
        />

        <button type="button" onClick={handleAddExperience}>
          Add Experience
        </button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
