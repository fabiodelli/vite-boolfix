<script>
import '../node_modules/bootstrap'
import AppHeader from './components/appHeader.vue'
import AppMain from './components/appMain.vue'
import AppFooter from './components/appFooter.vue'
import axios from 'axios'


/* import {store} from './store.js' */

export default {
  data() {
    return {
      /* store */
      API_URL: 'https://api.themoviedb.org/3/search/movie?api_key=4db66c26f4dc5d9d03f395cf284c2c0e',
      apiRes: null,
      text:''
    }
  },

  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(response => {
          this.apiRes = response.data.results
          console.log(this.apiRes);
        })
        .catch(err => {
          console.error(err.message);
        })
    }
  }
}

</script>

<template>
  <h1>Boolflix</h1>
  <input type="text" placeholder="Search film or series" v-model="text">
  <input type="button" value="Search" @click='callApi(`${API_URL}&query=${text}`)'>

  <div class="container">
    <div v-for="(result, index) in apiRes" class="cards">     
        <div>{{ result.title }}</div>
        <div>{{ result.original_title }}</div>
        <div>{{ result.original_language }}</div>
        <div>{{ result.vote_average }}</div>
      
    </div>
  </div>

</template>

<style scoped></style>