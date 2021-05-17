import axios from "axios";

const randomEmployeeURL = "https://randomuser.me/api/?results=50";

const randoAPI = {
  search: function () {
    return axios.get(randomEmployeeURL);
  },
};

export default randoAPI;
