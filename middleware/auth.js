export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated


   if (!localStorage.getItem("coursera project user")) {
     return navigateTo("/Signup");
   }
});
