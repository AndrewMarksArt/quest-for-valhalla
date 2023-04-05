import axios from "axios";

const submitForm = async (email) => {
  try {
    await axios.post("/api/save-email", { email });
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};

export default submitForm;
