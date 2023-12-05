import axios from "../helpers/axios";

async function register({
  email,
  password,
  name,
  phone_number,
  company_name,
}: {
  name: string;
  company_name: string;
  email: string;
  password: string;
  phone_number: string;
}) {
  try {
    const response = await axios.post("/register", {
      email,
      password,
      name,
      phone_number,
      company_name,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

async function login(email: string, password: string) {
  try {
    const response = await axios.post("/login", {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

function logout() {}
function forgotPassword() {}
function resetPassword() {}
const authFunctions = {
  login,
  register,
  logout,
  forgotPassword,
  resetPassword,
};

export default authFunctions;
