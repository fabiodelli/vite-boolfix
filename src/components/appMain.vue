<script>
import { store } from '../store.js'
export default {
    name: 'appMain',
    
    data() {
        return {
            store,
            flag:["en","it","cn","fr"],
        }
    },
}
</script>

<template>
    <h1>Boolflix</h1>
    <input type="text" placeholder="Search film or series" v-model="store.text">
    <input type="button" value="Search" @click='store.callApi(`${store.API_URL}&query=${store.text}`)'>

    <div  class="container d-flex flex-wrap">
        <div v-for="(result, index) in store.apiRes" class="cards bg-info w-25 p-2">
            <div v-if='result.media_type === "movie" '>{{ result.title }}</div>
            <div v-else>{{ result.name }}</div>
            <div v-if='result.media_type === "movie"'>{{ result.original_title }}</div>
            <div v-else>{{ result.original_name }}</div>
            <img v-if="flag.includes(result.original_language)" :src="'./' + result.original_language + '.png'" alt="">
            <img v-else src="/world.png" alt="">
            <div>{{ result.vote_average }}</div>
            <div>{{ result.media_type }}</div>
        </div>
    </div>
</template>

<style scoped></style>