<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        
         <CRow>
                <CCol sm="4" md="4" lg="4">
                    <div class="c-avatar" v-if="profile_image != null">
                        <img  :src="profile_image" class="c-avatar-img " />
                    </div>
                </CCol>
                <CCol class="d-md-down-none" sm="4" md="8" lg="8">
                      <div class="strong text-muted">{{ first_name }}</div>
                       <!--<div class="small text-muted">{{ role_name }}</div>-->
                </CCol>
            </CRow>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader
      tag="div"
      class="text-center"
      color="light"
    >
      <strong>
        Logged as <i style="color:black;">{{ role_name }}</i><br>
        Options
      </strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-user" /> Profile
    </CDropdownItem>
    <CDropdownItem to="/change-password">
      <CIcon name="cil-user" /> Change Password
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-lock-locked" /> <router-link to="/logout">
            Logout
        </router-link>
    </CDropdownItem>
  </CDropdown>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      getURL: process.env.VUE_APP_UPLOAD_PATH,
      itemsCount: 42,
      profile_image:null
    }
  },
  async mounted() {
    if(this.profile_picture != null){
      this.profile_image = this.getURL + this.profile_picture
    }
  },
  computed: { 
    ...mapState("login", ["first_name","last_name","role_name","profile_picture"]),
  }, 
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>