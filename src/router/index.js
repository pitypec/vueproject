import Vue from "vue";
import Router from "vue-router";
import login from "@/pages/login.vue";
import signup from "@/pages/signup.vue";
import dashboard from "@/pages/dashboard.vue";
import pagenotfound from "@/pages/pagenotfound.vue";
import profiledetails from "@/pages/profiledetails.vue";
import settings from "@/pages/settings.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path: "/signup",
      name: "signup",
      component: signup
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: dashboard
    },
    {
      path: "/profiledetails",
      name: "profiledetails",
      component: profiledetails
    },
    {
      path: "/settings",
      name: "settings",
      component: settings
    },
    {
      path: "*",
      name: "pagenotfound",
      component: pagenotfound
    }
  ]
});

export default router;
