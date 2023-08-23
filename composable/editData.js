import { ref, watchEffect, isRef } from "vue";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.headers.common["Authorization"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUxLCJlbWFpbCI6Imthc2hpc2hAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaXNfdmVyaWZpZWQiOmZhbHNlLCJpYXQiOjE2OTE4MTc4Nzh9.QFtA7u_PIMO7QKAbMN6hpOjxB8DSSJfiCByikSByjV0";

export function stdEditData() {
  const editPassError = ref("");
  const search = ref([]);

  // Get for topic wise videos 
  const handleSearch = async (url) => {
    try {
      const res = await axios.get(url);
      search.value = res.data;
      console.log("search.value", res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return { updateUser, editPassError, handleSearch, search };
}

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
// Call for getall categories, topics, admin main categories, coursesHome/data, paid courses, get all users
export function getCoursesData() {
  const allCourses = ref([]);
  const error = ref(null);

  const getAllcourses = async (allCoursesurl) => {
    try {
      // const test = { email };
      const { data } = await axios.get(allCoursesurl);
      allCourses.value = data;
    } 
    
    catch (err) {
      error.value = err;
    }
  };

  return { allCourses, error, getAllcourses };
}

export function AdminUpdate() {
  const updateCourses = async (id, course) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/course/${id}`,
        course,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("response", response);
      return response;
    } catch (error) {
      throw new Error("not fetch course");
    }
  };

  return { updateCourses };
}

export function AdminCreate() {
  const createCourse = async (url, userData) => {
    try {
      const formData = new FormData();
      formData.append("category", userData.category);
      formData.append("course_title", userData.course_title);
      formData.append("description", userData.description);
      formData.append("level", userData.level);
      formData.append("status", userData.status);
      formData.append("thumbnail", userData.thumbnail);
      formData.append("price", userData.price);
      formData.append("is_free", userData.is_free);

      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("res", res.data);
      return res;
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message, "54");

      throw new Error("user not sign-up");
    }
  };

  return { createCourse };
}

export function RoleChange() {
  const roleData = ref();
  const AdminChangeRole = async (email, userData) => {
    try {
      const res = await axios.put(`http://localhost:3000/user/admin/${email}`, {
        role: userData.role,
        is_verified: userData.is_verified,
      });
      if (res.status === 200) {
        console.log("response", res);
        roleData.value = res;

        // fetchAllUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { AdminChangeRole, roleData };
}

// Post for topic wise video progress
export function getParent() {
  const categoryExist = ref("");
  const SubcategoryExist = ref("");

  const createParentCategory = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/category", {
        name: data.course_title,
        status: data.status,
      });
      categoryExist.value = res.data.message;
    } catch (error) {
      console.log("error: ", error);
     
    }
  };

  const createSubCategory = async (subCategory) => {
    try {
      const res = await axios.post("http://localhost:3000/category", {
        name: subCategory.course_title,
        status: subCategory.status,
        parent_category_id: subCategory.parentId,
      });
      console.log("response: ", res);
      SubcategoryExist.value = res.data.message;
    } catch (error) {
      throw new Error("Failed to create main category");
    }
  };
  return {
    createParentCategory,
    categoryExist,
    createSubCategory,
    SubcategoryExist,
  };
}

export function getTopics() {
  const topicsData = ref("");

  const createNewTopic = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/topic", {
        topic: data.topic,
        course: data.course,
      });
      console.log("res", res);
      topicsData.value = res;
    } catch (error) {
      console.log("error: ", error);
      // throw new Error("Failed to create main category");
    }
  };
  return { createNewTopic, topicsData };
}

// Delet categories
export function DeleteTopics() {
  const delResponse = ref("");
  const deleteNewTopic = async (url) => {
    try {
      const res = await axios.delete(url);
      console.log("delete", res);
      delResponse.value = res.status;
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return { deleteNewTopic, delResponse };
}

export function EditCategory() {
  const activeResponse= ref("")
  const activeVal= ref("")
  const updateMainCategory = async (url, userData) => {
    try {
      const res = await axios.put(url, {
        name: userData.name,
      });
      console.log("res", res.data);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  
  const updateMainCategoryToActive = async (url) => {
    try {
      const res = await axios.patch(url);
      console.log("active ", res);
      console.log("active res", res.status);
    activeResponse.value= res.status;
    activeVal.value= res.data.status
    } 
    
    catch (error) {
      console.log(error);
    }
  };
  return {
    updateMainCategory,
    updateMainCategoryToActive,
    activeResponse,
    activeVal,
  };
}


export function Enroll()
{
const enrollUser= ref({});
const errorEnrolled = ref("");
const enrollState= ref(false);

  const createEnroll = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/enrollment", {
        email: data.email,
        courseSlug: data.courseSlug,
      });
      console.log("res", res);
     enrollUser.value = res.data;

     if(enrollUser.value.length > 0) {
      enrollState.value = true;
     }
    } 
    
    catch (error) {
      console.log("error: ", error);
      errorEnrolled.value = error.response.data.message;
    }
  };


return { createEnroll, enrollUser, errorEnrolled, enrollState };

};

// use for complete course, progress course
export function progress(){
const progressCourse= ref([]);

   const getProgressCourse = async (url, dataa) => {
     try {
       const res = await axios.post(url, {
         email: dataa.email,
       });
       console.log("res", res.data);
       progressCourse.value = res.data;
       
     } catch (error) {
       console.log("error", error);
     }
    
    }

    return { getProgressCourse, progressCourse };
   };

   export function Otp()
   {
    const otpResponse = ref("");
    const invalidOtp = ref();
    const getUserOtp = async (otpurl, otpData) => {
      try {
        const res = await axios.post(otpurl, {
          email: otpData.email,
        });
        console.log("res", res);
       
      } 
      
      catch (error) {
        console.log("error", error);
      }
    };
    const verifyUserOtp = async (otpurl, otpData) => {
      
      try {
        const res = await axios.post(otpurl, {
          email: otpData.email,
          otp: otpData.otp,
        });
        console.log("verify res", res);
       otpResponse.value = res.data.message;
      } 
      
      catch (error) {
        console.log("error verify", error.response.status);
       invalidOtp.value= error.response.status
      }
    };


    return { getUserOtp, verifyUserOtp, otpResponse, invalidOtp };
   }


   export function RazorPayPayment()
   {
    const paymentSuccess= ref({})
    const confirmByRazorpay = async (res) => {
     try {
       const createPayment = await axios.post(
         'http://localhost:3000/process/order',res
        
       );

console.log("paymentSuccess", createPayment);
paymentSuccess.value = createPayment.status
       console.log("payy", paymentSuccess.value);
     }
     
     catch (error) {
       return new Error("something went wrong");
     }
   };
   return { confirmByRazorpay, paymentSuccess };
  }

 