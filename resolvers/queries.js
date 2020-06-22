const axios = require("axios");

const queries = {
  getForm: async (_, { id }) => {
    try {
      const response = await axios.get(`https://api.typeform.com/forms/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = queries;
