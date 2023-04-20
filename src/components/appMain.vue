<script>
import { store } from '../store.js'
export default {
  name: 'appMain',
  data(){
    return {
      store
    }
  },
}
</script>

<template>
  <h1>Boolflix</h1>
  <input type="text" placeholder="Search film or series" v-model="text">
  <input type="button" value="Search" @click='callApi(`${API_URL}&query=${text}`)'>

  <div class="container d-flex flex-wrap">
    <div v-for="(result, index) in apiRes" class="cards bg-info w-25 p-2">
      <div>{{ result.title }}</div>
      <div>{{ result.original_title }}</div>
      <div>{{ result.original_language }}</div>
      <div>{{ result.vote_average }}</div>

    </div>
  </div>
</template>

<style scoped>

</style>