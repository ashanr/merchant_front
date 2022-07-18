<template>
    <div>
    </div>
</template>

<script>

import { mapActions } from "vuex";

export default {
  name: "logout",
  methods: { ...mapActions("login", ["destoryToken"]) },
  mounted() {
    this.destoryToken();
  }
};
</script>

<style>
</style>