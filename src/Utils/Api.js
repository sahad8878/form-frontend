import axios from "../Axios/Axios";

export const postEmployeeDetails = async (postData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post("/postEmployeeDetails", postData, config);
  return response.data;
};