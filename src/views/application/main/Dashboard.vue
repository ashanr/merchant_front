<template>
  <div>
     <div v-if="this.role_id == 2 || this.role_id == 3">
    <CRow>
      <CCol md="12">
        <CCard class="pt-3 pl-3">
          <CRow>
            <CCol sm="1"></CCol>
            <CCol sm="3">
              <CSelect
                placeholder="Search Exam Name"
                :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
              />
            </CCol>
            <CCol sm="3">
              <CInput type="date" />
            </CCol>
            <CCol sm="3">
              <CInput placeholder="Search Location" />
            </CCol>
            <CCol sm="2">
              <div class="mb-2">
              <CButton color="success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  role="img"
                  class="c-icon c-icon-md mr-2"
                  height="42"
                >
                  <path
                    fill="var(--ci-primary-color, currentColor)"
                    d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"
                    class="ci-primary"
                  ></path></svg
                >Search
              </CButton>
               <CButton color="primary" class="ml-2" variant="outline">Clear
              </CButton>
              </div>
            </CCol>
          </CRow>
        </CCard>
      </CCol>
    </CRow>

    <CRow class="mt-4">
      <CCol sm="6" md="4">
        <CCard class="exam-card">
          <CCardBody>
            <CRow>
              <CCol sm="7">
                <h4 id="traffic" class="card-title mb-0">SLII Exam 2021</h4>
              </CCol>
              <CCol sm="5" class="d-none d-md-block">
                <div class="card-header-actions">
                  <small class="text-gray float-right">2021/03/01</small>
                  <br />
                  <small class="text-gray float-right">09:00AM-11:00AM</small>
                </div>
              </CCol>
            </CRow>

            <h6 class="text-gray">Hall ID 01</h6>
            <h6 class="text-gray">Available 50/50</h6>
            <CRow>
              <CCol sm="6">
                <h6 class="text-gray">Location Colombo</h6>
              </CCol>
              <CCol sm="6" class="d-none d-md-block">
                <div class="progress-group-header float-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    role="img"
                    class="c-icon c-icon-md"
                    height="42"
                  >
                    <path
                      fill="var(--ci-primary-color, currentColor)"
                      d="M429,15.933l-253.574,120H15.992V347.661L68.184,495.928H182.838l-46.56-128h35.847L431.182,496h64.735L496,15.933Zm-269.009,320H103.966l.061,36.949,33.119,91.051h-46.3L47.992,342.193V167.928h112Zm32.125-172.495L367.992,80.205V429.063L192.117,342.114ZM463.923,464H438.66l-38.668-19.117V65.063l36.2-17.13h27.8Z"
                      class="ci-primary"
                    ></path>
                  </svg>
                  <span
                    ><small class="text-gray pl-3"
                      >Request New Hall</small
                    ></span
                  >
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol sm="6" md="4">
        <CCard class="exam-card">
          <CCardBody>
            <CRow>
              <CCol sm="7">
                <h4 id="traffic" class="card-title mb-0">SLII Exam 2021</h4>
              </CCol>
              <CCol sm="5" class="d-none d-md-block">
                <div class="card-header-actions">
                  <small class="text-gray float-right">2021/03/01</small>
                  <br />
                  <small class="text-gray float-right">09:00AM-11:00AM</small>
                </div>
              </CCol>
            </CRow>

            <h6 class="text-gray">Hall ID 01</h6>
            <h6 class="text-gray">Available 50/50</h6>
            <CRow>
              <CCol sm="6">
                <h6 class="text-gray">Location Colombo</h6>
              </CCol>
              <CCol sm="6" class="d-none d-md-block">
                <div class="progress-group-header float-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    role="img"
                    class="c-icon c-icon-md"
                    height="42"
                  >
                    <path
                      fill="var(--ci-primary-color, currentColor)"
                      d="M429,15.933l-253.574,120H15.992V347.661L68.184,495.928H182.838l-46.56-128h35.847L431.182,496h64.735L496,15.933Zm-269.009,320H103.966l.061,36.949,33.119,91.051h-46.3L47.992,342.193V167.928h112Zm32.125-172.495L367.992,80.205V429.063L192.117,342.114ZM463.923,464H438.66l-38.668-19.117V65.063l36.2-17.13h27.8Z"
                      class="ci-primary"
                    ></path>
                  </svg>
                  <span
                    ><small class="text-gray pl-3"
                      >Request New Hall</small
                    ></span
                  >
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol sm="6" md="4">
        <CCard class="exam-card">
          <CCardBody>
            <CRow>
              <CCol sm="7">
                <h4 id="traffic" class="card-title mb-0">SLII Exam 2021</h4>
              </CCol>
              <CCol sm="5" class="d-none d-md-block">
                <div class="card-header-actions">
                  <small class="text-gray float-right">2021/03/01</small>
                  <br />
                  <small class="text-gray float-right">09:00AM-11:00AM</small>
                </div>
              </CCol>
            </CRow>

            <h6 class="text-gray">Hall ID 01</h6>
            <h6 class="text-gray">Available 50/50</h6>
            <CRow>
              <CCol sm="6">
                <h6 class="text-gray">Location Colombo</h6>
              </CCol>
              <CCol sm="6" class="d-none d-md-block">
                <div class="progress-group-header float-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    role="img"
                    class="c-icon c-icon-md"
                    height="42"
                  >
                    <path
                      fill="var(--ci-primary-color, currentColor)"
                      d="M429,15.933l-253.574,120H15.992V347.661L68.184,495.928H182.838l-46.56-128h35.847L431.182,496h64.735L496,15.933Zm-269.009,320H103.966l.061,36.949,33.119,91.051h-46.3L47.992,342.193V167.928h112Zm32.125-172.495L367.992,80.205V429.063L192.117,342.114ZM463.923,464H438.66l-38.668-19.117V65.063l36.2-17.13h27.8Z"
                      class="ci-primary"
                    ></path>
                  </svg>
                  <span
                    ><small class="text-gray pl-3"
                      >Request New Hall</small
                    ></span
                  >
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol sm="6" md="4">
        <CCard class="exam-card">
          <CCardBody>
            <CRow>
              <CCol sm="7">
                <h4 id="traffic" class="card-title mb-0">SLII Exam 2021</h4>
              </CCol>
              <CCol sm="5" class="d-none d-md-block">
                <div class="card-header-actions">
                  <small class="text-gray float-right">2021/03/01</small>
                  <br />
                  <small class="text-gray float-right">09:00AM-11:00AM</small>
                </div>
              </CCol>
            </CRow>

            <h6 class="text-gray">Hall ID 01</h6>
            <h6 class="text-gray">Available 50/50</h6>
            <CRow>
              <CCol sm="6">
                <h6 class="text-gray">Location Colombo</h6>
              </CCol>
              <CCol sm="6" class="d-none d-md-block">
                <div class="progress-group-header float-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    role="img"
                    class="c-icon c-icon-md"
                    height="42"
                  >
                    <path
                      fill="var(--ci-primary-color, currentColor)"
                      d="M429,15.933l-253.574,120H15.992V347.661L68.184,495.928H182.838l-46.56-128h35.847L431.182,496h64.735L496,15.933Zm-269.009,320H103.966l.061,36.949,33.119,91.051h-46.3L47.992,342.193V167.928h112Zm32.125-172.495L367.992,80.205V429.063L192.117,342.114ZM463.923,464H438.66l-38.668-19.117V65.063l36.2-17.13h27.8Z"
                      class="ci-primary"
                    ></path>
                  </svg>
                  <span
                    ><small class="text-gray pl-3"
                      >Request New Hall</small
                    ></span
                  >
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol sm="6" md="4">
        <CCard class="exam-card">
          <CCardBody>
            <CRow>
              <CCol sm="7">
                <h4 id="traffic" class="card-title mb-0">SLII Exam 2021</h4>
              </CCol>
              <CCol sm="5" class="d-none d-md-block">
                <div class="card-header-actions">
                  <small class="text-gray float-right">2021/03/01</small>
                  <br />
                  <small class="text-gray float-right">09:00AM-11:00AM</small>
                </div>
              </CCol>
            </CRow>

            <h6 class="text-gray">Hall ID 01</h6>
            <h6 class="text-gray">Available 50/50</h6>
            <CRow>
              <CCol sm="6">
                <h6 class="text-gray">Location Colombo</h6>
              </CCol>
              <CCol sm="6" class="d-none d-md-block">
                <div class="progress-group-header float-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    role="img"
                    class="c-icon c-icon-md"
                    height="42"
                  >
                    <path
                      fill="var(--ci-primary-color, currentColor)"
                      d="M429,15.933l-253.574,120H15.992V347.661L68.184,495.928H182.838l-46.56-128h35.847L431.182,496h64.735L496,15.933Zm-269.009,320H103.966l.061,36.949,33.119,91.051h-46.3L47.992,342.193V167.928h112Zm32.125-172.495L367.992,80.205V429.063L192.117,342.114ZM463.923,464H438.66l-38.668-19.117V65.063l36.2-17.13h27.8Z"
                      class="ci-primary"
                    ></path>
                  </svg>
                  <span
                    ><small class="text-gray pl-3"
                      >Request New Hall</small
                    ></span
                  >
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol sm="6" md="4">
        <CCard class="exam-card">
          <CCardBody>
            <CRow>
              <CCol sm="7">
                <h4 id="traffic" class="card-title mb-0">SLII Exam 2021</h4>
              </CCol>
              <CCol sm="5" class="d-none d-md-block">
                <div class="card-header-actions">
                  <small class="text-gray float-right">2021/03/01</small>
                  <br />
                  <small class="text-gray float-right">09:00AM-11:00AM</small>
                </div>
              </CCol>
            </CRow>

            <h6 class="text-gray">Hall ID 01</h6>
            <h6 class="text-gray">Available 50/50</h6>
            <CRow>
              <CCol sm="6">
                <h6 class="text-gray">Location Colombo</h6>
              </CCol>
              <CCol sm="6" class="d-none d-md-block">
                <div class="progress-group-header float-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    role="img"
                    class="c-icon c-icon-md"
                    height="42"
                  >
                    <path
                      fill="var(--ci-primary-color, currentColor)"
                      d="M429,15.933l-253.574,120H15.992V347.661L68.184,495.928H182.838l-46.56-128h35.847L431.182,496h64.735L496,15.933Zm-269.009,320H103.966l.061,36.949,33.119,91.051h-46.3L47.992,342.193V167.928h112Zm32.125-172.495L367.992,80.205V429.063L192.117,342.114ZM463.923,464H438.66l-38.668-19.117V65.063l36.2-17.13h27.8Z"
                      class="ci-primary"
                    ></path>
                  </svg>
                  <span
                    ><small class="text-gray pl-3"
                      >Request New Hall</small
                    ></span
                  >
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol sm="6" md="4">
        <CCard class="exam-card">
          <CCardBody>
            <CRow>
              <CCol sm="7">
                <h4 id="traffic" class="card-title mb-0">SLII Exam 2021</h4>
              </CCol>
              <CCol sm="5" class="d-none d-md-block">
                <div class="card-header-actions">
                  <small class="text-gray float-right">2021/03/01</small>
                  <br />
                  <small class="text-gray float-right">09:00AM-11:00AM</small>
                </div>
              </CCol>
            </CRow>

            <h6 class="text-gray">Hall ID 01</h6>
            <h6 class="text-gray">Available 50/50</h6>
            <CRow>
              <CCol sm="6">
                <h6 class="text-gray">Location Colombo</h6>
              </CCol>
              <CCol sm="6" class="d-none d-md-block">
                <div class="progress-group-header float-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    role="img"
                    class="c-icon c-icon-md"
                    height="42"
                  >
                    <path
                      fill="var(--ci-primary-color, currentColor)"
                      d="M429,15.933l-253.574,120H15.992V347.661L68.184,495.928H182.838l-46.56-128h35.847L431.182,496h64.735L496,15.933Zm-269.009,320H103.966l.061,36.949,33.119,91.051h-46.3L47.992,342.193V167.928h112Zm32.125-172.495L367.992,80.205V429.063L192.117,342.114ZM463.923,464H438.66l-38.668-19.117V65.063l36.2-17.13h27.8Z"
                      class="ci-primary"
                    ></path>
                  </svg>
                  <span
                    ><small class="text-gray pl-3"
                      >Request New Hall</small
                    ></span
                  >
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol sm="6" md="4">
        <CCard class="exam-card">
          <CCardBody>
            <CRow>
              <CCol sm="7">
                <h4 id="traffic" class="card-title mb-0">SLII Exam 2021</h4>
              </CCol>
              <CCol sm="5" class="d-none d-md-block">
                <div class="card-header-actions">
                  <small class="text-gray float-right">2021/03/01</small>
                  <br />
                  <small class="text-gray float-right">09:00AM-11:00AM</small>
                </div>
              </CCol>
            </CRow>

            <h6 class="text-gray">Hall ID 01</h6>
            <h6 class="text-gray">Available 50/50</h6>
            <CRow>
              <CCol sm="6">
                <h6 class="text-gray">Location Colombo</h6>
              </CCol>
              <CCol sm="6" class="d-none d-md-block">
                <div class="progress-group-header float-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    role="img"
                    class="c-icon c-icon-md"
                    height="42"
                  >
                    <path
                      fill="var(--ci-primary-color, currentColor)"
                      d="M429,15.933l-253.574,120H15.992V347.661L68.184,495.928H182.838l-46.56-128h35.847L431.182,496h64.735L496,15.933Zm-269.009,320H103.966l.061,36.949,33.119,91.051h-46.3L47.992,342.193V167.928h112Zm32.125-172.495L367.992,80.205V429.063L192.117,342.114ZM463.923,464H438.66l-38.668-19.117V65.063l36.2-17.13h27.8Z"
                      class="ci-primary"
                    ></path>
                  </svg>
                  <span
                    ><small class="text-gray pl-3"
                      >Request New Hall</small
                    ></span
                  >
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol sm="6" md="4">
        <CCard class="exam-card">
          <CCardBody>
            <CRow>
              <CCol sm="7">
                <h4 id="traffic" class="card-title mb-0">SLII Exam 2021</h4>
              </CCol>
              <CCol sm="5" class="d-none d-md-block">
                <div class="card-header-actions">
                  <small class="text-gray float-right">2021/03/01</small>
                  <br />
                  <small class="text-gray float-right">09:00AM-11:00AM</small>
                </div>
              </CCol>
            </CRow>

            <h6 class="text-gray">Hall ID 01</h6>
            <h6 class="text-gray">Available 50/50</h6>
            <CRow>
              <CCol sm="6">
                <h6 class="text-gray">Location Colombo</h6>
              </CCol>
              <CCol sm="6" class="d-none d-md-block">
                <div class="progress-group-header float-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    role="img"
                    class="c-icon c-icon-md"
                    height="42"
                  >
                    <path
                      fill="var(--ci-primary-color, currentColor)"
                      d="M429,15.933l-253.574,120H15.992V347.661L68.184,495.928H182.838l-46.56-128h35.847L431.182,496h64.735L496,15.933Zm-269.009,320H103.966l.061,36.949,33.119,91.051h-46.3L47.992,342.193V167.928h112Zm32.125-172.495L367.992,80.205V429.063L192.117,342.114ZM463.923,464H438.66l-38.668-19.117V65.063l36.2-17.13h27.8Z"
                      class="ci-primary"
                    ></path>
                  </svg>
                  <span
                    ><small class="text-gray pl-3"
                      >Request New Hall</small
                    ></span
                  >
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol sm="6" md="4">
        <CCard class="exam-card">
          <CCardBody>
            <CRow>
              <CCol sm="7">
                <h4 id="traffic" class="card-title mb-0">SLII Exam 2021</h4>
              </CCol>
              <CCol sm="5" class="d-none d-md-block">
                <div class="card-header-actions">
                  <small class="text-gray float-right">2021/03/01</small>
                  <br />
                  <small class="text-gray float-right">09:00AM-11:00AM</small>
                </div>
              </CCol>
            </CRow>

            <h6 class="text-gray">Hall ID 01</h6>
            <h6 class="text-gray">Available 50/50</h6>
            <CRow>
              <CCol sm="6">
                <h6 class="text-gray">Location Colombo</h6>
              </CCol>
              <CCol sm="6" class="d-none d-md-block">
                <div class="progress-group-header float-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    role="img"
                    class="c-icon c-icon-md"
                    height="42"
                  >
                    <path
                      fill="var(--ci-primary-color, currentColor)"
                      d="M429,15.933l-253.574,120H15.992V347.661L68.184,495.928H182.838l-46.56-128h35.847L431.182,496h64.735L496,15.933Zm-269.009,320H103.966l.061,36.949,33.119,91.051h-46.3L47.992,342.193V167.928h112Zm32.125-172.495L367.992,80.205V429.063L192.117,342.114ZM463.923,464H438.66l-38.668-19.117V65.063l36.2-17.13h27.8Z"
                      class="ci-primary"
                    ></path>
                  </svg>
                  <span
                    ><small class="text-gray pl-3"
                      >Request New Hall</small
                    ></span
                  >
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Dashboard",
  components: {},
  data() {
    return { 
      selected: [], // Must be an array reference!
      show: true,
      horizontal: {
        label: "col-3",
        input: "col-9",
      },
      options: ["Option 1", "Option 2", "Option 3"],
      selectOptions: [
        "Option 1",
        "Option 2",
        "Option 3",
        {
          value: "some value",
          label: "Selected option",
        },
      ],
      selectedOption: "some value",

      formCollapsed: true,
      checkboxNames: [
        "Checkboxes",
        "Inline Checkboxes",
        "Checkboxes - custom",
        "Inline Checkboxes - custom",
      ],
      radioNames: [
        "Radios",
        "Inline Radios",
        "Radios - custom",
        "Inline Radios - custom",
      ],
    };
  },
  computed: {
    ...mapState("login", ["access_token","role_name","role_id"]),
  },
  methods: {
    validator(val) {
      return val ? val.length >= 4 : false;
    },
  },

   
};
</script>

<style scoped>
.exam-card {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #58788939;
  border: 1px solid #bdcbe2;
  border-radius: 5px !important;
  opacity: 1;
}

.exam-card:hover {
  background: #1d78ef 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #58788939;
  border: 1px solid #bdcbe2;
  border-radius: 11px;
  opacity: 1;
  color: #ffffff;
  transition: 0.5s;
}
</style>
