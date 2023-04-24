<script>
import '/node_modules/bootstrap/scss/bootstrap.scss'
import appHeader from './components/appHeader.vue'
import AppMain from './components/appMain.vue'
import AppFooter from './components/appFooter.vue'

export default {
  components:{AppMain,appHeader},
  data() {
    return {
    }
  },
}

</script>

<template>

  <appHeader/>
  <appMain/>

</template>

<style scoped></style>