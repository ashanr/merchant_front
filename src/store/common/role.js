import { http } from "@/config/http";

const namespaced = true;

const getDefaultState = () => {
    return {
        roleData: {
            roleName: "",
            roleStatus: true,
            rolePermissionList: [],
        },
        permissionList: [],
    };
};

const state = getDefaultState();

const getters = {};

const mutations = {
    
    clearObj(state) {
        Object.assign(state, getDefaultState());
    },
    updateRole(state, data) {

        state.roleData.roleName = data.role.name;
        state.roleData.roleStatus = data.role.status == 1 ? true : false ;
        data.role.permissions.forEach(function (permission, index) {
            if(permission.name != 'dashboard'){
                state.roleData.rolePermissionList.push(permission.name);
            }            
        });

    },
    resetRoleData(state, data) {
        state.roleData.roleName = "";
        state.roleData.roleStatus = true;
        state.roleData.rolePermissionList = [];

    },
    setPermissionList(state, data) {
        state.permissionList = data.data;
    },
};
const actions = {
    async clearStateData({ commit }) {
        commit("clearObj");
    },

    async getPermissionList({ commit }) {
        // console.log(data);
        await http
            .get("role/permissions", null)
            .then((response) => {
                if (response) {
                    commit("setPermissionList", response.data);
                }
            })
            .catch((error) => {
                //console.log(error);
            });
    },

    async getRoleData({ commit }, id) {
        // console.log(data);
        await http
            .get("role/" + id, null)
            .then((response) => {
                if (response) {
                    commit("updateRole", response.data);
                }
            })
            .catch((error) => {
                //console.log(error);
            });
    },

    async createRole({ commit }, data) {
            return new Promise((resolve, reject) => {
                http
                    .post("role/create", data)
                    .then(response => {
                        resolve(response);
    
                    })
                    .catch(error => {
                        //console.log(response.data);
                        commit("doLogout", response);
                    });
            });
    },

    async editRole({ commit }, data) {
        return new Promise((resolve, reject) => {
            http
                .post("role/update", data)
                .then(response => {
                    resolve(response);

                })
                .catch(error => {
                    //console.log(response.data);
                    commit("doLogout", response);
                });
        });
        
    },

    clearData({ commit }, data) {
        commit("resetRoleData");
    },

};

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
};