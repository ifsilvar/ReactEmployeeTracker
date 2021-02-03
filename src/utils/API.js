import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=10&inc=name,registered&nat=fr";
// const APIKEY = "&apikey=trilogy";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
