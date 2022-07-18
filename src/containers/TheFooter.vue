<template>
  <CFooter :fixed="false">
    <div>
      <a href="#" target="_blank">Merchant</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} Merchant</span>
    </div>
    <div class="ml-auto">
      <span class="mr-1">Developed by</span>
      <a href="https://www.laravel.com/" target="_blank">Ashan</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
