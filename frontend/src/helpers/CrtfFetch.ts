import axios from "../helpers/axios";

const csrfToken = async () => {
  await axios.get("http://localhost:8000/sanctum/csrf-cookie");
  return true;
};
