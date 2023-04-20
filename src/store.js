import { reactive } from 'vue';
import axios from 'axios'
export const store = reactive({

    API_URL: 'https://api.themoviedb.org/3/search/movie?api_key=4db66c26f4dc5d9d03f395cf284c2c0e',
    apiRes: null,
    text: '',
    flag: [],
    callApi(url) {
        console.log(url)
        axios
            .get(url)
            .then(response => {
                this.apiRes = response.data.results
                /* console.log(response.data.results[].original_language); */
                this.apiRes.forEach((result, index) => {
                    this.flag.push(result.original_language)
                });
                console.log(this.flag);
            })
            .catch(err => {
                console.error(err.message);
            })
    }


})