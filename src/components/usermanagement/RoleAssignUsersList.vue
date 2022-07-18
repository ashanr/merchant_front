<template>
  <div>
    <CRow>
      <CCol md="12">
          <CCard class="pt-3 pl-3 pr-3">
              <CRow>

                  <CCol md="2">
                      <CInput
                          type="name"
                          autocomplete="name"
                          label="Enter First Name"
                          placeholder="Search in First Name"
                          v-model="user_fname"
                      />
                  </CCol>
                  <CCol md="2">
                    <CInput
                        type="name"
                        autocomplete="name"
                        label="Enter Last Name"
                        placeholder="Search in Last Name"
                        v-model="user_lname"
                    />
                </CCol>
                  <!-- <CCol md="2">
                      <CInput
                          type="name"
                          autocomplete="name"
                          label="Enter Role"
                          placeholder="Search in Role"
                          v-model="user_role"
                      />
                  </CCol> -->
                  <CCol md="2">
                      <CSelect
                          type="name"
                          autocomplete="name"
                          label="Enter Company"
                          placeholder="Search in Company"
                          :value.sync="user_company"
                          :options="company_options"
                      />
                  </CCol>

                  <CCol md="2">
                      <CSelect
                          type="name"
                          autocomplete="name"
                          label="Enter Status"
                          placeholder="Search in Status"
                          :value.sync="user_status"
                          :options="status_options"
                      />
                  </CCol>

                  <CCol md="3">
                      <div class="mt-4">
                          <CButton 
                              color="primary" 
                              class="" 
                              @click="doFilter"
                          >
                            <CIcon name="cil-magnifying-glass" />
                            Search
                          </CButton>
            
                          <CButton
                            color="primary"
                            variant="outline"
                            class="ml-3"
                            @click="resetFilter"
                          >
                            <CIcon name="cil-pencil" />
                            Clear
                          </CButton>
                        </div>
                  </CCol>
              </CRow>
              <CRow>
                  <CCol md="12">
                     
                  </CCol>
              </CRow>
          </CCard>
      </CCol>
  </CRow>
    <CRow>
      <CCol md="12">
        <CCard class="pt-3 pl-3 pr-3">
          <CRow>
            <CCol md="12">
                <div class="pt-2">
                  <CButton
                  class="float-right"
                  color="success"
                  @click="assignNewUserModal = true"
                  >Register New User
                </CButton>                
              </div>
            </CCol>

        </CRow>
        <CRow>
            <CCol md="2">
                <div class="pt-2">
                </div>
            </CCol>
        </CRow>
          <CRow>
            <CCol md="12">
              <vuetable
                ref="Vuetable"
                :api-url="getUrl"
                :http-options="httpOptions"
                :fields="fields"
                pagination-path
                @vuetable:pagination-data="onPaginationData"
                :per-page="perPage"
                :css="{ sortableIcon: 'grey sort icon' }"
                :append-params="moreParams"
              >
                <template slot="tableHeader">
                  <vuetable-row-header></vuetable-row-header>
                  <!-- <row-filter :visible="filterRowVisible" @vuetable:header-event="onRowHeaderEvent"></row-filter> -->
                </template>
                <div slot="custom-actions">
                  <CButton size="sm" color="dark" variant="outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                      />
                      <path
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                      />
                    </svg>
                  </CButton>
                  <CButton
                    class="ml-2"
                    size="sm"
                    color="dark"
                    variant="outline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      role="img"
                      class="c-icon c-icon-md"
                      height="42"
                    >
                      <path
                        fill="var(--ci-primary-color, currentColor)"
                        d="M143.4,331.909a17.505,17.505,0,0,0,3.285-.311l89.867-21.281,190.2-190.2a62.922,62.922,0,1,0-88.986-88.985l-190.2,190.2-21.134,89.185-.145.674A17.435,17.435,0,0,0,143.4,331.909Zm33.21-94.369L360.4,53.755a30.922,30.922,0,1,1,43.731,43.731L220.342,281.272l-57.314,13.582Z"
                        class="ci-primary"
                      ></path>
                      <path
                        fill="var(--ci-primary-color, currentColor)"
                        d="M472,376H40a24.028,24.028,0,0,0-24,24v72a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V400A24.028,24.028,0,0,0,472,376Zm-8,88H48V408H464Z"
                        class="ci-primary"
                      ></path>
                    </svg>
                  </CButton>
                  <CButton
                    class="ml-2"
                    size="sm"
                    color="dark"
                    variant="outline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      role="img"
                      class="c-icon c-icon-md"
                      height="42"
                    >
                      <path
                        fill="var(--ci-primary-color, currentColor)"
                        d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"
                        class="ci-primary"
                      ></path>
                      <rect
                        width="32"
                        height="200"
                        x="168"
                        y="216"
                        fill="var(--ci-primary-color, currentColor)"
                        class="ci-primary"
                      ></rect>
                      <rect
                        width="32"
                        height="200"
                        x="240"
                        y="216"
                        fill="var(--ci-primary-color, currentColor)"
                        class="ci-primary"
                      ></rect>
                      <rect
                        width="32"
                        height="200"
                        x="312"
                        y="216"
                        fill="var(--ci-primary-color, currentColor)"
                        class="ci-primary"
                      ></rect>
                      <path
                        fill="var(--ci-primary-color, currentColor)"
                        d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"
                        class="ci-primary"
                      ></path>
                    </svg>
                  </CButton>
                </div>
              </vuetable>
              <CRow>
                <CCol md="12">
                  <div class="vuetable-pagination ui basic segment grid row">
                    <CCol md="4">
                      <vuetable-pagination-info
                        ref="paginationInfo"
                      ></vuetable-pagination-info>
                    </CCol>
                    <CCol md="8">
                      <vuetable-pagination
                        style="float:right;"
                        ref="pagination"
                        @vuetable-pagination:change-page="onChangePage"
                      ></vuetable-pagination>
                    </CCol>
                  </div>
                </CCol>
              </CRow>

              <CModal title="Add New User" :show.sync="assignNewUserModal">
                <CForm>
                  <CSelect
                    label="Enter  Title"
                    horizontal
                    :options="[1, 2, 3, 4, 5, 6, 7]"
                    placeholder="Enter Name"
                  ></CSelect>
                  <CInput
                    label="First Name"
                    horizontal
                    placeholder="Enter First Name"
                  />
                  <CInput
                    label="Last Name"
                    horizontal
                    placeholder="Enter Last Name"
                  />
                  <CInput label="NIC" horizontal placeholder="Enter NIC" />
                  <CSelect
                    label="Select Role"
                    horizontal
                    placeholder="Select Role"
                    :options="[1, 2, 3, 4, 5, 6, 7]"
                  />
                  <CSelect
                    label="Select Company"
                    horizontal
                    placeholder="Select Role"
                    :options="[1, 2, 3, 4, 5, 6, 7]"
                  />
                  <CInput
                    label="Contact Number"
                    horizontal
                    placeholder="Enter Contact Number"
                  />
                  <CInput
                    label="Email Address"
                    horizontal
                    placeholder="Enter Email Address"
                  />

                  <CRow>
                    <CCol md="3">
                      <label horizontal plaintext>
                        Status
                      </label>
                    </CCol>
                    <CCol md="9">
                      <CSwitch
                        class="float-left"
                        shape="pill"
                        color="info"
                        data-on="On"
                        data-off="Off"
                        :checked="true"
                      />
                    </CCol>
                  </CRow>
                </CForm>

                <template #footer>
                  <CButton
                    @click="createInvigilatorModal = false"
                    variant="outline"
                    color="danger"
                    >Cancel</CButton
                  >
                  <CButton @click="createInvigilatorModal = false" color="info"
                    >Create User</CButton
                  >
                </template>
              </CModal>
            </CCol>
          </CRow>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import { http } from "@/config/http";
import Vue from "vue";
import Vuetable from "vuetable-2";
// import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
import VuetablePagination from "@/components/vueTable/VuetablePaginationBootstrap4";
import VuetablePaginationInfo from "vuetable-2/src/components/VuetablePaginationInfo.vue";
import VuetableRowHeader from "vuetable-2/src/components/VuetableRowHeader.vue";
import FieldsDef from "./RoleAssignUsersDef";
import MyDetailRow from "@/components/vueTable/MyDetailRow";
import RowFilter from "@/components/vueTable//RowFilter.vue";
export default {
  name: "RoleAssignUsersList",
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo,
    VuetableRowHeader,
    // RowFilter,
  },

  data() {
      return {
        user_fname: "",
        user_lname: "",
        user_role: "",
        user_company: "",
        user_status: "",
        status_options:[
            { value: 1, label: "Active" },
            { value: 0, label: "Inactive" }
        ],
        company_options: [],
        assignNewUserModal: false,
        fields: FieldsDef,
        httpOptions: {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
          data: {},
        },
        moreParams: {},
        getUrl: process.env.VUE_APP_API_ENDPOINT + "user/list",
        detailRow: MyDetailRow,
        paginationComponent: "vuetable-pagination",
        vuetableFields: false,
        loading: "",
        tableHeight: "500px",
        multiSort: true,
        perPage: 10,
        scrollbarVisible: false,
      };
  },
  async mounted() {
      this.getCompanies();
  },
  methods: {
      getCompanies(){
                http
                .get("utilities/companies",null)
                .then((response) => {
                if (response.data!=null) {
                    const selected = this.company_options;
                    response.data.data.forEach(function (company, index) {
                        let obj = {};
                        obj.value = company.id;
                        obj.label = company.name;
                        selected.push(obj);
                    });

                    
                } 
                })
                .catch((error) => {
                //console.log(error);
                });
                
      },
      doFilter() {
          this.moreParams = {
              first_name: this.user_fname,
              last_name: this.user_lname,
              role: this.user_role,
              status: this.user_status,
              company_id: this.user_company
          };
        
        Vue.nextTick(() => this.$refs.Vuetable.refresh());
      },
      resetFilter() {
          this.user_fname = "";
          this.user_lname = "";
          this.user_role = "";
          this.user_status = "";
          this.user_company = "";
          this.moreParams = {};
          Vue.nextTick(() => this.$refs.Vuetable.refresh());
      },
      onPaginationData(paginationData) {
        this.$refs.pagination.setPaginationData(paginationData);
        this.$refs.paginationInfo.setPaginationData(paginationData);
      },

      onChangePage(page) {
        this.$refs.Vuetable.changePage(page);
      },
  },
};
</script>
