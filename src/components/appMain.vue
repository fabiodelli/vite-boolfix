<script>
import { store } from '../store.js'
export default {
    name: 'appMain',
    data() {
        return {
            store
        }
    },
    mounted() {
        setInterval(() => {
            console.log(store.flag);
        }, 5000);
    }
}
</script>

<template>
    <h1>Boolflix</h1>
    <input type="text" placeholder="Search film or series" v-model="store.text">
    <input type="button" value="Search" @click='store.callApi(`${store.API_URL}&query=${store.text}`)'>

    <div class="container d-flex flex-wrap">
        <div v-for="(result, index) in store.apiRes" class="cards bg-info w-25 p-2">
            <div>{{ result.title }}</div>
            <div>{{ result.original_title }}</div>
            <div>{{ result.original_language }}</div>
            <img src="/{{ store.flag[index - 1] }}.png" alt="">
            <img src="`/${{ store.flag[index] }}.png`" alt="">
            <div>{{ result.vote_average }}</div>

        </div>
    </div>
</template>

<style scoped></style>