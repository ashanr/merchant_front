<template>
  <CContainer>
    <CRow>
      <CCol lg="12 " class="bg-info py-3">
        <NavBar />
      </CCol>
    </CRow>
    <CRow>
      <CCol lg="12 " class="py-3">
        <ProfileForm />
      </CCol>
    </CRow>
  </CContainer>
</template>
<script>
import Vue from "vue";
import NavBar from "@/components/forum/layout/NavBar.vue";
import ProfileForm from "@/components/forum/user/ProfileForm.vue";

export default {
  methods: {},
  name: "Home",
  components: {
    NavBar,
    ProfileForm,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
