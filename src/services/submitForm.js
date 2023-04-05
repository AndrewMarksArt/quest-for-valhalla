import axios from 'axios';

export const submitForm = async (email) => {
  try {
    const response = await axios.post('/api/save-email', { email });
    console.log(response.data);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
