<template>
  <CContainer>
    <CRow>
      <CCol lg="12 " class="bg-info py-3">
        <NavBar />
      </CCol>
    </CRow>
    <CRow>
      <CCol lg="12 " class="py-3">
        <ContactForm />
      </CCol>
    </CRow>
  </CContainer>
</template>
<script>
import Vue from "vue";
import NavBar from "@/components/forum/layout/NavBar.vue";
import ContactForm from "@/components/forum/site/ContactForm.vue";

export default {
  methods: {},
  name: "Home",
  components: {
    NavBar,
    ContactForm,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
