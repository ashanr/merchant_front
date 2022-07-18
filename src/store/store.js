import Vue from 'vue'
import Vuex from 'vuex'
import login from "@/store/auth/login";
import user from "@/store/common/user";
import forum from "@/store/rs/siteuser";
import siteuser from "@/store/rs/siteuser";
import role from "@/store/common/role";

import { SnotifyPosition, SnotifyStyle } from 'vue-snotify';

Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false
}

const mutations = {
  toggleSidebarDesktop(state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile(state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set(state, [variable, value]) {
    state[variable] = value
  },

  showNotification: (state, data) => {
    let type = "";

    switch (data.type) {
      case "error": {
        type = SnotifyStyle.error;
        break;
      }
      case "success": {
        type = SnotifyStyle.success;
        break;
      }
      case "info": {
        type = SnotifyStyle.info;
        break;
      }
      case "warning": {
        type = SnotifyStyle.warning;
        break;
      }
      case "async": {
        type = SnotifyStyle.async;
        break;
      }
      case "confirm": {
        type = SnotifyStyle.confirm;
        break;
      }
      case "prompt": {
        type = SnotifyStyle.prompt;
        break;
      }
      default: {
        type = SnotifyStyle.simple;
        break;
      }
    }
    Vue.$snotify.clear();

    Vue.$snotify.create({
      title: data.title,
      body: data.msg,
      config: {
        position: SnotifyPosition.centerTop,
        type: type,
        timeout: 5000,
        closeOnClick: true,
        pauseOnHover: true
      }
    })
  },

  handleExceptions(state, error) {
    if (error.response) {
      if (error.response.data.error) {
        //Show Error Message when error is not Field Validation Error
        if (error.response.data.code != 422) {
          this.commit(
            "showNotification",
            {
              title: "Error!",
              msg: error.response.data.error,
              type: "error",
              position: "centerTop"
            },
            { root: true }
          );
        } else if (error.response.data.code == 401) {
          this.commit(
            "showNotification",
            {
              title: "Error!",
              msg: "Unauthenticated! Please Login to Forum",
              type: "error",
              position: "centerTop"
            },
            { root: true }
          );

          //Destroy Token And Logout When Unauthorized Error Response
         // store.commit('login/doLogout');
        }

      }
      else {
        this.commit(
          "showNotification",
          {
            title: "Error!",
            msg: "Oops..something went wrong.",
            type: "error",
            position: "centerTop"
          },
          { root: true }
        );
      }
    } else {
      this.commit(
        "showNotification",
        {
          title: "Error!",
          msg: "Oops..something went wrong.Please check your internet connectivity",
          type: "error",
          position: "centerTop"
        },
        { root: true }
      );
    }

  },

}

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    login,
    user,
    siteuser,
    forum,
    role,
   
  },
})