<template>
    <div>
        <CRow>
            <CCol md="12">
                <CCard class="pt-3 pl-3 pr-3">
                    <ValidationObserver ref="role_form" v-slot="{ passes }">
                        <form action="#" @submit.prevent="passes(submitData)">
                            <CRow>
                                <CCol md="12">
                                    <ValidationProvider
                                        vid="roleName"
                                        name="Role Name"
                                        v-slot="{ errors }"
                                        rules="required"
                                    >
                                        <CInput
                                            label="Role Name"
                                            v-model = "roleName"
                                            horizontal
                                            placeholder="Enter Role Name"
                                        />
                                        <span
                                            class="msg-paragraph danger"
                                            v-for="(error, index) in errors"
                                            v-bind:key="index"
                                        >
                                                {{ error }}
                                        </span>
                                    </ValidationProvider>
                                    <CRow>
                                        <CCol md="3">
                                            <label horizontal plaintext>
                                                Status
                                            </label>
                                        </CCol>
                                        <CCol md="9">
                                            <!-- <ValidationProvider
                                                vid="roleStatus"
                                                name="Status"
                                                v-slot="{ errors }"
                                                rules="required"
                                            > -->
                                                <CSwitch
                                                    class="float-left"
                                                    shape="pill"
                                                    color="info"
                                                    data-on="On"
                                                    data-off="Off"
                                                    :checked.sync="roleStatus"
                                                />
                                                <!-- <span
                                                class="msg-paragraph danger"
                                                v-for="(error, index) in errors"
                                                v-bind:key="index"
                                                >
                                                    {{ error }}
                                                </span>
                                            </ValidationProvider> -->
                                        </CCol>
                                    </CRow>
                                        
                                    <CRow>
                                        <CCol md="2">
                                            <div class="pt-2">
                                            </div>
                                        </CCol>
                                    </CRow>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol md="12">
                                        <CRow>
                                            <CCol md="4">
                                                <div class="pt-2">
                                                    <label horizontal plaintext>
                                                        Permissions
                                                    </label>
                                                </div>
                                            </CCol>
                                        </CRow>
                        
                                        <CRow>
                                            <CCol md="12">
                                                <div>
                                                    <table class="table">
                                                        <tr v-for="(value, name, index) in permissionList">
                                                            <td>
                                                                <!-- <CInputCheckbox class="ml-4" :value="value.name" :checked.sync="permissions" /> -->
                                                                <input type="checkbox" :value="value.name" v-model="permissions">
                                                            </td>
                                                            <td>{{value.description}}</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div v-if="permissions.length == 0">
                                                    <span class="danger">
                                                        Please select at least one item to the role.
                                                    </span>
                                                </div>
                                            </CCol>
                                        </CRow>
                                        <CCardFooter>
                                            <CRow>
                                                <CCol md="12">
                                                    <CButton class="float-right ml-2" color="info" type="submit" >Save</CButton>
                                                    <CButton class="float-right ml-2" color="info" variant="outline" >Clear</CButton>
                                            </CCol>
                                            </CRow>
                                        </CCardFooter>
                                        
                                </CCol>
                            </CRow>
                        </form>
                    </ValidationObserver>
                </CCard>
            </CCol>
        </CRow>
    </div>
</template>
    
    <script>
    import { http } from "@/config/http";
    import Vue from "vue";
    import Vuetable from 'vuetable-2'
    import { mapState, mapActions } from "vuex";
    export default {
        
        name: 'CreateRoleForm',
        components: {
        },
        data() {
            return {
                roleId: null,
                roleName: "",
                roleStatus: true,
                permissions: [],
            }
        },
        computed: {
            ...mapState("roles", [
            "permissionList",
            "roleData"
            ])
        },
        async mounted() {
            this.PermissionList();

            if(this.$route.params.id!=null)
            {
                this.roleId = this.$route.params.id;
                await this.getRoleData(this.roleId);
                this.roleName = this.roleData.roleName;
                this.roleStatus = this.roleData.roleStatus;
                this.permissions = this.roleData.rolePermissionList;

                console.log(this.roleData.rolePermissionList);
            }
        },
        methods: {
            ...mapActions("roles", [
            "createRole",
            "getPermissionList",
            "getRoleData",
            "editRole"
            ]),

            async submitData() {
                
                const roleData = {
                    id: this.roleId,
                    name: this.roleName,
                    status: this.roleStatus == true ? 1 : 0,
                    slii: 1,
                    permissions: this.permissions
                }

                if(this.roleId!=null)
                {
                    await this.editRole(roleData);
                }
                else
                {
                    await this.createRole(roleData);
                }
                
            },
            async PermissionList() {
			    await this.getPermissionList();
		    }
        },
    }
    </script>
    
<style scoped>
    .examshedule_add_btn{
     width: 70%;
    }
    hr.dashed {
        border-top: 2px dotted rgb(141, 141, 141);
    }
    
</style>
    
