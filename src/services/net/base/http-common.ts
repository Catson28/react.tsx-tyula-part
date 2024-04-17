import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://zezao.pythonanywhere.com",
  headers: {
    "Content-type": "application/json",
  },
});
