<template>
  <CContainer>
    <CRow>
      <CCol lg="12 " class="bg-info py-3">
        <NavBar />
      </CCol>
    </CRow>
    <CRow>
      <CCol lg="12 " class="py-3">
        <SignupForm />
      </CCol>
    </CRow>
  </CContainer>
</template>
<script>
import Vue from "vue";
import NavBar from "@/components/forum/layout/NavBar.vue";
import SignupForm from "@/components/forum/user/SignUpForm.vue";

export default {
  methods: {},
  name: "Home",
  components: {
    NavBar,
    SignupForm,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
