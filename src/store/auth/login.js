import router from "@/router";
import { http } from "@/config/http";
import _ from "lodash";

const namespaced = true;

const getDefaultState = () => {
    return {
        errors: [],
        role_id: "56"
    };
};

const state = {
    user_id: localStorage.getItem("user_id") || null,
    access_token: localStorage.getItem("access_token") || null,
    email: localStorage.getItem("email") || null,
    role_id: localStorage.getItem("role_id") || null,
    role_name: localStorage.getItem("role_name") || null,
    first_name: localStorage.getItem("first_name") || null,
    last_name: localStorage.getItem("last_name") || null,
    profile_picture: localStorage.getItem("profile_picture") 
};

const getters = {
    loggedIn() {
        //console.log(localStorage.getItem("access_token") == "") 
        return localStorage.getItem("access_token") != null || localStorage.getItem("access_token") == "";
    }
};

const mutations = {
    setFormErrors(state, data) {
        state.errors = [];
        if (data) {
            state.errors = data.details;
        }
    },

    doLogin(state, response) {
        const token = response.data.access_token;
        if (token) {

            localStorage.setItem("user_id", response.data.user_data.user_id);
            localStorage.setItem("access_token", token);
            localStorage.setItem("email", response.data.user_data.email);
            localStorage.setItem("role_id", response.data.user_data.role);
            localStorage.setItem("role_name", response.data.user_data.role_name);
            localStorage.setItem("first_name", response.data.user_data.first_name);
            localStorage.setItem("last_name", response.data.user_data.last_name);

            state.access_token = token;
            state.email = response.data.user_data.email;
            state.user_id = response.data.user_data.user_id;
            state.role_id = response.data.user_data.role;
            state.role_name = response.data.user_data.role_name;
            state.first_name = response.data.user_data.first_name;
            state.last_name = response.data.user_data.last_name;
            // router.push("/dashboard");
        } else {
            // router.push("/login");
        }
    },

    doLogout(state) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("role_id");
        localStorage.removeItem("email");
        localStorage.removeItem("role_name");
        localStorage.removeItem("first_name");
        localStorage.removeItem("last_name");
        state.access_token = null;
        state.user_id = null;
        state.role_id = '';
        state.email = '';
        state.role_name = '';
        state.first_name = '';
        state.last_name = '';
        router.push("/login");
    }
};

const actions = {


    async getToken({ commit }, data) {
        return new Promise((resolve, reject) => {
            http
                .post("auth/login", data)
                .then(response => {
                    console.log(response);
                    if (response.error) {
                          
                    } else {
                        commit("doLogin", response);
                    }
                    resolve(response);

                })
                .catch(error => {
                    //console.log(response.data);
                      commit("handleExceptions", error, { root: true });
                    // commit("doLogout", response);
                });
        });
    },

    async destoryToken({ commit }) {
        await http
            .post("auth/logout", null, {})
            .then(response => {
                if (response.data.status == "true") {
                    commit("doLogout");
                } else {
                    commit("doLogout");
                }
            })
            .catch(error => {
                //console.log(error);
                commit("doLogout");
            });
    },

    async submitForgotPassword({ commit }, data) {
        return new Promise((resolve, reject) => {
            http
                .post("forgot", data)
                .then(response => { 
                    resolve(response);
                })
                .catch(error => {
                    //console.log(error);
                    commit("doLogout");
                });
        });
    },

    async resetPassword({commit}, data) {
        return new Promise((resolve, reject) => {
             http
                .post("reset", data)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    resolve(error.response);
                });
        });
    },
};

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
