<template>
  <div>
    <CNavbar expandable="md" color="info">
      <CToggler inNavbar @click="show = !show" />
      <CNavbarBrand href="#/home"> Merchant</CNavbarBrand>
      <CCollapse :show="show" navbar>
        <!-- Right aligned nav items -->
        <CNavbarNav class="ml-auto">
          <CButton size="xl"  color="danger" to="/home" >Merchant List</CButton>

        </CNavbarNav>
      </CCollapse>
    </CNavbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      show: false,
      navbarText: false,
      navbarDropdown: false,
      user_type:localStorage.getItem("role_name"),
      access_token:localStorage.getItem("access_token")

    };
  },
};
</script>