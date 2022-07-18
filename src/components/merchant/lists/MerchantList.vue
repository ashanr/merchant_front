<template>
  <div>
    <CRow>
      <CCol md="12">
        <CCard class="pt-3 pl-3 pr-3">

   <CRow>
      <CCol md="12">
        <CCard class="pt-3 pl-3 pr-3">
          <CRow>
            <CCol md="3">
              <CInput
                type="text"
                autocomplete="title"
                label="District"
                placeholder="Search in District"
                v-model="districtFilter"
              >
                <template #prepend-content
                  ><i class="grey search outline icon"></i
                ></template>
              </CInput>
            </CCol>
            <CCol md="3">
              <CInput
                type="text"
                autocomplete="code"
                label="Postal Code"
                placeholder="Search in Postal Code"
                v-model="postalCodeFilter"
              >
                <template #prepend-content
                  ><i class="grey search outline icon"></i
                ></template>
              </CInput>
            </CCol>
  
         <CCol md="3">
              <CInput
                type="text"
                autocomplete="title"
                label="Start Date"
                placeholder="Search in Start Date"
                v-model="startDateFilter"
              >
                <template #prepend-content
                  ><i class="grey search outline icon"></i
                ></template>
              </CInput>
            </CCol>

            <CCol md="3">
              <CInput
                type="text"
                autocomplete="title"
                label="End Date"
                placeholder="Search in End Date"
                v-model="endDateFilter"
              >
                <template #prepend-content
                  ><i class="grey search outline icon"></i
                ></template>
              </CInput>
            </CCol>

        </CRow>
          <CRow>
             <CCol md="9"></CCol>
            <CCol md="3">
              <div class="mt-4 mb-4 float-right">
                <CButton color="primary" class="" @click="doFilter">
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
            <CCol md="12"> </CCol>
          </CRow>
        </CCard>
      </CCol>
    </CRow>


          <CRow>
            <CCol md="12">
              <vuetable
                ref="Vuetable"
                :header-rows="false"
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
                </template>
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
                        style="float: right"
                        ref="pagination"
                        @vuetable-pagination:change-page="onChangePage"
                      ></vuetable-pagination>
                    </CCol>
                  </div>
                </CCol>
              </CRow>
            </CCol>
          </CRow>

        </CCard>
      </CCol>
    </CRow>
  </div>
</template>


<script>
import Vue from "vue";
import Vuetable from "vuetable-2";
import VuetablePagination from "@/components/vueTable/VuetablePaginationBootstrap4";
import VuetablePaginationInfo from "vuetable-2/src/components/VuetablePaginationInfo.vue";
import VuetableRowHeader from "vuetable-2/src/components/VuetableRowHeader.vue";
import FieldsDef from "./MerchantListDef";
import MyDetailRow from "@/components/vueTable/MyDetailRow";
import RowFilter from "@/components/vueTable//RowFilter.vue";

import { mapState, mapActions, mapGetters } from "vuex";

export default {
  methods: {},
  name: "PostList",
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo,
    VuetableRowHeader,
    RowFilter,
  },

  data() {
    return {
      viewModal: false,
      isDisabled: false,
      //Filters
       districtFilter: "",
       postalCodeFilter: "",
      startDateFilter: "",
      endDateFilter: "",
    
       //Table Data Defenitions
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
      getUrl: process.env.VUE_APP_API_ENDPOINT + "list_all",

      detailRow: MyDetailRow,
      paginationComponent: "vuetable-pagination",
      vuetableFields: false,
      loading: "",
      tableHeight: "500px",
      multiSort: true,
      perPage: 10,
      filterRowVisible: false,
      scrollbarVisible: false,
    };
  },
  computed: {
    ...mapState("forum", ["postData"]),
  },
  mounted() { 
  },

  methods: {
    ...mapActions("forum", ["deletePost","approvePost"]),

    async onActionClicked(action, data, rowIndex) {
  
    },

     doFilter() {
      this.moreParams = {
        district: this.districtFilter,
        postal_code: this.postalCodeFilter,
        start_date: this.startDateFilter,
        end_date: this.endDateFilter
      };

      Vue.nextTick(() => this.$refs.Vuetable.refresh());
    },

    resetFilter() {
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