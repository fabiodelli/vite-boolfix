<script>
import appStar from './appStar.vue'
import { store } from '../store.js'
export default {
    name: 'appMain',
    components:{appStar},
    data() {
        return {
            store,
            flag: ["en", "it", "cn", "fr"],
        }
    },
}
</script>

<template>
    

    <div class="container-100 d-flex flex-wrap">
        <div  class="row">           
            <div v-for="(result, index) in store.apiRes" class="col_2">
                <div class="card_container">
                    <img class="poster" :src="'https://image.tmdb.org/t/p/w342' + result.poster_path" alt="">
                    <div class="info">
                        <div v-if='result.media_type === "movie"'>{{ result.title }}</div>
                        <div v-else>{{ result.name }}</div>
                        <div v-if='result.media_type === "movie"'>{{ result.original_title }}</div>
                        <div v-else>{{ result.original_name }}</div>
                        <img v-if="flag.includes(result.original_language)" :src="'./' + result.original_language + '.png'" alt="{{ result.original_language }}">
                        <img v-else src="/world.png" alt="">
                        <!-- <appStar/> -->
                        <br>
                        <img v-for="star in Math.ceil(result.vote_average/2)" src="/fullstar.png">
                        <img v-for="star in  5-Math.ceil(result.vote_average/2)" src="/emptistar.png">
                        <div>{{ result.media_type }}</div>
                        <div>{{ result.overview }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>