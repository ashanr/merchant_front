<template>
  <CContainer>
    <CRow>
      <CCol lg="12 " class="bg-info py-3">
        <NavBar />
      </CCol>
    </CRow>
    <CRow>
      <CCol lg="12 " class="py-3">
        <PostForm />
      </CCol>
    </CRow>
  </CContainer>
</template>
<script>
import Vue from "vue";
import NavBar from "@/components/forum/layout/NavBar.vue";
import PostForm from "@/components/forum/post/createPost.vue";

export default {
  methods: {},
  name: "CreatePost",
  components: {
    NavBar,
    PostForm,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
