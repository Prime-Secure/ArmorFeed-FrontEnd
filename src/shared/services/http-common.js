import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:7017/api/v1",
  headers: { "Content-type": "application/json" },
});
