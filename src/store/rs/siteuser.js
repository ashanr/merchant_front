import router from "@/router";
import { http } from "@/config/http";
import _ from "lodash";

const namespaced = true;

const getDefaultState = () => {
    return {
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
            arrayComments:[],
            txtContent: "",
            txtStatus: "",
            txtCreatedAt: "",
            txtCreatedBy:""
        },

       commentData: {
            txtComment: "",
            txtPostID: "",
        },
    };
};

const state = getDefaultState();

const getters = {};

const mutations = {
    clearObj(state) {
        Object.assign(state, getDefaultState());
    },

    resetCommentData(state,data) {  
        state.commentData.txtComment= "";
    },

    setFormErrors(state, data) {
        state.errors = [];
        if (data) {
            state.errors = data.details;
        }
    },

    resetUserData(state, data) {
        state.userData.id = "";
        state.userData.txtEmail = "";
        state.userData.drpTitle = "";
        state.userData.txtFirstName = "";
        state.userData.txtLastName = "";
        state.userData.txtPassword = "";

    },

    setUserdata(state, data) {
        state.userData.id = data.id;
        state.userData.drpTitle = data.title;
        state.userData.txtEmail = data.email;
        state.userData.txtFirstName = data.first_name;
        state.userData.txtLastName = data.last_name;
        state.userData.txtPassword = data.password;
    },

    setPostData(state,data) {  
        state.postData.txtID= data.id;
        state.postData.txtTitle= data.title;
        state.postData.arrayComments=data.comments;
        state.postData.txtContent= data.content;
        state.postData.txtStatus= data.status;
        state.postData.txtCreatedAt= data.created_at; 
        state.postData.txtCreatedBy= data.creator.email; 
      
        const comment_list = state.postData.arrayComments;
        data.forEach(function (comment) {
                let obj = {};
                obj.text = comment.comment;
                // const ownerArray = Object.entries(data[0].available_tags);
                // ownerArray.forEach(([key, value]) => {
                //     // console.log(owner);
                //     if(key == 'email'){
                //         obj.owner = value;
                //     }
               
                // });

                comment_list.push(obj);
            
        });
    },

 


};

const actions = {

    clearStateData({commit}){
        commit("clearObj");
    },
    clearCommentData({commit}){
        commit("resetCommentData");
    },

    //Forum New User Create
    async createUser({ commit }, data) {
        return new Promise((resolve, reject) => {
            http
                .post("user/create", data)
                .then(response => {
                    resolve(response);
                })
                .catch((error) => {
                    commit("handleExceptions", error, { root: true });
                    resolve(error.response);
                });
        });
    },

    //Get User Details
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


    async retrievePost({ commit }, data) {
        return new Promise((resolve, reject) => {
            http
                .get("post/get/"+data, null)
                .then(response => {
                    if (response.data.error) {
                       
                    }else{
                        commit("setPostData", response.data);
                    }
                    resolve(response);
                })
                .catch(error => {
                   // commit("handleExceptions", error, { root: true });
                    resolve(error.response);
                });
        });
    },
         //Forum  Add Comment to Post
    async addComment({ commit }, data) {

            return new Promise((resolve, reject) => {
                http
                    .post("comment/create", data)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch(error => {
                        commit("handleExceptions", error, { root: true });
                        resolve(error.response);
                    });
            });
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
                    commit("handleExceptions", error, { root: true });
                    resolve(error.response);
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
