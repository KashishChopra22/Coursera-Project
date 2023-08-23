import { defineStore } from "pinia";
import axios from "axios";

const enrollUser = ref("");
const errorEnrolled = ref("");
const enrolledCourse = ref([]);
const progressCourse= ref([]);
const completedCourse= ref([]);
const allCoursesEnrolled = ref([]);
const adminData = ref([]);

axios.defaults.withCredentials = true;

// axios.defaults.headers.common["Authorization"] =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUwLCJlbWFpbCI6InNha3NoaTJAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpc192ZXJpZmllZCI6ZmFsc2UsImlhdCI6MTY5MTY2NTk4NX0.Fyrdpgkrq4XRXV2FNnXS7Rvk_aYZc6HMfZy70zj-yfU";

export const useFreeCoursesStore = defineStore("Free Courses", () => {
  const freeCourse = ref([]);

  const getFreeCourses = async (url) => {
    const { data: result } = await useFetch(url);

    freeCourse.value = await result.value;
    // console.log("result", freeCourse.value);
  };

  const createEnroll = async (url, email, courseSlug) => {
    errorEnrolled.value = "";
    var data = JSON.stringify({
      email: email,
      courseSlug: courseSlug,
    });

    var config = {
      method: "POST",
      url: url,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUxLCJlbWFpbCI6Imthc2hpc2hAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaXNfdmVyaWZpZWQiOmZhbHNlLCJpYXQiOjE2OTIxNjMxMjR9.87c24oIe_gt1USjMBUNZFaCVCbyjdl64qAPAAB0xXgc",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        enrollUser.value= response.data
        console.log( enrollUser.value, "123");
      })

      .catch(function (error) {
        console.log("gdfgdfgdf", error.response.data.message);
        errorEnrolled.value = error.response.data.message;
      });
  };

  const getEnrolledCourses = async (checkEnrollUrl, email) => {
    const test = { email };
    const { data } = await axios.get(checkEnrollUrl, test);

    console.log("pagination data",data);
    allCoursesEnrolled.value = data;
  };

  const getPaginationCourses = async (allData) => {
    const test = { allData };
    const { data } = await axios.get(
      `http://localhost:3000/course?page=${allData.page}&pageSize=${allData.pageSize}&status=${allData.status}`,
      test
    );

    console.log("pagination data", data);
    allCoursesEnrolled.value = data;
  };

   const getProgressCourse = async (url, dataa) => {
     try {
       const res = await axios.post(url, {
         email: dataa.email,
       });
       console.log("res", res.data);
       progressCourse.value = res.data;
       // return res;
     } catch (error) {
       console.log("error", error);
     }
     //  var data = JSON.stringify({
     //    email: dataa.emailToken,
     //  });

     //  var config = {
     //    method: "POST",
     //    url: url,
     //    headers: {
     //      "Content-Type": "application/json",
     //    },
     //    data: data,
     //  };

     //  axios(config)
     //    .then(function (response) {
     //      console.log("response", response.data);
     //       progressCourse.value = response.data;

     //    })

     //    .catch(function (error) {
     //      console.log(error);
     //    });
     onMounted(() => getProgressCourse(url, dataa));
   };

      const getCompletedCourse = async (url, dataa) => {
        var data = JSON.stringify({
          email: dataa.emailToken,
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
            console.log("response", response.data);
            completedCourse.value = response.data;
          })

          .catch(function (error) {
            console.log(error);
          });
      };
  return {
    getFreeCourses,
    freeCourse,
    createEnroll,
    enrollUser,
    enrolledCourse,
    getEnrolledCourses,
    getProgressCourse,
    progressCourse,
    allCoursesEnrolled,
    errorEnrolled,
    getCompletedCourse,
    completedCourse,
    getPaginationCourses,
  };
});
