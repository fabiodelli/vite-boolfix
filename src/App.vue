<script>
import '/node_modules/bootstrap/scss/bootstrap.scss'
import AppHeader from './components/appHeader.vue'
import AppMain from './components/appMain.vue'
import AppFooter from './components/appFooter.vue'
import axios from 'axios'

export default {
  components: {  appMain },
  data() {
    return {
    }
  },
}

</script>

<template>

  <appMain/>

</template>

<style scoped></style>