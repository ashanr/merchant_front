import router from "@/router";
import { http } from "@/config/http";
import _ from "lodash";

const namespaced = true;

const getDefaultState = () => {
    return {
        userData: {
            id:"",
            title: "",
            first_name: "",
            last_name: "",
            email: "",
            role: "",
            company_id: "",
            branch_id: "",
            contact_no: "",
            status: true,
            branch_id: "",
            profile_picture:"",
            signature:""
        },
        formData: {
            title_list: [],
            company_list: [],
            role_list: [],
            branch_list: []
        }


    };
};

const state = getDefaultState();

const getters = {};

const mutations = {
    setFormErrors(state, data) {
        state.errors = [];
        if (data) {
            state.errors = data.details;
        }
    },
    setCompanyList(state, data) {
        const selected = state.formData.company_list;
        data.forEach(function (company, index) {
            let obj = {
                value: company.id,
                label: company.name
            };
            selected.push(obj);
        });

    },

    setRoleList(state, data) {
        const selected = state.formData.role_list;
        data.forEach(function (role, index) {
            let obj = {};
            obj.value = role.id;
            obj.label = role.name;
            selected.push(obj);
        });
    },
    setTitleList(state, data) {
        const selected = state.formData.title_list;
        data.forEach(function (title, index) {
            let obj = {};
            obj.value = title.value;
            obj.label = title.label;
            selected.push(obj);
        });
    },
    setBanchList(state, data) {
        const selected = state.formData.branch_list;
        data.forEach(function (branch, index) {
            let obj = {};
            obj.value = branch.id;
            obj.label = branch.branch_name;
            selected.push(obj);
        });
    },

    resetUserData(state, data) {
        state.userData.id = "";
        state.userData.title = "";
        state.userData.first_name = "";
        state.userData.last_name = "";
        state.userData.email = "";
        state.userData.role = "";
        state.userData.company_id = "";
        state.userData.branch_id = "";
        state.userData.contact_no = "";
        state.userData.status = true;
        state.userData.branch_id = "";
        state.userData.profile_picture="";
        state.userData.signature="";


    },
    setUserdata(state, data) {
        state.userData.id = data.id;
        state.userData.title = data.title;
        state.userData.first_name = data.first_name;
        state.userData.last_name = data.last_name;
        state.userData.email = data.email;
        state.userData.role = data.roles[0].id;
        state.userData.company_id = data.company_id;
        state.userData.branch_id = data.branch_id;
        state.userData.contact_no = data.contact_no;
        state.userData.status = data.status == 1 ? true : false;
        state.userData.branch_id = data.branch_id;
        state.userData.profile_picture=data.profile_picture;
        state.userData.signature=data.signature;
    }


};

const actions = {
    async getCompanies({ commit }, data) {
        http
            .get("utilities/companies", null)
            .then((response) => {
                if (response) {
                    commit("setCompanyList", response.data.data);
                }
            })
            .catch((error) => {
                commit('showNotification', {
                    title: "Error!",
                    msg: "Error occured while retrieving company data.",
                    type: "error",
                    position: "rightTop"
                  }, { root: true });
            });
    },
    async getRoles({ commit }, data) {
        http
            .get("role/nplist", null)
            .then((response) => {
                if (response) {
                    commit("setRoleList", response.data.data);
                }
            })
            .catch((error) => {
                commit('showNotification', {
                    title: "Error!",
                    msg: "Error occured while retrieving role data.",
                    type: "error",
                    position: "rightTop"
                  }, { root: true });
            });
    },
    async getTitles({ commit }, data) {
        http
            .get("utilities/titles", null)
            .then((response) => {
                if (response) {
                    commit("setTitleList", response.data.data);
                }
            })
            .catch((error) => {
                commit('showNotification', {
                    title: "Error!",
                    msg: "Error occured while retrieving title data.",
                    type: "error",
                    position: "rightTop"
                  }, { root: true });
            });
    },
    async getBranches({ commit }, data) {
        http
            .get("branch/nplist", null)
            .then((response) => {
                if (response) {
                    commit("setBanchList", response.data.data);
                }
            })
            .catch((error) => {
                commit('showNotification', {
                    title: "Error!",
                    msg: "Error occured while retrieving branch data.",
                    type: "error",
                    position: "rightTop"
                  }, { root: true });
            });
    },

    async createUser({ commit }, data) {
        return new Promise((resolve, reject) => {
            http
                .post("user/create", data)
                .then(response => {
                    resolve(response);

                })
                .catch((error) => {
                    commit('showNotification', {
                        title: "Error!",
                        msg: "Error occured while inserting user data.",
                        type: "error",
                        position: "rightTop"
                      }, { root: true });
                });
        });
    },

    clearData({ commit }, data) {
        commit("resetUserData");
    },

    async getUser({ commit }, data) {
        return new Promise((resolve, reject) => {
            http
                .get("user/" + data, null)
                .then((response) => {
                    if (response) {
                        commit("setUserdata", response.data.data);
                        resolve(response);
                    }
                })
                .catch((error) => {
                    commit('showNotification', {
                        title: "Error!",
                        msg: "Error occured while retrieving user data.",
                        type: "error",
                        position: "rightTop"
                      }, { root: true });
                });
        });
    },

    async editUser({ commit }, data) {
        return new Promise((resolve, reject) => {
            http
                .post("user/update", data)
                .then(response => {
                    resolve(response);

                })
                .catch((error) => {
                    commit('showNotification', {
                        title: "Error!",
                        msg: "Error occured while updating user data.",
                        type: "error",
                        position: "rightTop"
                      }, { root: true });
                });
        });
    },

    async changePassword({commit}, data) {
        return new Promise((resolve, reject) => {
             http
                .post("user/reset_password", data)
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
