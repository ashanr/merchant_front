import router from "@/router";
import { http } from "@/config/http";


const namespaced = true;

const getDefaultState = () => {
    return {
        errors: [],
        userData: {
            id: "",
            drpTitle: "",
            txtFirstName: "",
            txtLastName: "",
            txtEmail: "",
            txtPassword: "",

        },
        postData: {
            txtID:"",
            txtTitle: "",
            txtContent: "",
        },
        commentData: {
            txtComment: "",
            txtPostID: "",
        },
        formData: {
            title_list: [],
        }
    };
};

const state = getDefaultState();

const getters = {};

const mutations = {

    clearObj(state) {
        Object.assign(state, getDefaultState());
    },

    setFormErrors(state, data) {
        state.errors = [];
        if (data) {
            state.errors = data.details;
        }
    },

    setPostData(state) {
        state.postData.txtTitle = "";
        state.postData.txtContent = "";       
    },
    resetPostData(state) {
        state.postData.txtTitle = "";
        state.postData.txtContent = "";       
    },
    resetComment(state) {
        state.commentData.txtComment = "";
        state.commentData.txtPostID = "";       
    },

};

const actions = {
    async clearPostData({ commit }) {
        commit("clearObj");
    },
    async clearCommentData({ commit }) {
        commit("clearObj");
    },


    //Forum Create New Post
    async createPost({ commit }, data) {

        return new Promise((resolve, reject) => {
            http
                .post("post/create", data)
                .then((response) => {
                    resolve(response);
                })
                .catch(error => {

                    let error = "Error : User Not Authenticated";
                    commit(
                        "showNotification", {
                        title: "Error",
                        msg: error,
                        type: "error",
                    }, { root: true }
                    );

                    // commit("handleExceptions", error, { root: true });
                    // resolve(error.response);
                });
        });
    },

    //Forum Approve Post
    async approvePost({ commit }, data) {

        return new Promise((resolve, reject) => {
            http
                .post("post/approve", data)
                .then((response) => {
                    resolve(response);
                })
                .catch(error => {
                    
                    commit("handleExceptions", error, { root: true });
                    resolve(error.response);
                });
        });
    },

    //Forum Remove Post and Related Comments
    async deletePost({ commit }, data) {

        return new Promise((resolve, reject) => {
            http
                .post("post/remove", data)
                .then((response) => {
                    resolve(response);
                })
                .catch(error => {
                    commit("handleExceptions", error, { root: true });
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
