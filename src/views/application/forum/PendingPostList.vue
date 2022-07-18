<template>
  <CContainer class="bg-gradient-success">
    <CRow>
      <CCol lg="12 " class="bg-info py-3">
        <NavBar />
      </CCol>
    </CRow>

    <CRow>
      <CCol lg="12 " class="py-3">
        <PostList />
      </CCol>
    </CRow>
  </CContainer>
</template>
<script>
import Vue from "vue";
import NavBar from "@/components/forum/layout/NavBar.vue";
import PostList from "@/components/forum/lists/PostList.vue";

export default {
  methods: {},
  name: "PendingPosts",
  components: {
    NavBar,
    PostList,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
