import { reactive } from 'vue';
import axios from 'axios'
export const store = reactive({

    API_URL:'https://api.themoviedb.org/3/movie/550?api_key=4db66c26f4dc5d9d03f395cf284c2c0e',
    apiRes:null,

    methods: {
        callApi(url) {
            axios
                .get(url)
                .then(response => {
                    this.apiRes = response.data.data
                    console.log(this.apiRes);
                })
                .catch(err => {
                    console.error(err.message);
                })
        }  
    }

})