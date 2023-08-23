import { defineStore } from "pinia";
import axios from "axios";

axios.defaults.withCredentials = true;

const router = useRouter();

const loginuser = ref([]);
const loginToken = ref("");
const loginData = ref([]);
const wrongUser = ref("");
const signupError = ref("");
const regUser = ref("");
const search = ref([]);
const editPassError = ref("");
const adminUser = ref("");


const userObj = reactive({
  loginemail: "",
  loginpswd: "",
});

export const useCourseraStore = defineStore("Coursera", () => {
  const postUsers = async (url, userObj) => {
    wrongUser.value = "";
    var data = JSON.stringify({
      email: userObj.loginemail,
      password: userObj.loginpswd,
    });

    var config = {
      method: "POST",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        localStorage.setItem("coursera project user", response.data.user.email);
        loginuser.value = response.data.user.email;
        adminUser.value = response.data.user.role;
        loginToken.value = response.data.token;
       

      
        localStorage.setItem("UserId", response.data.user.userId);
      })

      .catch(function (error) {
        console.log(error, "error");

        wrongUser.value = error.response.data.error;
      });
  };

  const SignUp = async (userData) => {
    signupError.value = "";
    try {
      const res = await axios.post("http://localhost:3000/sign-up", userData);
      console.log("fdsf", res.data);

      localStorage.setItem("coursera project user", res.data.email);
      regUser.value = res.data.email;
    } catch (error) {
      signupError.value = error.response.data.message;
      console.log(error.response.data.message);
    }
  };

  const handleSearch = async (url) => {
    try {
      const res = await axios.get(url);
      search.value = res.data;
      console.log("search.value", res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const updateUser = async (url, userData) => {
    editPassError.value = "";
    try {
      const res = await axios.put(url, userData);
      console.log("res", res.data);
      return res;
    } catch (error) {
      console.log(error);
      editPassError.value = error.response.data.message;
      console.log("editPassError", editPassError.value);
      throw new Error("user not sign-up");
    }
  };

  const imageUpdate = async (url, userData) => {
    editPassError.value = "";
    try {
      const formData = new FormData();
      formData.append("image", userData);
      const res = await axios.put(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("res", res.data);
      return res;
    } catch (error) {
      console.log(error);
      editPassError.value = error.response.data.message;
      console.log("editPassError", editPassError.value);
      throw new Error("user not sign-up");
    }
  };

  return {
    postUsers,
    loginuser,
    loginToken,
    loginData,
    userObj,
    wrongUser,
    SignUp,
    signupError,
    regUser,
    handleSearch,
    search,
    updateUser,
    editPassError,
    imageUpdate,
    adminUser,
    
  };
});
