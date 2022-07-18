<template>
  <CContainer>
    <CRow>
      <CCol lg="12 " class="bg-info py-3">
        <NavBar />
      </CCol>
    </CRow>
    <CRow>
      <CCol lg="12 " class="py-3">
        <PostThread />
      </CCol>
    </CRow>
  </CContainer>
</template>
<script>
import Vue from "vue";
import NavBar from "@/components/forum/layout/NavBar.vue";
import PostThread from "@/components/forum/post/postThread.vue";

export default {
  methods: {},
  name: "ViewPost",
  components: {
    NavBar,
    PostThread,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
