<script>
/* import { store } from '../store.js' */
export default {
    name: 'appStar',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
        <img v-for="star in Math.ceil(result.vote_average / 2)" src="/fullstar.png">
        <img v-for="star in  5 - Math.ceil(result.vote_average / 2)" src="/emptistar.png">
</template>



<style lang="scss"></style>