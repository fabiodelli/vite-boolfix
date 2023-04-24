<script>
import { store } from '../store.js'
export default {
    name: 'appHeader',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
  
  <div class="header">
      <h1 class="ms-2">Boolflix</h1>
      <div>
          <input type="text" placeholder="Search film or series" v-model="store.text">
          <input class="me-2" type="button" value="Search" @click='store.callApi(`${store.API_URL}&query=${store.text}`)'>
      </div>
  </div>
</template>

<style>

</style>