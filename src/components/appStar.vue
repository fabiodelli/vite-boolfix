<script>
import { store } from '../store.js'
export default {
name:'appStar',
data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div>
        <!-- <img v-for="star in Math.ceil(store.result.vote_average/2)" src="/fullstar.png"> -->
    </div>
</template>



<style lang="scss" scoped></style>